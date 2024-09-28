import { FaGithub, FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiCsharp, SiFramer, SiTailwindcss, SiMongodb, SiNextdotjs, SiGit, SiHeadlessui, SiHtml5, SiCss3 } from 'react-icons/si';

const config = {
    name: "Adanalı",
    description: "A talented and ambitious self-taught web developer with expertise in JavaScript. I have a strong passion for building dynamic and engaging web applications that deliver exceptional user experiences.",
    discord: {
        userId: "1061647578271318026"
    },
    github: {
        username: "VENOM12"
    },
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/VENOM12',
            icon: FaGithub,
            description: 'You can follow me on Github.'
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/1061647578271318026',
            icon: FaDiscord,
            description: 'You can contact me on Discord.'
        },
        {
            name: 'Youtube',
            url: 'https://youtube.com/@ens-be',
            icon: FaYoutube,
            description: 'You can follow me on Youtube.'
        },
    ],
    skills: [
        {
            name: 'JavaScript',
            icon: SiJavascript,
        },
        {
            name: 'React',
            icon: SiReact,
        },
        {
            name: 'Node.js',
            icon: SiNodedotjs,
        },
        {
            name: 'Next',
            icon: SiNextdotjs,
        },
        {
            name: 'C#',
            icon: SiCsharp,
        },
        {
            name: 'Framer Motion',
            icon: SiFramer,
        },
        {
            name: 'TailwindCSS',
            icon: SiTailwindcss,
        },
        {
            name: 'MongoDB',
            icon: SiMongodb,
        },
        {
            name: 'Headless UI',
            icon: SiHeadlessui,
        },
        {
            name: 'HTML',
            icon: SiHtml5,
        },
        {
            name: 'CSS',
            icon: SiCss3,
        },
    ]
}

export default config;