import { Menu } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/cafe-modido" className="block">Café molido</Link>
                <Link href="/categories/cafe-grano" className="block">Café en grano</Link>
                <Link href="/categories/cafe-capsula" className="block">Café en cápsula</Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;