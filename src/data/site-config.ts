export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Dayana Erazo',
    subtitle: 'Abogada',
    description: 'Especialista en Derecho Administrativo - Universidad de Nariño',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Experiencia laboral',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Sobre mi',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: '¿ Quién soy ?',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Gmail',
            href: 'mailto:dayaerazo.17@gmail.com?subject=Reunion%20con%20abogada%20Dayana%20motivo%20de:&body=Requiero%20los%20servicios%20profesionales%20de%20Dayana%20para%20:'
        },
        {
            text: 'WhatsApp',
            href: 'https://wa.me/573188545404?text=Hola%20Dayana,%20me%20gustaría%20consultar%20sobre%20tus%20servicios%20profesionales.'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dayana-erazo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
    ],
    hero: {
        title: 'El derecho es el escudo de la sociedad, y una buena abogada, la espada que defiende la justicia.',
        text: "Con una sólida formación en leyes y experiencia en la aplicación de normas administrativas, me especializo en integrar tecnología en el ámbito jurídico. Mi pasión por el <b><i>análisis normativo</b></i> me impulsa a abordar cada caso con precisión y creatividad. He asesorado en <b><i> procesos administrativos</b></i>, liderado <b><i>contrataciones</b></i>, y fortalecido relaciones con <b><i>entidades gubernamentales</b></i>, buscando siempre soluciones legales que aporten valor estratégico.",
        image: {
            src: '/hero.jpeg',
            alt: 'Fotografia Dayana'
        },
        actions: [
            {
                text: 'Contáctame',
                href: '/contact'
            }
        ]
    },
    
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
