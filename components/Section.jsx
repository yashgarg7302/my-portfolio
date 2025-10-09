import { motion } from "framer-motion";


export default function Section({ id, className = "", children }) {
return (
<section id={id} className={"py-20 px-6 " + className}>
<motion.div
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, ease: "easeOut" }}
className="mx-auto max-w-6xl"
>
{children}
</motion.div>
</section>
);
}