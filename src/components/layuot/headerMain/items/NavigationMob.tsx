'use client'
import NavigationItems from "@/components/layuot/headerMain/items/NavigationItems";
import {useState} from "react";
import {burgerIcon, closeIcon} from "@/lib/icons/icons";
import {AnimatePresence, motion} from "framer-motion";

export default function NavigationMob() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={"p-2"}
            >
                {isMenuOpen! ? closeIcon("size-8") : burgerIcon("size-8")}
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{x: "-100%", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: "-100%", opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="absolute z-20 h-screen w-full bg-white"
                    >
                        <NavigationItems/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}