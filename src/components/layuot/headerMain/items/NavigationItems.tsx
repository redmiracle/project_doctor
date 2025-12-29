import Link from "next/link";

export default function NavigationItems() {

    return (
        <div className={"w-fit mx-auto  text-2xl lg:w-full lg:mx-0 lg:text-lg text-center pt-20  lg:flex lg:py-3 lg:px-7 lg:justify-between"}>
            <div className={"mb-5 lg:mb-0 flex flex-col lg:flex-row"}>
                <Link href="/" className={"mb-1 me-3 lg:mb-0"}>Home</Link>
                <Link href="/about" className={"mb-1 me-3 lg:mb-0"}>About</Link>
                <Link href="/contact" className={"mb-1"}>Contact</Link>
            </div>
            <div className={"flex flex-col lg:flex-row"}>
                <Link href="/signIn" className={"mb-1 me-2 lg:mb-0"}>Sign In</Link>
                <Link href="/logIn" className={"lg:ms-2"}>Log In</Link>

            </div>

        </div>
    )
}