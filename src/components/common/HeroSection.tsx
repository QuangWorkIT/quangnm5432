import { MapPin, Mail, Briefcase, BriefcaseBusiness, Maximize2 } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaReact, FaJava, FaNodeJs, FaDocker, FaGitAlt, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript, BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { SiMongodb, SiApachekafka } from "react-icons/si";
import { DiMsqlServer, DiRedis } from "react-icons/di";
import { useState } from 'react';
import { motion } from "framer-motion";
import portrait from '@/assets/portrait.jpg'
import InfiniteTechScroll from './ScrollArea.tsx'
import { Link } from 'react-router';

function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            className="grid grid-cols-6 md:grid-cols-12 gap-4 pt-2 px-10 gap-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <ContactBlock />
            <AvartaBlock />
            <ExperienceBlock />
            <IntroductionBlock />
            <ActionBlock />
            <WorksBlock />
        </motion.div>
    )
}

interface BlockProps {
    children?: React.ReactNode,
    classes?: string,
    delay?: number
}

const Block = ({ children, classes, delay = 0 }: BlockProps) => {
    const blockVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1] as const
            }
        }
    };

    return (
        <motion.div
            variants={blockVariants}
            className={`rounded-[20px] w-full ${classes}`}
        >
            {children}
        </motion.div>
    )
}
const ContactBlock = () => {
    const contactMethods = [
        { text: "Github", icon: <FaGithub size={16} />, path: "https://github.com/QuangWorkIT" },
        { text: "LinkedIn", icon: <FaLinkedinIn size={16} />, path: "https://www.linkedin.com/in/quangnguyen-3906b4373/" },
        { text: "Facebook", icon: <FaFacebookF size={16} />, path: "https://www.facebook.com/Quang3559/" },
        { text: "Email", icon: <Mail size={16} />, path: "mailto:nguyenminhquangnmqlamdong@gmail.com" },
    ];

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4
            }
        })
    };

    return (
        <Block classes='col-span-6 md:col-span-5 lg:col-span-4 lg:pr-3'>
            <div className="flex flex-col gap-6">
                <motion.div
                    className="group relative overflow-hidden border border-[#2c2f36] rounded bg-[#272A31] hover:translate-y-[-10px] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(94,179,186,0.5)]"
                    variants={itemVariants}
                    custom={0}
                >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#5EB3BA] rounded-tl-[20px] rounded-tr-[20px] transition-all duration-300 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#5EB3BA] rounded-tr-[20px] rounded-br-[20px] transition-all duration-300 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#5EB3BA] rounded-br-[20px] rounded-bl-[20px] transition-all duration-300 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#5EB3BA] rounded-bl-[20px] rounded-tl-[20px] transition-all duration-300 group-hover:h-full"></span>
                    <div className="flex flex-col gap-2 py-4 px-6 relative z-10">
                        <h1 className='text-lg lg:text-xl font-medium text-[#F0F2F5]'>Hey, I'm Minh Quang</h1>
                        <p className='md:text-medium text-sm text-[#738594]'>Software Developer</p>
                    </div>
                </motion.div>

                <motion.div
                    className="border border-[#2c2f36] rounded-[30px] px-6 py-2 flex gap-5 md:gap-3 items-center bg-[#272A31] transition-all duration-300 ease-in-out ring-0 ring-[#5EB3BA]/0 hover:shadow-[0_0_10px_5px_rgba(94,179,186,0.5)] hover:ring hover:ring-[#5EB3BA]/40 hover:translate-y-[-10px]"
                    variants={itemVariants}
                    custom={1}
                >
                    <div className="bg-[#283C41] w-max p-2 rounded-full shadow-md">
                        <MapPin className='text-[#5EB3BA]' size={20} />
                    </div>
                    <span className='font-medium text-sm lg:text-lg'>Ho Chi Minh city, Viet Nam</span>
                </motion.div>

                <motion.div variants={itemVariants} custom={2}>
                    <ul className='grid grid-cols-12 gap-3'>
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index + method.path}
                                href={method.path}
                                target={method.text !== "Email" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group border border-[#2c2f36] rounded-[30px] p-3 w-full col-span-6 mx-auto cursor-pointer bg-[#272A31]
                                hover:shadow-[0_0_5px_5px_rgba(94,179,186,0.5)] transition-all duration-200 ease-in-out hover:border-[#5EB3BA]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <li className="flex items-center justify-center gap-2">
                                    {method.icon}
                                    <span className="text-xs md:text-sm">{method.text}</span>
                                </li>
                            </motion.a>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Block>
    )
}

const AvartaBlock = () => {
    return (
        <Block classes="hidden xl:block xl:col-span-2 relative">
            <motion.div
                className="group absolute right-[-8px] overflow-hidden rounded-lg xl:w-60 xl:h-[100%] border-2 border-[#2c2f36]"
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.25, 0.4, 0.25, 1]
                }}
            >
                <img src={portrait} alt="img" className='
                group-hover:scale-115 transition-all duration-300 ease-in-out object-cover' />
            </motion.div>
        </Block>
    )
}

