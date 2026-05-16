import { assetBase } from './base'

export const person = {
  name: 'Andrei-Robert Popa',
  role: 'Mobile Software Developer',
  speciality: 'Flutter, Dart & C++',
  company: 'Magic Lane',
  companyUrl: 'https://magiclane.com/',
  headline: `
I am a Mobile Developer focused on building high-performance, well-structured cross-platform applications. My work at Magic Lane spans the entire development lifecycle, where I play a central role in maintaining a major consumer-facing application alongside the continuous development of our core SDK.

My expertise centers on software architecture, Dart FFI, and native C++ bindings, creating stable, scalable foundations that seamlessly bridge complex, low-level logic with modern mobile experiences.

I enjoy breaking down complex systems into modular, testable components, treating clean architecture as the absolute key to long-term maintainability. While my primary strength lies in backend mobile logic and SDK integration, I approach UI development with a strict sense of structure, clarity, and fluid user experience.
  `,
  photoSrc: `${assetBase}images/showcase/profile.jpeg`,
  photoAlt: 'My profile photo',
  links: {
    linkedin: 'https://www.linkedin.com/in/andrei-robert-popa',
  },
} as const
