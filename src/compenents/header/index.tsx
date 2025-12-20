import Button from "../button";
import NavigationItem from "../navigation-item";
import IconButton from "../icon-button";
import { FileTextIcon } from "../icons/file-text";
import { MenuIcon } from "../icons/menu";
import { SparklesIcon } from "../icons/sparkles";


export default function Header() {
    return(
        <div className="flex border-b border-border h-12 items-center px-4 md:px-8">
            <div className="text-text-headline flex-1">saynex</div>
            <ul className="gap-3 text-text-headline hidden lg:flex flex-1 justify-center items-center">
               <NavigationItem href="/" active>Home</NavigationItem>
               <NavigationItem href="3" ><SparklesIcon size={16}/>Nano</NavigationItem>
               <NavigationItem href="3">Sobre</NavigationItem>
               <NavigationItem href="/contato">Contato</NavigationItem>
            </ul>
            <div className="flex flex-1 justify-end">
                <Button><FileTextIcon className="text-text-headline" size={20}/>Curriculo</Button>
                <IconButton><MenuIcon className="text-text-headline" size={20}/></IconButton></div>
        </div>
    )
}