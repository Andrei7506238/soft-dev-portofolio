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
        hoverDescription: 'Scripting and tooling with Python. I also used it at university for various AI/ML projects.',
    },
    {
        name: 'Bash',
        level: 'basic',
        logoUrl: `https://upload.wikimedia.org/wikipedia/commons/3/3a/Bash_Logo_Colored.svg`,
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

export const projects: Project[] = [
    {
        name: 'FitTrack Mobile',
        description:
            'A cross-platform fitness tracker with offline-first sync, weekly insights, and smart coaching.',
        tags: ['React Native', 'TypeScript', 'Firebase'],
        image: `${assetBase}images/project-1.jpg`,
        links: [
            { label: 'Case Study', href: '#' },
            { label: 'GitHub', href: '#' },
        ],
        featured: true,
    },
    {
        name: 'CityTransit',
        description:
            'Public transport companion with real-time arrivals, saved routes, and accessibility modes.',
        tags: ['Kotlin', 'Android', 'Maps'],
        image: `${assetBase}images/project-2.jpg`,
        links: [{ label: 'Case Study', href: '#' }],
        featured: true,
    },
    {
        name: 'PocketFinance',
        description: 'Personal finance app with budgeting, subscriptions, and smart alerts.',
        tags: ['Swift', 'iOS', 'SwiftUI'],
        image: `${assetBase}images/project-3.jpg`,
        links: [{ label: 'Case Study', href: '#' }],
        featured: true,
    },
    {
        name: 'RecipeVault',
        description: 'Recipe manager with meal planning and grocery lists.',
        tags: ['React Native', 'SQLite'],
        image: `${assetBase}images/project-4.jpg`,
        links: [{ label: 'GitHub', href: '#' }],
    },
    {
        name: 'HabitLoop',
        description: 'Minimal habit tracker with streaks and calendar view.',
        tags: ['SwiftUI'],
        image: `${assetBase}images/project-5.jpg`,
        links: [{ label: 'GitHub', href: '#' }],
    },
    {
        name: 'TripLens',
        description: 'Trip organizer with shared itineraries and offline maps.',
        tags: ['Kotlin', 'Compose'],
        image: `${assetBase}images/project-6.jpg`,
        links: [{ label: 'GitHub', href: '#' }],
    },
]
