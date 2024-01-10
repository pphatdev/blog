export default function Border({className}) {

    return (
        <div className={`absolute inset-0 rounded-full translate-y-1 flex h-5 items-end overflow-hidden ${className ?? ''}`}>
            <div className="flex -mb-px h-[1px] w-full">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[99%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
        </div>
    )
}
