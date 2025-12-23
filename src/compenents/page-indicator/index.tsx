'use client'
import { usePathname } from "next/navigation";

export default function PageIndicator() {
    const pathname = usePathname();
    
    const segments = pathname.split('/').filter(Boolean);
    const pageName = 
        segments.length === 0 
        ? 'Home' 
        : segments[segments.length -1].charAt(0).toUpperCase() + segments[segments.length -1].slice(1);

    return (
        <div className="px-4 md:px-inner-md py-10 border-b border-border">
            {/* <div className="flex items-center gap-1 text-sm text-text-body mb-2">
                <p>{pageName}</p>
                <p>/</p>
            </div> */}
            <h1 className="text-text-headline text-3xl">{pageName}</h1>
        </div>
    );
}