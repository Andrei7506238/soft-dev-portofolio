import type { FeaturedProject } from '../types/portfolio'
import { assetBase } from './base'

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Plugin Restaurant Ordering System',
    description: `
This CS Bachelor’s thesis project features a dynamic restaurant management solution built on ASP.NET Core and Flutter. The backend follows Clean Architecture principles, utilizing a modular, plugin-based system that allows for runtime extensions and unmatched scalability. This architecture enables restaurant owners to integrate custom business logic seamlessly without altering the core infrastructure, ensuring the system evolves alongside their needs.

On the client side, the Flutter application provides a responsive, cross-platform experience optimized with client-side caching for menus and images to minimize server overhead. A key technical highlight is the use of SQL temporal tables, which allows the system to manage historical menu versions and process concurrent orders from different timeframes without data duplication. This is paired with an intuitive statistics dashboard to help managers drive operational efficiency through data-driven insights.
            `,
    tags: ['ASP.NET Core', 'Flutter', 'Clean Architecture'],
    image: `${assetBase}images/showcase/plugin-restaurant-ordering-system.png`,
    links: [
      { label: 'See Case Study', href: '#/restaurant-ordering-system' },
      { label: 'See Demo', href: 'https://www.youtube.com/watch?v=WKDwvteNCFw' },
    ],
  },
  {
    name: 'Fazan Game Cheat',
    description: `
This Flutter application modernizes an older C++ project by reimagining the Romanian dictionary as a directed multigraph. In this model, nodes represent two-letter prefixes and suffixes, while edges represent the words connecting them. By implementing the game logic through graph traversal, the app identifies "dead-end" nodes (vertexes with an out-degree of zero) allowing users to strategically select words that leave opponents with no valid moves.

Beyond the algorithmic core, the project focuses on high-performance string processing and efficient memory management within the mobile environment. The transition from a C++ backend to a cross-platform Flutter UI ensures that complex graph lookups happen in real-time, providing a seamless experience for users. Currently available on the Google Play Store, the app demonstrates the practical application of discrete mathematics in solving competitive linguistic challenges.
        `,
    tags: ['Flutter', 'Dart', 'C++'],
    image: `${assetBase}images/showcase/fazan-cheat.png`,
    links: [
      { label: 'Check on Google Play', href: 'https://play.google.com/store/apps/details?id=com.andrei7506238.fazan_cheat' },
      { label: 'See C++ Project', href: 'https://github.com/Andrei7506238/Fazan' },
    ],
  },
  {
    name: 'Step-by-Step Kangaroo | Interactive Educational Game',
    description: `
This project breathes new life into a legacy educational application. By modernizing the classic Cangurul Executant, I developed an immersive Flutter-based environment where the next generation of coders can master algorithmic thinking.

Through an interactive kangaroo character, students bridge the gap between abstract logic and visual execution. This is not just a game, it is a cross-platform educational tool designed to make complex computational concepts feel like second nature.

The original application was bult decades ago and is still used in schools and textbooks, and I hope that the new version will make it more accessible and engaging for students, while preserving the core educational value of the original.
            `,
    tags: ['Flutter', 'Dart', 'Formal Language and Interpreters', 'Educational Game'],
    image: `${assetBase}images/showcase/cangurul-pas-cu-pas.png`,
    links: [{ label: 'Open Demo', href: 'https://cangurulpascupas.vercel.app/' }],
  },
]
