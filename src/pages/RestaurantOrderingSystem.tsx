import './RestaurantOrderingSystem.css'
import { ButtonLink } from '../components/ui/ButtonLink'

const requirements = [
    'Streamline menu organization and ordering in a dynamic system.',
    'Keep the architecture modular so plugins can extend the core without friction.',
    'Deliver a modern, cross-platform client with a friendly, customizable UI.',
    'Stay adaptable for different restaurant flows and venues.',
]

const featureCards = [
    {
        title: 'Plugin system',
        description:
            'Load extensions at runtime to add capabilities without redeploying the server. Contracts keep plugins interoperable.',
        icon: 'https://cdn.icon-icons.com/icons2/1381/PNG/512/preferencesplugin_94219.png',
    },
    {
        title: 'Cross-platform client',
        description:
            'Flutter client ships to Android, iOS, and web for a consistent guest and staff experience everywhere.',
        icon: 'https://cdn-icons-png.freepik.com/512/9872/9872430.png',
    },
    {
        title: 'Menu and order management',
        description:
            'Versioned menus, multi-section products, and live order editing keep staff productive during service.',
        icon: 'https://cdn-icons-png.freepik.com/512/6868/6868908.png',
    },
]

const strengths = [
    'Client caching for historic menu versions.',
    'Built-in image management and caching.',
    'Self-hosted by design, no internet required.',
    'Clean architecture and interface-driven contracts.',
    'Customizable orders page and dashboards.',
    'Statistics and insights for managers.',
    'Extensible authentication and permissions.',
    'Entity structure validated by Glovo.',
]

const projectStats = [
    { value: '340+', label: 'Files with code' },
    { value: '340,000+', label: 'Lines of code' },
    { value: '100+', label: 'Unit tests' },
]

const architectureSections = [
    {
        title: 'ASP.NET Core server',
        paragraphs: [
            'Controllers, services, and repositories are clearly separated and wired through interfaces.',
            'Domain hosts contracts for repositories, services, entities, events, and transactions. Plugins depend only on these interfaces.',
            'Implementation covers persistence, controllers, authentication, real-time comms, and notifications.',
            'TestImplementation keeps unit coverage focused. Main hosts plugin loading and startup.',
        ],
        image: 'rosPackageDiagram.png',
        caption: 'Server package diagram',
    },
    {
        title: 'Flutter client',
        paragraphs: [
            'Domain defines entities, repositories, and messaging contracts in pure Dart.',
            'Implementation contains generated OpenAPI clients plus concrete repos and services.',
            'UI hosts all Flutter widgets, dependency injection framework glue, and blocks that connect UI to logic.',
            'Server-driven UI components - simply implement the required interfaces in plugins and the UI will adapt.',
            'Clean architecture with clear boundaries keeps the client adaptable and maintainable as features evolve.',
            'State management driven by Cubit/BLoC pattern for predictable, testable UI behavior.',
        ],
        image: 'rosPackageClient.png',
        caption: 'Client package diagram',
    },
]

const components = [
    {
        title: 'Controllers',
        description: 'HTTP endpoints lean on a generic contfroller pattern for reuse and consistency.',
    },
    {
        title: 'AuthService',
        description: 'Handles authentication and authorization, keeping data safe across roles.',
    },
    {
        title: 'Transaction factory',
        description: 'Database transaction wrapper ensures consistency with a clean abstraction.',
    },
    {
        title: 'Mapper',
        description: 'Generic mappers convert between entities and DTOs, reusing definitions across modules.',
    },
    {
        title: 'Event observers',
        description: 'Before/after hooks that validators and notifiers implement; plugins can add new observers.',
    },
    {
        title: 'Persisters',
        description: 'Generic CRUD services that abstract data access for controllers and other services.',
    },
    {
        title: 'Repositories',
        description: 'EF Core–based data layer responsible for querying and persistence.',
    },
]

const entities = [
    {
        title: 'Menu primitives',
        description:
            'Sections, products, attribute groups, and attributes mirror delivery-app schemas for smooth integrations.',
    },
    {
        title: 'Dining topology',
        description: 'Location groups and locations model rooms and tables to match on-the-floor operations.',
    },
    {
        title: 'Orders',
        description:
            'Active orders keep item status flags; finished orders preserve history including cancellations.',
    },
    {
        title: 'Temporal tables',
        description: 'Menu entities use temporal tables so any past state can be queried precisely.',
    },
]

