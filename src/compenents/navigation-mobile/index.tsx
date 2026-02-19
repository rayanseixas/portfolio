interface MobileMenuProps {
  isOpen: boolean;
}

export default function NavigationMobile({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="border-border p-inner-md flex h-40 items-center border-b lg:hidden">
      Navigation Mobile
    </div>
  );
}
