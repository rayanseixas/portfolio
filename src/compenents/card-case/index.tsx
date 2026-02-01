
export default function CardCase() {
    return (
        <div className=" min-w-[280px] lg:max-w-[327px] flex-1 hover:cursor-pointer text-teal-50">
            <div className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-text-headline font-primary font-medium text-md">01. 02. 26</h2>
                    <p className="text-text-body font-primary text-sm">
                        Lorem ipsum dolor sit amet consectetur. lorem ipsum
                    </p>
                </div>
                 <div className="bg-surface-subtle-active h-56 rounded-xs hover:border hover:border-border"/>
            </div>
        </div>
    );
}