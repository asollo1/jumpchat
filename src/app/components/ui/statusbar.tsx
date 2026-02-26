export default function StatusBar(props: {chosen: string}) {
    return (
        <div className="h-1/12 w-full border dark:border-white border-black flex flex-row justify-start">
            <img alt="User icon" width={40} height={40} src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" className="rounded-full h-16 w-16 my-auto ml-5" />
            <div className="font-bold text-2xl my-auto ml-5">{props.chosen}</div>
        </div>
    )
}