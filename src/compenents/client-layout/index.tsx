"use client"

import { useState } from "react";
import Header from "../header";
import NavigationMobile from "../navigation-mobile";


export default function ClientLayout(){
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {  
    setIsMenuOpen(prev => !prev);
  };

    return (
        <>
          <Header onToggleMenu={toggleMenu} />
          <NavigationMobile isOpen={isMenuOpen} />
        </>
    );
}