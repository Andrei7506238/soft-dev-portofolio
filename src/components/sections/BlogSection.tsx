import { useEffect, useState } from 'react'

type BlogPost = {
  id: string
  title: string
  link: string
  category: string
}

const FEED_URL = 'https://andrei7506238.github.io/blog/feed.xml'
const MAX_POSTS = 8
const CACHE_KEY = 'blog-feed-cache-v1'

function pickAtomLink(entry: Element): string {
  const linkNodes = Array.from(entry.getElementsByTagName('link'))
  const alternate =
    linkNodes.find((node) => (node.getAttribute('rel') ?? 'alternate') === 'alternate') ??
    linkNodes[0]

  return (
    alternate?.getAttribute('href')?.trim() ??
    entry.getElementsByTagName('id')[0]?.textContent?.trim() ??
    ''
  )
}

function pickCategory(entry: Element): string {
  const firstCategory = entry.getElementsByTagName('category')[0]
  if (!firstCategory) {
    return 'Uncategorized'
  }

  return (
    firstCategory.getAttribute('term')?.trim() ??
    firstCategory.textContent?.trim() ??
    'Uncategorized'
  )
}

function parseFeed(xmlText: string): BlogPost[] {
  const xml = new DOMParser().parseFromString(xmlText, 'application/xml')
  const entries = Array.from(xml.querySelectorAll('entry'))
  const nodes = entries

  return nodes
    .slice(0, MAX_POSTS)
    .map((node, index) => {
      const title = node.getElementsByTagName('title')[0]?.textContent?.trim() ?? ''
      const link = pickAtomLink(node)
      const category = pickCategory(node)

      if (!title || !link) {
        return null
      }

      return {
        id: `${link}-${index}`,
        title,
        link,
        category,
      }
    })
    .filter((post): post is BlogPost => post !== null)
}

function readCachedPosts(): BlogPost[] {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw) as BlogPost[]
    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter((post) => post.title && post.link).slice(0, MAX_POSTS)
  } catch {
    return []
  }
}

function writeCachedPosts(posts: BlogPost[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(posts.slice(0, MAX_POSTS)))
  } catch {
    // Ignore quota/storage errors.
  }
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    const cachedPosts = readCachedPosts()

    if (cachedPosts.length > 0) {
      setPosts(cachedPosts)
      setLoading(false)
    }

    async function loadFeed() {
      try {
        const response = await fetch(FEED_URL, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Unable to load blog feed')
        }

        const xmlText = await response.text()
        const parsedPosts = parseFeed(xmlText)
        setPosts(parsedPosts)
        writeCachedPosts(parsedPosts)
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          if (cachedPosts.length === 0) {
            setPosts([])
          }
        }
      } finally {
        setLoading(false)
      }
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => {
        void loadFeed()
      })

      return () => {
        controller.abort()
        window.cancelIdleCallback(idleId)
      }
    }

    const timeoutId = setTimeout(() => {
      void loadFeed()
    }, 80)

    return () => {
      controller.abort()
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="section blog-section" id="blog" aria-labelledby="blog-title">
      <div className="section-header">
        <h2 id="blog-title">Blog</h2>
        <p className="section-subtitle">Latest posts.</p>
      </div>

      {loading ? (
        <p className="blog-feed-state">Loading latest posts...</p>
      ) : posts.length === 0 ? (
        <p className="blog-feed-state">No posts found right now.</p>
      ) : (
        <div className="blog-row" role="list" aria-label="Latest blog posts">
          {posts.map((post) => (
            <a
              className="blog-card"
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              role="listitem"
            >
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-category">{post.category}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
