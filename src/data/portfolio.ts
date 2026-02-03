import type { FeaturedProject } from '../types/portfolio'
import type { Project, Skill } from '../types/portfolio'

const assetBase = import.meta.env.BASE_URL

export const person = {
    name: 'Andrei-Robert Popa',
    role: 'Mobile Software Developer',
    speciality: 'Flutter, Dart & C++',
    company: 'Magic Lane',
    companyUrl: 'https://magiclane.com/',
    headline: `
I am a Mobile Developer focused on building high-performance, well-structured Flutter applications. My work centers on software architecture, Dart FFI, and C++ bindings—creating stable foundations.\n
I enjoy breaking down complex systems into modular, testable components, and I see architecture as the key to long-term maintainability. While my strength is in core logic, my background with tools like Photoshop and Illustrator helps me approach UI with a strong sense of structure and clarity.\n
For me, great mobile apps are built from the inside out: solid architecture first, with the user experience as its natural result.
  `,
    photoSrc: `https://media.licdn.com/dms/image/v2/D4D03AQETN0kD6jT2bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695401890460?e=1771459200&v=beta&t=YuPZNxiAxalSvFnwaeIbE_PQlCvzd9TonluX36yG12o`,
    photoAlt: 'My profile photo',
    links: {
        linkedin: 'https://www.linkedin.com/in/andrei-robert-popa',
    },
} as const

