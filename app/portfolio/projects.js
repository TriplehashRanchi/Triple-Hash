// data/projects.js
export const projects = [
  {
    id: 1,
    title: "Codingwise",
    description:
      "Codingwise is an e-learning platform that enables students to log in, enroll in courses, and begin learning with ease. It offers a streamlined course management system that lets students monitor their progress and revisit lessons at any time. Built with scalability and accessibility in mind, the platform supports mentors in delivering structured education efficiently.",
    image: "/work/work1.webp",
    category: "EdTech Platform, Course Management System, LMS Platform",
    clientName: "Sagar Chouksey",
    profession: "EdTech Mentor",
    technologies: [
      "Next.js",
      "Node.js",
      "MySQL",
      "Firebase",
      "Bootstrap",
      "PHP",
    ],
    challenge:
      "Managing course workflows and scaling the platform to support a growing number of students while ensuring smooth navigation, responsive design, and minimal server load. Ensuring data consistency and progress tracking for hundreds of concurrent users posed a significant technical challenge.",
    solution:
      "Implemented a modular course structure, optimized backend logic with efficient queries, caching mechanisms, and server-side rendering. Scalable database schemas and robust authentication ensured smooth student experiences and reliable course progress tracking.",
    impact:
      "Improved learning experience, simplified course delivery for mentors, enhanced student engagement, minimized server load issues, and increased student retention due to a smooth and reliable platform.",
    link: "https://codingwise.in/",
  },

  {
    id: 2,
    title: "Digital Gyani Saarthi",
    description:
      "A CRM designed for financial advisors who are not highly technical, helping them grow their business by leveraging digital technologies. The CRM seamlessly integrates meta leads, providing a unified dashboard with follow-ups automation, email/WhatsApp nurturing, marketing banner sharing, and financial health calculators. Everything an advisor needs is in one place—from capturing leads to converting them into customers.",
    image: "/work/work2.webp",
    category: "Web Development, SaaS Platform, Mobile App, CRM Solution",
    clientName: "Digital Gyani",
    profession: "Financial Services Coach",
    technologies: [
      "Next.js",
      "Node.js",
      "MySQL",
      "Capacitor",
      "Firebase Login",
    ],
    challenge:
      "Designing a CRM that is simple and intuitive for non-technical financial advisors while integrating multiple tools like Meta leads, WhatsApp automation, email campaigns, marketing materials, and reminders. Ensuring real-time updates and avoiding complexity was a major challenge.",
    solution:
      "Implemented integrated workflows for lead management, follow-ups, marketing, and automation. Developed an intuitive dashboard UI, set up notification systems, and provided client training to ensure ease of adoption and seamless usage.",
    impact:
      "Reduced manual work, improved customer engagement, increased sales conversions, and empowered financial advisors to manage their business effectively without relying on multiple separate tools.",
    link: "https://app.digitalgyanisaarthi.com",
  },
  {
    id: 3,
    title: "Finask",
    description:
      "Finasq is a comprehensive internal management system designed for Finasq Value Company to streamline all policy-related operations. The system allows employees to log and track sold policies, manage renewals, and automate notifications and reminders. It also provides tools for internet team management and internal workflow optimization. By centralizing all these operations in one platform, Finasq ensures smoother processes, reduced errors, and better coordination across teams.",
    image: "/work/work3.webp",
    category: "Internal Management System",
    clientName: "Palash Malik",
    profession: "Founder, Finask Value",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Firebase"],
    challenge:
      "Managing large amounts of policy data, automating renewal reminders, and coordinating multiple internal teams was challenging due to the volume of data, potential for errors, and need for real-time updates.",
    solution:
      "Implemented a structured database design, automated workflows for renewals and reminders, intuitive dashboards for team management, and notification systems. Optimized backend processes to handle large datasets efficiently and reduce human errors.",
    impact:
      "Significantly improved operational efficiency, reduced manual errors, automated reminders, enhanced team coordination, and saved time and resources across departments.",
    link: "",
  },
  {
    id: 4,
    title: "Firsthash",
    description:
      "Firsthash is a SaaS platform designed to streamline the operations of wedding photography businesses. It offers features for client onboarding, project tracking, internal team management, and salary disbursement, providing a centralized system for operations. The platform automates workflows, reduces administrative overhead, and ensures timely project delivery, improving efficiency and coordination across teams.",
    image: "/work/work4.webp",
    category: "SaaS Platform",
    clientName: "Abdullah Ansari",
    profession: "Founder, Marketizers & Owner, FirstHash",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Firebase"],
    challenge:
      "Managing client onboarding, internal team workflows, salary calculations, and project tracking posed significant operational challenges. Ensuring all data remained synchronized and reducing human errors across multiple departments was complex.",
    solution:
      "Implemented optimized backend architecture, structured database design, automated workflows, notifications, and an intuitive UI. Added salary management modules and project tracking dashboards to reduce administrative burden and improve efficiency.",
    impact:
      "Streamlined operations, reduced errors, automated payroll, improved team coordination, accelerated project delivery, and increased client satisfaction with accurate and timely services.",
    link: "https://connect.firsthash.in/",
  },
  {
    id: 5,
    title: "Kalam IAS",
    description:
      "Kalam IAS Academy combines traditional teaching methods with modern technology to deliver an effective learning experience. The platform offers comprehensive GS Foundation courses, mentorship programs, online & offline classes, test series, and well-researched study materials. It is designed to manage large numbers of students while providing personalized attention and progress tracking.",
    image: "/work/work5.webp",
    category: "EdTech Platform",
    clientName: "Kalam IAS Academy",
    profession: "UPSC Coaching Provider",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    challenge:
      "Managing a large number of students, scheduling classes, and providing personalized attention while maintaining performance and scalability. Handling online/offline integration and student progress tracking was complex.",
    solution:
      "Implemented a robust backend system to handle student data, track progress, and facilitate communication between students and mentors. Integrated scalable class scheduling and test series modules for smooth operations.",
    impact:
      "Enhanced student engagement, improved learning outcomes, increased enrollment, ensured a high success rate in UPSC exams, and consistently received positive feedback from students.",
    link: "https://kalamias.academy/",
  },
  {
    id: 6,
    title: "Prepex",
    description:
      "Prepex is an AI-powered career platform designed to assist job seekers in optimizing their applications. The platform provides tools for resume and LinkedIn profile analysis, intelligent job filtering, and personalized cover-letter generation. By integrating the Gemini API via Google GenKit and developing a Chrome extension with a Python backend, Prepex offers a seamless user experience. Premium features are supported with integrated payments, enabling early adoption and delivering real value to users seeking career growth.",
    image: "/work/work6.webp",
    category: "AI‑Powered Career SaaS",
    clientName: "Deepak Goyal",
    profession: "Founder, Azurelib",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Firebase"],
    challenge:
      "Integrating AI APIs, handling personalized recommendations, parsing resumes accurately, and developing a Chrome extension that communicates effectively with the backend posed significant technical challenges.",
    solution:
      "Implemented structured API integration, optimized backend architecture for AI processing, automated workflows for cover letter generation, and performance optimizations. Ensured smooth data flow between Chrome extension and backend services.",
    impact:
      "Enabled users to improve resumes, streamline job applications, access personalized cover letters, and facilitated early adoption with dozens of users leveraging premium features for career growth.",
    link: "https://prepx.co/",
  },
  {
    id: 7,
    title: "Mlinda",

    description:
      "Mlinda is a cutting-edge platform that leverages AI to provide personalized learning experiences for students. By analyzing individual learning styles and preferences, Mlinda curates tailored content and resources, ensuring optimal engagement and knowledge retention. The platform integrates interactive quizzes, real-time feedback, and progress tracking to help students stay motivated and on track with their learning goals. With a user-friendly interface and seamless navigation, Mlinda makes learning enjoyable and effective for students of all ages.",
    image: "/work/work7.webp",
    category: "AI-Powered Learning Platform",
    clientName: "John Doe",
    profession: "Educational Technologist",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "AI Integration",
    ],
    challenge:
      "Creating a platform that effectively personalizes learning experiences based on diverse student needs while ensuring scalability and performance. Integrating AI algorithms for content curation and real-time feedback was particularly challenging.",
    solution:
      "Implemented advanced AI algorithms for personalized content delivery, optimized backend architecture for scalability, and developed interactive features such as quizzes and progress tracking. Ensured a seamless user experience with an intuitive UI design.",
    impact:
      "Enhanced student engagement and learning outcomes, increased platform adoption, and received positive feedback from users appreciating the personalized approach to education.",
    link: "https://malinda.ai/",
  },
];
