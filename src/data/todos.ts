export type Todo = {
    title: string
    description?: string
    status: 'todo' | 'in-progress' | 'done'
    eta?: string
}

export const todos: Todo[] = [
    {
        title: 'Architect and Finish the Lua Rover Platform',
        description: 'Finalizing the research and development of an educational platform. The project builds upon a Flutter multi-platform application and the core focus is engineering a native Lua execution engine based on the original C++ implementation and a FFI bridge to Dart.',
        status: 'in-progress',
        eta: 'Jun 2026',
    },
    {
        title: 'Deploy Interactive Educational Tool',
        description: 'Completing the development and production release of the Step-by-step Kangaroo educational game. The application is designed to teach programming concepts to children by translating algorithmic thinking into visual execution.',
        status: 'todo',
        eta: 'Aug 2026',
    },
    {
        title: 'End-to-End Application Delivery',
        description: 'Researching, developing, and publishing a new mobile application to major app stores. This initiative focuses on managing the entire product lifecycle, from initial system architecture to experimenting with marketing strategies to increase market visibility.',
        status: 'todo',
        eta: 'Dec 2026',
    },
    {
        title: 'Continuous Architectural Exploration',
        description: 'Expanding my technical stack by going in-depth with native and cross-platform ecosystems, such as React Native, Kotlin, or Swift. The goal is to engineer proof-of-concept projects  to continuously evaluate new frameworks for performance, scalability, and long-term maintainability.',
        status: 'todo',
        eta: 'Everytime',
    },
]
