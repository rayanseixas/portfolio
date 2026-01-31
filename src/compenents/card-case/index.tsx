
export default function CardCase() {
    return (
        <div className=" min-w-[280px] lg:max-w-[446.5px] flex-1 hover:cursor-pointer text-teal-50">
             <div className="bg-surface-subtle-active h-56 rounded-sm hover:border hover:border-border"></div>
                 <div className="flex flex-col gap-2 py-4  ">
                    <div className="flex items-center gap-5">
                        <h2 className="text-text-headline font-primary text-lg">Project</h2>
                        <div className="flex gap-2">
                            <div className="h-8 flex items-center justify-center px-4 rounded-full bg-surface-subtle-active font-medium text-sm text-text-body">Lorem</div>
                            <div className="h-8 flex items-center justify-center px-4 rounded-full bg-surface-subtle-active font-medium text-sm text-text-body">Lorem</div>
                        </div>
                    </div>
                    <p className="text-text-body font-primary text-sm">
                        Lorem ipsum dolor sit amet consectetur. Felis phasellus magnis aliquam id sit nunc pretium viverra elementum.
                    </p>
                </div>
        </div>
    );
}