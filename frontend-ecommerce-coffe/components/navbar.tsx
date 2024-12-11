"use client"
import { Heart, LucideShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import ItemsMenuMobile from "./itemsMenuMobile";
import MenuList from "./menuList";
import ToggleTheme from "./toggleTheme";

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>
                El Rincón del Café
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <LucideShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")}/>
                <Heart strokeWidth="1"  className="cursor-pointer"  onClick={() => router.push("/favourites")}/>
                <User strokeWidth="1" className="cursor-pointer"/>
                <ToggleTheme/>
            </div>
        </div>
    );
};

export default Navbar;