export function RestaurantOrderingSystemPage() {
    const basePath = import.meta.env.BASE_URL || '/'
    const asset = (file: string) => `${basePath}images/restaurant-ordering-system/${file}`

    return (
        <div className="ros-page">
            <section className="ros-hero">
                <div className="ros-hero__content">
                    <p className="ros-eyebrow">Restaurant Ordering System</p>
                    <h1 className="ros-title">Modular ordering for busy restaurants</h1>
                    <p className="ros-lead">
                        A plugin-ready platform with a Flutter client and ASP.NET Core backend. Built to keep menus flexible,
                        orders reliable, and integrations open.
                    </p>
                    <div className="ros-cta-row">
                        <ButtonLink href="https://youtu.be/WKDwvteNCFw" target="_blank" rel="noreferrer">
                            Watch the demo
                        </ButtonLink>
                        <ButtonLink href={`${basePath}#all-projects`} variant="ghost">
                            Back to projects
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <div className="ros-hero__pillars">
                <div className="ros-pillars">
                    {requirements.map((item) => (
                        <div key={item} className="ros-pillars__item">
                            <span className="ros-pillars__bullet" aria-hidden>•</span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>


            <section className="ros-video">
                <div className="ros-card">
                    <div className="ros-card__body">
                        <div className="ros-video__frame">
                            <iframe
                                src="https://www.youtube.com/embed/WKDwvteNCFw"
                                title="Restaurant Ordering System demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                                allowFullScreen
                            />
                        </div>
                        <div className="ros-video__text">
                            <h2>See the flow in action</h2>
                            <p>
                                Orders, menu edits, and plugin-driven options remain responsive with offline-friendly caching and real-time updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ros-section">
                <div className="ros-section__header">
                    <p className="ros-eyebrow">Highlights</p>
                    <h2>Built for flexibility</h2>
                    <p className="ros-section__lead">Runtime plugins, multi-platform delivery, and operational tooling keep the system adaptable.</p>
                </div>
                <div className="ros-feature-grid">
                    {featureCards.map((feature) => (
                        <div key={feature.title} className="ros-feature">
                            <img src={feature.icon} alt="" className="ros-feature__icon" />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ros-section ros-section--muted">
                <div className="ros-section__header">
                    <p className="ros-eyebrow">Operational strength</p>
                    <h2>Resilient during rush hours</h2>
                    <p className="ros-section__lead">Caching, self-hosting, and guardrails keep service smooth when the restaurant is busiest.</p>
                </div>
                <div className="ros-strengths">
                    {strengths.map((item) => (
                        <div key={item} className="ros-strength">
                            <span className="ros-pillars__bullet" aria-hidden>•</span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ros-section">
                <div className="ros-section__header">
                    <p className="ros-eyebrow">Architecture</p>
                    <h2>Clean boundaries, shared contracts</h2>
                    <p className="ros-section__lead">Server and client mirror the same modular principles for easier evolution.</p>
                </div>
                <div className="ros-architecture">
                    {architectureSections.map((block) => (
                        <div key={block.title} className="ros-architecture__item">
                            <div className="ros-card ros-card--split">
                                <div className="ros-card__body">
                                    <div className="ros-card__text">
                                        <h3>{block.title}</h3>
                                        {block.paragraphs.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                    <div className="ros-card__media">
                                        <img src={asset(block.image)} alt={block.caption} />
                                        <p className="ros-caption">{block.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ros-section ros-stats">
                {projectStats.map((stat) => (
                    <div key={stat.label} className="ros-stat">
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </section>

            <section className="ros-section ros-section--muted">
                <div className="ros-section__header">
                    <p className="ros-eyebrow">Server components</p>
                    <h2>Interlocking building blocks</h2>
                    <p className="ros-section__lead">Each layer stays small and swappable, keeping plugins first-class citizens.</p>
                </div>
                <div className="ros-components">
                    <div className="ros-components__media">
                        <img src={asset('rosComponents.png')} alt="Server communication diagram" />
                        <div className="ros-components__row">
                            <img src={asset('rosMappers.png')} alt="Mappers class diagram" />
                            <img src={asset('rosEvents.png')} alt="Events class diagram" />
                        </div>
                        <div className="ros-components__row ros-components__row--center">
                            <img src={asset('rosPersister.png')} alt="Persister class diagram" />
                        </div>
                    </div>
                    <div className="ros-components__list">
                        {components.map((component) => (
                            <div key={component.title} className="ros-component">
                                <h3>{component.title}</h3>
                                <p>{component.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ros-section">
                <div className="ros-section__header">
                    <p className="ros-eyebrow">Plugin architecture</p>
                    <h2>Runtime extensions without redeploys</h2>
                    <p className="ros-section__lead">
                        DLL-based plugins register services through a simple injector contract so new capabilities ship independently.
                    </p>
                </div>
                <div className="ros-card ros-card--split">
                    <div className="ros-card__body ros-card__body--stack">
                        <div className="ros-card__text">
                            <p>
                                The server scans a plugin directory, loads DLLs via Assembly, and instantiates classes implementing an <em>IInjector</em>
                                interface. Plugins receive the IServiceCollection, registering their own services—mappers, persisters, controllers,
                                event observers, and more.
                            </p>
                            <p>
                                Client-side, modules expose options rendered in the UI; triggering an option calls the server to execute the linked
                                action. That keeps integrations discoverable without bloating the core.
                            </p>
                        </div>
                        <div className="ros-card__media">
                            <img src={asset('rosActions.png')} alt="Dynamic options provided by plugins" />
                            <p className="ros-caption">Dynamic client options injected by server plugins</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ros-section ros-section--muted">
                <div className="ros-section__header">
                    <p className="ros-eyebrow">Entities</p>
                    <h2>Modeled for restaurant realities</h2>
                    <p className="ros-section__lead">Menu, rooms, and orders match how teams operate while staying integration-friendly.</p>
                </div>
                <div className="ros-entities">
                    <div className="ros-entities__text">
                        {entities.map((entity) => (
                            <div key={entity.title} className="ros-entity">
                                <h3>{entity.title}</h3>
                                <p>{entity.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="ros-entities__media">
                        <img src={asset('rosDatabase.png')} alt="Database ER diagram" />
                        <p className="ros-caption">ER diagram for the database</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RestaurantOrderingSystemPage
