
import NavigationMob from "@/components/layuot/headerMain/items/NavigationMob";
import NavigationDesc from "@/components/layuot/headerMain/items/NavigationDesc";

export default function HeaderMain() {
    return (
        <div className="bg-white shadow border-b-1 border-gray-200">
            <div className="lg:hidden">
                <NavigationMob/>
            </div>
            <div className="hidden lg:block">
                <NavigationDesc/>
            </div>
        </div>
    )

}