export default function CardCase() {
    return (
      <div className=" min-w-[400px] flex-1">
          <div className=" bg-surface-subtle-active h-56 hover:cursor-pointer"></div>
          <div className="flex justify-between h-10 items-center ">
              <h2 className="text-text-body font-secondary">Project</h2>
              <p className="text-text-body text-sm font-secondary">001</p>
          </div>
      </div>
    );
}