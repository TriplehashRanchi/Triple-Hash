// data/projects.js
export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A modern, scalable e-commerce solution built with Next.js and Stripe integration for seamless payments. This project focused on creating a robust shopping experience with user authentication, product management, secure payment gateways, and order tracking. Technologies used include Next.js, Tailwind CSS, Stripe API, and PostgreSQL for the database.",
        image: "/work1.png",
        category: "WEB DEVELOPMENT",
        clientName: "Sarah Johnson",
        profession: "E-COMMERCE ENTREPRENEUR",
        // Add more details for the full page
        technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
        challenge: "Integrating a complex payment workflow with a highly responsive UI.",
        solution: "Utilized Stripe Elements and webhooks for real-time payment status updates, combined with server-side rendering for optimal performance.",
        link: "https://example.com/ecommerce-platform" // Optional project link
    },
    {
        id: 2,
        title: "AI Analytics Dashboard",
        description: "Real-time analytics platform powered by machine learning algorithms for data-driven insights. This dashboard provides dynamic visualizations and predictive analytics, helping businesses make informed decisions quickly. It processes large datasets efficiently and presents them in an understandable format.",
        image: "/work2.webp",
        category: "AI/ML PLATFORM",
        clientName: "Michael Chen",
        profession: "DATA SCIENTIST",
        technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS SageMaker"],
        challenge: "Processing and visualizing petabytes of data in real-time.",
        solution: "Implemented a distributed data processing pipeline using Apache Flink and integrated D3.js for high-performance data rendering.",
        link: "https://example.com/ai-dashboard"
    },
    {
        id: 3,
        title: "Mobile Banking App",
        description:
            "Secure and intuitive mobile banking application with biometric authentication and real-time transactions. The app prioritizes user experience with a clean interface and robust security features, including facial recognition and fingerprint login, along with instant transaction notifications.",
        image: "/work3.webp",
        category: "FINTECH SOLUTION",
        clientName: "David Rodriguez",
        profession: "FINANCIAL ADVISOR",
        technologies: ["React Native", "Node.js", "MongoDB", "OAuth2", "Biometric APIs"],
        challenge: "Ensuring top-tier security for financial transactions while maintaining ease of use.",
        solution: "Employed multi-factor authentication, end-to-end encryption, and regular security audits, alongside intuitive UI design for seamless navigation.",
        link: "https://example.com/mobile-banking"
    },
    {
        id: 4,
        title: "Healthcare Management System",
        description:
            "Comprehensive healthcare platform connecting patients, doctors, and administrators in one unified system. This system streamlines appointments, medical records, billing, and communication, improving efficiency and patient care quality.",
        image: "/work4.webp",
        category: "HEALTHCARE TECH",
        clientName: "Dr. Emily Watson",
        profession: "HEALTHCARE DIRECTOR",
        technologies: ["Angular", "Spring Boot", "MySQL", "HL7 Integration"],
        challenge: "Achieving HIPAA compliance and integrating with existing legacy systems.",
        solution: "Developed a modular architecture with secure data handling protocols and custom adaptors for various EHR systems.",
        link: "https://example.com/healthcare-system"
    },
    {
        id: 5,
        title: "Blockchain Wallet",
        description: "Secure cryptocurrency wallet with multi-chain support and advanced security features. This non-custodial wallet allows users to securely store, send, and receive various cryptocurrencies, featuring seed phrase protection and hardware wallet integration.",
        image: "/work5.webp",
        category: "BLOCKCHAIN SOLUTION",
        clientName: "Alex Thompson",
        profession: "CRYPTO INVESTOR",
        technologies: ["Web3.js", "Solidity", "React", "Node.js", "Cryptography"],
        challenge: "Implementing robust security against common blockchain vulnerabilities.",
        solution: "Utilized multi-signature transactions, cold storage integration, and a rigorous smart contract auditing process.",
        link: "https://example.com/blockchain-wallet"
    },
    {
        id: 6,
        title: "Smart Home IoT Platform",
        description: "Integrated IoT platform for smart home automation with voice control and energy monitoring. This platform connects various smart devices, allowing users to control lighting, climate, security, and appliances through a single app or voice commands, with a focus on energy efficiency.",
        image: "/work6.webp",
        category: "IOT PLATFORM",
        clientName: "Lisa Park",
        profession: "SMART HOME CONSULTANT",
        technologies: ["Node-RED", "MQTT", "React Native", "Raspberry Pi", "AWS IoT"],
        challenge: "Ensuring seamless interoperability between diverse IoT devices from different manufacturers.",
        solution: "Designed a flexible API gateway and implemented an adaptive communication protocol to handle various device standards.",
        link: "https://example.com/smart-home-iot"
    },
];