import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Variants } from "framer-motion";

interface TechStack {
    icon: React.ReactNode;
    color: string;
    bg: string;
    name: string;
}

interface InfiniteTechScrollProps {
    techStacks: TechStack[];
    isStackOpen: boolean;
}

const InfiniteTechScroll = ({ techStacks, isStackOpen }: InfiniteTechScrollProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0,
            rotate: -180,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 260,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            rotate: 180,
            transition: {
                duration: 0.3
            }
        }
    };


    if (isStackOpen) {
        return (
            <motion.div
                className="flex items-center justify-center h-full py-8 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.ul
                    className="flex flex-wrap items-center justify-center gap-4 max-w-lg"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {techStacks.map((tech, index) => (
                        <motion.li
                            key={`${tech.name}-${index}`}
                            variants={itemVariants}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            whileHover={{
                                scale: 1.15,
                                rotate: [0, -5, 5, -5, 0],
                                transition: {
                                    rotate: {
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    },
                                    scale: {
                                        duration: 0.2
                                    }
                                }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="shrink-0 relative"
                        >
                            <div >
                                <motion.div
                                    className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer relative z-10"
                                    style={{ backgroundColor: `${tech.color}40` }}
                                    animate={{
                                        boxShadow: hoveredIndex === index
                                            ? `0 0 20px ${tech.color}80, 0 0 40px ${tech.color}40`
                                            : `0 0 0px ${tech.color}00`
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.span
                                        className="text-2xl"
                                        style={{ color: tech.color }}
                                        animate={{
                                            scale: hoveredIndex === index ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {tech.icon}
                                    </motion.span>
                                </motion.div>

                                {/* Ripple effect on hover */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                border: `2px solid ${tech.color}`,
                                                backgroundColor: 'transparent'
                                            }}
                                            initial={{ scale: 1, opacity: 0.8 }}
                                            animate={{ scale: 1.8, opacity: 0 }}
                                            exit={{ scale: 1, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-50 
                                            ${index > 6 ? "-bottom-10 " : "-top-10 "}`}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div
                                                className="px-3 py-1 rounded-lg text-sm font-bold"
                                                style={{
                                                    backgroundColor: `${tech.color}20`,
                                                    color: tech.color,
                                                    textShadow: `0 0 8px ${tech.color}`,
                                                    border: `1px solid ${tech.color}40`
                                                }}
                                            >
                                                {tech.name}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        );
    }

    return (
        <div className="h-full overflow-hidden relative">
            <motion.div
                className="marquee h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {[0, 1].map((i) => (
                    <ul key={i} className="flex items-center gap-4 px-2 shrink-0">
                        {techStacks.map((tech, index) => {
                            const uniqueKey = `${i}-${index}`;
                            return (
                                <motion.li
                                    key={uniqueKey}
                                    className="shrink-0"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, 0],
                                        transition: {
                                            duration: 0.4,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div className="relative group">
                                        <motion.div
                                            className="rounded-full p-3 text-xl cursor-pointer relative z-10"
                                            style={{ backgroundColor: `${tech.color}50` }}
                                            whileHover={{
                                                backgroundColor: `${tech.color}70`,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                style={{ color: tech.color }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    filter: `drop-shadow(0 0 8px ${tech.color})`
                                                }}
                                            >
                                                {tech.icon}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ul>
                ))}
            </motion.div>

            {/* Left fade gradient with animation */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#272A31] to-transparent pointer-events-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            />

            {/* Right fade gradient with animation */}
            <motion.div
                className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#272A31] to-transparent pointer-events-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            />
        </div>
    );
};


export default InfiniteTechScroll