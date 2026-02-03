
type Props = {
    title: string
    description: string
    demoUrl: string
    tags?: string[]
}

export function LiveDemoSection({ title, description, demoUrl, tags }: Props) {
    return (
        <section className="section live-demo-section" id="live-demo" aria-labelledby="live-demo-title">
            <div className="section-header">
                <h2 id="live-demo-title">Live Demo</h2>
                <p className="section-subtitle">Interact with a live demo of the project below.</p>
                <div className="experimental-banner" role="note" aria-label="Experimental project notice">
                    <div className="experimental-banner-tape" aria-hidden="true" />
                    <div className="experimental-banner-content">
                        <strong className="experimental-banner-title">Experimental • Under construction</strong>
                        <p className="experimental-banner-text">
                            Not production-ready yet. The UI and some features are still work in progress.
                        </p>
                    </div>
                </div>
            </div>

            <div className="live-demo-container">
                <div className="live-demo-info">
                    <h3 className="live-demo-title">{title}</h3>
                    <p className="live-demo-description">{description}</p>

                    {tags && tags.length > 0 && (
                        <div className="live-demo-tags">
                            {tags.map((tag) => (
                                <span key={tag} className="live-demo-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="section-header-actions">
                        <a
                            className="link"
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open demo for ${title}`}
                        >
                            Open in New Tab
                        </a>
                    </div>
                </div>

                <div className="live-demo-frame">
                    <iframe
                        src={demoUrl}
                        title={title}
                        className="demo-iframe"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                </div>
            </div>
        </section>
    )
}