export const skills: Skill[] = [
    {
        name: 'Flutter',
        level: 'most',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/7/79/Flutter_logo.svg`,
        hoverDescription: 'I used Flutter extensively for building both personal and professional projects and it is my main framework',
    },
    {
        name: 'Dart',
        level: 'most',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg`,
        hoverDescription: 'Dart is my primary programming language for mobile development, and I have a deep understanding of its features and best practices.',
    },
    {
        name: 'BLoC / Cubit',
        level: 'most',
        logoUrl: `https://www.svgrepo.com/show/374235/bloc.svg`,
        hoverDescription: 'I mainly use BLoC/Cubit for state management in my Flutter projects, appreciating its clear separation of concerns and testability.',
    },
    {
        name: 'C++',
        level: 'most',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg`,
        hoverDescription: 'I used C and C++ for FFI Dart bindings. Also, I used C++ for most university projects.',
    },
    {
        name: 'C# | ASP.NET',
        level: 'most',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg`,
        hoverDescription: 'C# is my preferred language for backend development, and I have used it in my Bachelor\'s degree with ASP.NET.',
    },
    {
        name: 'Kotlin',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/3/3d/Kotlin_icon_%282016-2021%29.svg`,
        hoverDescription: 'I used Kotlin for the native Android modules in some of the Flutter projects used at work.',
    },
    {
        name: 'Swift',
        level: 'basic',
        logoUrl: `https://www.svgrepo.com/show/374112/swift.svg`,
        hoverDescription: 'I used Swift for the native iOS modules in some of the Flutter projects used at work. I also had a iOS development course at university.',
    },
    {
        name: 'Java | Spring',
        level: 'basic',
        logoUrl: `https://www.svgrepo.com/show/303388/java-4-logo.svg`,
        hoverDescription: 'I used Java in multiple university projects, mainly within the Spring framework.',
    },
    {
        name: 'Python',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg`,
        hoverDescription: 'Advanced scripting and tooling with Python. I also used it at university for various AI/ML projects.',
    },
    {
        name: 'Bash',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg`,
        hoverDescription: 'Scripting and basic tooling with Bash. I used it mainly for automating development tasks that involve simple multiple command-line tools.',
    },
    {
        name: 'JavaScript | TypeScript',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg`,
        hoverDescription: 'I used JavaScript for web development projects, both personal and academic.',
    },
    {
        name: 'React',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`,
        hoverDescription: 'I used React for building this portfolio website.',
    },
    {
        name: 'SQL',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png`,
        hoverDescription: 'I have experience with SQL databases from multiple university projects.',
    },
    {
        name: 'Photoshop',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg`,
        hoverDescription: 'I used Photoshop extensively in high school for commissions, creating digital and print designs such as posters and flyers.',
    },
    {
        name: 'Illustrator',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg`,
        hoverDescription: 'I used Illustrator extensively in high school for commissions, creating digital and print designs such as posters and flyers.',
    },
    {
        name: 'Software Architecture',
        level: 'practices',
        hoverDescription: 'I follow established software architecture patterns to ensure my applications are modular, scalable, and maintainable over time.',
    },
    {
        name: 'Testing',
        level: 'practices',
        hoverDescription: 'I prioritize writing unit and integration tests to ensure code reliability and facilitate future changes and created custom tooling to support this process.',
    },
    {
        name: 'Clean Architecture',
        level: 'practices',
        hoverDescription: 'I apply Clean Architecture principles to separate concerns and create a clear structure in my applications.',
    },
    {
        name: 'Design Patterns',
        level: 'practices',
        hoverDescription: 'I utilize common design patterns to solve recurring problems in software design effectively.',
    },
    {
        name: 'RESTful APIs',
        level: 'practices',
        hoverDescription: 'I have experience designing and consuming RESTful APIs in various university projects.',
    },
    {
        name: 'Version Control (Git)',
        level: 'practices',
        hoverDescription: 'I use Git for version control in all my projects, following best practices for branching and commit messages.',
    },
    {
        name: 'i18n, l10n and Accessibility',
        level: 'practices',
        hoverDescription: 'I ensure my applications are accessible to a diverse audience by implementing internationalization, localization, and accessibility best practices.',
    }
]

export const featuredProjects: FeaturedProject[] = [
    {
        name: 'Plugin Restaurant Ordering System',
        description:
            `
This CS Bachelor’s thesis project features a dynamic restaurant management solution built on ASP.NET Core and Flutter. The backend follows Clean Architecture principles, utilizing a modular, plugin-based system that allows for runtime extensions and unmatched scalability. This architecture enables restaurant owners to integrate custom business logic seamlessly without altering the core infrastructure, ensuring the system evolves alongside their needs.

On the client side, the Flutter application provides a responsive, cross-platform experience optimized with client-side caching for menus and images to minimize server overhead. A key technical highlight is the use of SQL temporal tables, which allows the system to manage historical menu versions and process concurrent orders from different timeframes without data duplication. This is paired with an intuitive statistics dashboard to help managers drive operational efficiency through data-driven insights.
            `,
        tags: ['ASP.NET Core', 'Flutter', 'Clean Architecture'],
        image: `${assetBase}images/showcase/plugin-restaurant-ordering-system.png`,
        links: [
            { label: 'See Case Study', href: '#' },
            { label: 'See Demo', href: 'https://www.youtube.com/watch?v=WKDwvteNCFw' }
        ],
    },
    {
        name: 'Fazan Game Cheat',
        description:
            `
This Flutter application modernizes an older C++ project by reimagining the Romanian dictionary as a directed multigraph. In this model, nodes represent two-letter prefixes and suffixes, while edges represent the words connecting them. By implementing the game logic through graph traversal, the app identifies "dead-end" nodes—vertexes with an out-degree of zero—allowing users to strategically select words that leave opponents with no valid moves.

Beyond the algorithmic core, the project focuses on high-performance string processing and efficient memory management within the mobile environment. The transition from a C++ backend to a cross-platform Flutter UI ensures that complex graph lookups happen in real-time, providing a seamless experience for users. Currently available on the Google Play Store, the app demonstrates the practical application of discrete mathematics in solving competitive linguistic challenges.
        `,
        tags: ['Flutter', 'Dart', 'C++'],
        image: `${assetBase}images/showcase/fazan-cheat.png`,
        links: [
            { label: 'Check on Google Play', href: 'https://play.google.com/store/apps/details?id=com.andrei7506238.fazan_cheat' },
            { label: 'See C++ Project', href: 'https://github.com/Andrei7506238/Fazan' },
        ],
    }
]

// Non-featured projects live here. Add regular projects to this array.
export const projects: Project[] = [
    {
        name: 'Portfolio Website',
        description: 'The source code of this portfolio website, built with React and TypeScript. It showcases my projects, skills, and experience as a software developer. The website is designed to be responsive and accessible, providing a great user experience across all devices. It features sections for featured projects, all projects, skills, and contact information.',
        tags: ['React', 'TypeScript', 'HTML | CSS'],
        image: `https://media.licdn.com/dms/image/v2/D4D03AQETN0kD6jT2bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695401890460?e=1771459200&v=beta&t=YuPZNxiAxalSvFnwaeIbE_PQlCvzd9TonluX36yG12o`,
        links: [
            { label: 'Check On GitHub', href: 'https://github.com/Andrei7506238/soft-dev-portofolio' },
        ],
        date: 'Jan 2026'
    },
    {
        name: 'Fish Aquarium OpenGL Demo',
        description: 'A simple OpenGL demo simulating a fish aquarium with animated fish and underwater effects. Built using C++ and OpenGL, it demonstrates basic graphics programming techniques. Showcases 3D rendering, texture mapping, and simple fish animation, together with billboard bubbles and skybox. It also allows for custom 3D model loading in the aquarium scene.',
        tags: ['C++', 'OpenGL', 'University'],
        image: `${assetBase}images/showcase/fish-aquarium-opengl-demo.png`,
        links: [
            { label: 'Check On GitHub', href: 'https://github.com/AndreiRobertP/fish-tank-opengl' },
        ],
        date: 'Jan 2023'
    },
    {
        name: 'SubInc - Automatic Subtitle Downloader and Softcoder',
        description: 'A Python-based headless script that automates adding subtitles to locally downloaded movies and TV shows, with support for recursive batch processing. Uses MKVToolNix and the OpenSubtitles API to automatically fetch and embed the best matching subtitles for each media file. Provides easy to use installer and context menu integration for Windows.',
        tags: ['Python', 'MKVToolNix', 'API'],
        image: `${assetBase}images/showcase/subtitles_incorporated.png`,
        links: [
            { label: 'Check On GitHub', href: 'https://github.com/Andrei7506238/SubInc' },
        ],
        date: 'Sept 2022'
    },
    {
        name: 'School Management System',
        description: 'A desktop platform built with C# and WPF. Utilizing Clean Architecture and MVVM, the project ensures a strict separation of concerns between its core business logic and the UI. The data layer is orchestrated via Entity Framework Core using the Repository pattern, showcasing a modular, testable, and highly maintainable approach to the .NET ecosystem.',
        tags: ['C# | WPF', 'Clean Architecture', 'University'],
        image: `${assetBase}images/showcase/school-management.png`,
        links: [
            { label: 'Check On GitHub', href: 'https://github.com/AndreiRobertP/SchoolManagement/tree/master' },
        ],
        date: 'May 2023'
    },
    {
        name: 'Task Nest',
        description: 'A C# and WPF productivity tool focused on managing TODO list workflows through recursive data structures and visitor & composite design patterns. Unlike flat to-do lists, Task Nest implements a hierarchical tree architecture, allowing for infinite task nesting and granular sub-task tracking.',
        tags: ['C# | .WPF', 'Design Patterns', 'University'],
        image: `${assetBase}images/showcase/task-nest.png`,
        links: [
            { label: 'Check On GitHub', href: 'https://github.com/AndreiRobertP/TaskNest' },
        ],
        date: 'Apr 2023'

    }
]