const ExperienceBlock = () => {
    const techStacks = [
        { icon: <FaReact color='#61DBFB' />, color: "#61DBFB", bg: "bg-[#61DBFB]", name: "React" },
        { icon: <BiLogoTypescript color='#3178C6' />, color: "#3178C6", bg: "bg-[#3178C6]", name: "TypeScript" },
        { icon: <IoLogoJavascript color='#F0DB4F' />, color: "#F0DB4F", bg: "bg-[#F0DB4F]", name: "JavaScript" },
        { icon: <FaJava color='#ED272C' />, color: "#ED272C", bg: "bg-[#ED272C]", name: "Java" },
        { icon: <BiLogoSpringBoot color='#6DB33F' />, color: "#6DB33F", bg: "bg-[#6DB33F]", name: "Spring Boot" },
        { icon: <FaNodeJs color='#68A063' />, color: "#68A063", bg: "bg-[#68A063]", name: "Node.js" },
        { icon: <SiMongodb color='#47A248' />, color: "#47A248", bg: "bg-[#47A248]", name: "MongoDB" },
        { icon: <BiLogoPostgresql color='#336791' />, color: "#336791", bg: "bg-[#336791]", name: "PostgreSQL" },
        { icon: <DiMsqlServer color='#CC2927' />, color: "#CC2927", bg: "bg-[#CC2927]", name: "SQL Server" },
        { icon: <DiRedis color='#DC382D' />, color: "#DC382D", bg: "bg-[#DC382D]", name: "Redis" },
        { icon: <SiApachekafka color='#CF8E7C' />, color: "#CF8E7C", bg: "bg-[#CF8E7C]", name: "Apache Kafka" },
    ]

    const [isStackOpen, setIsStackOpen] = useState(false)

    return (
        <Block classes='col-span-6 md:col-span-7 lg:col-span-6 grid lg:grid-cols-7 grid-cols-6 gap-4 w-full lg:pl-2 relative'>
            <motion.div
                className={`col-span-3 row-span-2 rounded-[20px] border border-[#2c2f36] bg-[#272A31] transition-all duration-200 ease-in-out ring-0 ring-[#5EB3BA]/0 cursor-pointer hover:ring hover:ring-[#5EB3BA]/40 
                    hover:translate-y-[-2px] hover:shadow-[0_0_20px_5px_rgba(94,179,186,0.5)] overflow-hidden ${isStackOpen ? "h-0 w-0 row-span-0" : "h-full w-full"}`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <div className="lg:col-span-4 col-span-3 flex p-4 flex-col justify-center items-center w-full h-full md:gap-2">
                    <motion.h1
                        className='md:text-4xl text-xl font-semibold'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    >
                        4<span className='md:text-3xl text-xl'>th</span>
                    </motion.h1>
                    <p className='text-xs md:text-sm text-center text-[#738594]'>University Student</p>
                </div>
            </motion.div>

            <motion.div
                className={`lg:col-span-4 col-span-4 p-4 row-span-2 rounded-[20px] p-2 border border-[#2c2f36] bg-[#272A31] transition-all duration-200 ease-in-out ring-0 ring-[#5EB3BA]/0 cursor-pointer hover:ring hover:ring-[#5EB3BA]/40 hover:translate-y-[-2px]
                hover:shadow-[0_0_20px_5px_rgba(94,179,186,0.5)] overflow-hidden ${isStackOpen ? "h-0 w-0 row-span-0" : "h-full w-full"}`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex flex-col justify-center items-center h-full md:gap-2">
                    <motion.h1
                        className='md:text-5xl text-xl font-semibold'
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
                    >
                        5+
                    </motion.h1>
                    <p className='md:text-lg text-xs text-[#5EB3BA] text-center'>Self Initiated Projects</p>
                </div>
            </motion.div>

            <motion.div
                className={`col-span-7 h-full w-full rounded-[20px] border border-[#2c2f36] bg-[#272A31] transition-all duration-300 ease-out z-20 
                    ${isStackOpen ? "absolute shadow-[0_0_20px_5px_rgba(94,179,186,0.5)]" : "relative"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <motion.div
                    className="hidden md:block absolute top-4 right-5 flex items-center gap-2 z-30 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsStackOpen(!isStackOpen)}
                >
                    <Maximize2 />
                </motion.div>

                <div className="h-full relative p-4">
                    <InfiniteTechScroll techStacks={techStacks} isStackOpen={isStackOpen} />
                </div>
            </motion.div>
        </Block>
    )
}

const IntroductionBlock = () => {
    const text = "Hello, I am a Full-Stack Software Engineer with experience building end-to-end web applications using modern front-end and back-end technologies. I am comfortable working across the entire development lifecycle, from UI implementation to server-side logic and database integration, with a strong focus on clean, maintainable, and scalable solutions.";

    return (
        <Block classes='col-span-6 md:col-span-12 lg:col-span-4 lg:pr-3'>
            <motion.div
                className="py-4 px-6 flex flex-col gap-3 border border-[#2c2f36] bg-[#272A31] ring-0 ring-[#5EB3BA]/0 hover:ring hover:ring-[#5EB3BA]/40 hover:translate-y-[-2px] rounded-[20px] transition-all duration-200 ease-in-out h-full justify-center hover:shadow-[0_0_20px_5px_rgba(94,179,186,0.5)]"
                whileHover={{ scale: 1.02 }}
            >
                <motion.h1
                    className='md:text-xl text-lg  font-medium text-[#F0F2F5]'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    What I'm about?
                </motion.h1>
                <motion.p
                    className='md:text-sm/7 text-xs/6 text-[#738594]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    {text}
                </motion.p>
            </motion.div>
        </Block>
    )
}

const ActionBlock = () => {
    return (
        <Block classes='col-span-6 lg:col-span-4 lg:pr-3'>
            <motion.div
                className="py-5 px-6 flex flex-col items-center justify-center gap-5 h-full border border-[#2c2f36] bg-[#272A31] ring-0 ring-[#5EB3BA]/0 hover:ring hover:ring-[#5EB3BA]/40 rounded-[20px] transition-all duration-200 ease-in-out hover:shadow-[0_0_20px_5px_rgba(94,179,186,0.5)]"
                whileHover={{ scale: 1.02 }}
            >
                <motion.div
                    className="bg-[#5EB3BA] p-3 rounded-full w-max"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.9,
                        type: "spring",
                        stiffness: 200
                    }}
                    whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                    }}
                >
                    <Mail color='black' />
                </motion.div>
                <motion.h1
                    className='md:text-3xl text-lg font-semibold max-w-[240px] text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                >
                    Have a project in mind??
                </motion.h1>
                <motion.button
                    className='bg-[#5EB3BA] rounded-full hover:bg-[#5EB3BA]/80 text-black px-4 py-2 w-full'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="mailto:nguyenminhquangnmqlamdong@gmail.com" className="block text-xs md:text-sm break-all text-center">
                        nguyenminhquangnmqlamdong@gmail.com
                    </a>
                </motion.button>
            </motion.div>
        </Block>
    )
}

const WorksBlock = () => {
    const toolStacks = [
        { icon: <FaDocker />, color: "#0db7ed", name: "Docker" },
        { icon: <FaGitAlt />, color: "#F05032", name: "Git" },
        { icon: <FaFigma />, color: "#A259FF", name: "Figma" },
    ];

    const workItems = [
        {
            title: "On Job Training at FPT Software",
            date: "Sep 2025 - Dec 2025",
            icon: <BriefcaseBusiness color='#738594' />,
            id: "OJT"
        },
        {
            title: "Studying at FPT University",
            date: "Sep 2023 - Present",
            icon: <Briefcase color='#738594' />,
            id: "fpt-university"
        }
    ];

    return (
        <Block classes='lg:col-span-4 col-span-6 flex flex-col gap-4'>
            {workItems.map((item, index) => (
                <Link key={index} to={`/experience/#${item.id}`}>
                    <motion.div
                        className="py-5 px-6 border border-[#2c2f36] bg-[#272A31] ring-0 ring-[#5EB3BA]/0 hover:ring hover:ring-[#5EB3BA]/40 hover:translate-y-[-2px] rounded-[20px] transition-all duration-200 ease-in-out flex gap-6 items-center hover:shadow-[0_0_10px_5px_rgba(94,179,186,0.5)]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + (index * 0.15) }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div
                            className="p-3 bg-[#23272F] rounded-full"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            {item.icon}
                        </motion.div>
                        <div className="flex flex-col gap-1">
                            <h1 className='font-semibold text-sm'>{item.title}</h1>
                            <p className='text-xs text-[#738594]'>{item.date}</p>
                        </div>
                    </motion.div>
                </Link>
            ))}

            <motion.div
                className="py-4 px-6 border border-[#2c2f36] bg-[#272A31] ring-0 ring-[#5EB3BA]/0 hover:ring hover:ring-[#5EB3BA]/40 rounded-[20px] 
                transition-all duration-200 ease-in-out hover:shadow-[0_0_10px_5px_rgba(94,179,186,0.5)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
            >
                <ul className='flex w-full justify-center gap-10'>
                    {toolStacks.map((tool, index) => (
                        <motion.li
                            key={tool.name + index}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                delay: 0.25 + (index * 0.1),
                                type: "spring",
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div
                                className="cursor-pointer rounded-full p-3 text-xl"
                                style={{ backgroundColor: `${tool.color}80` }}
                            >
                                <div style={{ color: 'white' }}>
                                    {tool.icon}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </Block>
    )
}

export default function App() {
    return (
        <HeroSection />
    );
}