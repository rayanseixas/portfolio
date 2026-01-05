interface MobileMenuProps {
  isOpen: boolean;
}

export default function NavigationMobile({ isOpen }: MobileMenuProps) {

    if (!isOpen) return null;

    return(
        <div className="h-40 border-b border-border p-inner-md flex items-center lg:hidden">Navigation Mobile</div>
    );
}