export type Todo = {
    title: string
    description?: string
    status: 'todo' | 'in-progress' | 'done'
    eta?: string
}

export const todos: Todo[] = [
    {
        title: 'Publish a short blog post on this portfolio and add case studies',
        description: 'Improve content and add detailed case studies about projects and make the portfolio show more about my work and personality.',
        status: 'in-progress',
        eta: 'Feb 2026',
    },
    {
        title: 'Finish my Master\'s thesis and publish the project',
        description: 'Complete the research and development of my Master\'s thesis project and make the app publicly available. The project consists of a Flutter multi-platform application designed for learning.',
        status: 'todo',
        eta: 'Jun 2026',
    },
    {
        title: 'Finish the Step-by-step Kangaroo educational game and release it',
        description: 'Complete development and release of the educational game designed to teach programming concepts to children.',
        status: 'todo',
        eta: 'Aug 2026',
    },
    {
        title: 'Have another app published to app stores',
        description: 'Research, develop, and publish another mobile application to major app stores. Also experiment with marketing strategies to increase visibility.',
        status: 'todo',
        eta: 'Dec 2026',
    },
    {
        title: 'Learn more, create and experiment with a technology or framework',
        description: 'May it be React Native, Kotlin or Swift, I want to expand my skill set by learning a new technology and creating a project with it.',
        status: 'todo',
        eta: 'Everytime',
    },
]
