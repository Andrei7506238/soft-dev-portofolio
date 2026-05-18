import type { FeaturedProject } from '../types/portfolio'
import { assetBase } from './base'

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Plugin Restaurant Ordering System',
    description: `
My CS Bachelor's thesis project, built with ASP.NET Core and Flutter. The backend uses Clean Architecture with a runtime plugin system: new business logic ships as a DLL loaded at startup, so the core server never needs to change.

The Flutter client caches menus and images locally to keep server requests light. The most interesting piece is SQL temporal tables: every menu version is preserved, so an order placed against an older menu always resolves to the right prices and items. A statistics dashboard covers the manager-facing side.
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
A Flutter app based on an older C++ project. It models the Romanian dictionary as a directed multigraph: nodes are two-letter prefixes and suffixes, edges are the words connecting them. Graph traversal finds dead-end nodes (out-degree zero) so the app can show which words leave an opponent stuck.

The main challenge was loading the full word graph efficiently at startup and keeping lookups fast enough to run as the user types. The app is live on the Google Play Store.
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
A Flutter rebuild of the classic Cangurul Executant, a Romanian educational app written decades ago that is still referenced in schools and textbooks.

The app lets students step through simple programs one instruction at a time, with an animated kangaroo showing what each command does. The idea is to make execution visible before students have to deal with real code syntax.

The original is still used in classrooms and I hope the new version makes it easier to pick up, while keeping the core educational idea intact.
            `,
    tags: ['Flutter', 'Dart', 'Formal Language and Interpreters', 'Educational Game'],
    image: `${assetBase}images/showcase/cangurul-pas-cu-pas.png`,
    links: [{ label: 'Open Demo', href: 'https://cangurulpascupas.vercel.app/' }],
  },
]
