import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "October 2023 - April 2024",
        points: [
            "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
            "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
            "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - may 2024",
        points: [
           "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
            "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
            "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "feb 2024 - Jan 2025",
        points: [
           "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
            "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
            "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "July 2024 - Present",
        points: [
            "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
            "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
            "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Rastreador de preços da Amazon',
        description: 'Desenvolvi um aplicativo da web que rastreia e notifica os usuários sobre alterações de preços de produtos na Amazon, ajudando os usuários a encontrar as melhores ofertas.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Clone de Thread Full Stack',
        description: 'Criei uma réplica completa da popular plataforma de discussão "Threads", permitindo que os usuários postem e participem de conversas encadeadas.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Aplicativo para encontrar carros',
        description: 'Projetei e construí um aplicativo móvel para encontrar e comparar carros no mercado, agilizando o processo de compra de carros.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Clone Full Stack do Instagram',
        description: 'Construímos um clone completo do Instagram, permitindo aos usuários compartilhar fotos e se conectar com amigos em um ambiente familiar de mídia social.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Aplicação imobiliária',
        description: 'Desenvolvi uma aplicação web para listagens de imóveis, facilitando a busca de imóveis e conectando compradores com vendedores.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Aplicativo de resumo de IA',
        description: 'Aplicativo que aproveita IA para gerar automaticamente resumos concisos e informativos a partir de longos conteúdos de texto ou blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];