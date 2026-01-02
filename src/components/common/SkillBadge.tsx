import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(94, 179, 186, 0.3)"
      }}
      style={{
        backgroundColor: "#272a31",
        borderColor: "rgba(94, 179, 186, 0.5)",
        color: "#f2f5f7"
      }}
      className="px-4 py-2 text-sm font-medium rounded-full border cursor-default transition-all hover:border-[#5eb3ba] hover:bg-[#5eb3ba]/10"
    >
      {skill}
    </motion.li>
  );
};

export default SkillBadge;
