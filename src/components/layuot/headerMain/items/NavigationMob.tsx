'use client'
import NavigationItems from "@/components/layuot/headerMain/items/NavigationItems";
import {useEffect, useState} from "react";
import {burgerIcon, closeIcon} from "@/lib/icons/icons";
import {AnimatePresence, motion} from "framer-motion";


export default function NavigationMob() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    useEffect(() => {
        const origFetch = window.fetch;
        window.fetch = async (...args) => {
            setIsMenuOpen(false);
            const response = await origFetch(...args);
            return response;
        };

        return () => {
            window.fetch = origFetch;
        };
    }, []);


    // useEffect(() => {
    //
    //     setIsMenuOpen(false);
    //
    // }, [pathname]);

    const handleClick = () => {

        setIsMenuOpen((prevState) => !prevState);
    }

    return (
        <div>
            <div onClick={handleClick}
                 className={"p-2"}
            >
                {isMenuOpen! ? closeIcon("size-8") : burgerIcon("size-8")}
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{x: "-100%", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        // exit={isFastClose!?{x: "-100%", opacity: 0}:""}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="absolute z-20 h-screen w-full bg-teal-600 text-white"
                    >

                            <NavigationItems/>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}