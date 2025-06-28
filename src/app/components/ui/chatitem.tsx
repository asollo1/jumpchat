export default function ChatItem(props: {user: string, time: string, message: string, aligment: string}){
    let textPosition = ""
    let windowPosition = ""
    switch(props.aligment){
        case "left":
            textPosition = "text-left"
            windowPosition = "justify-start"
            break;
        case "right":
            textPosition = "text-right"
            windowPosition = "justify-end"
            break;
        default:
            textPosition = "text-left"
            windowPosition = "justify-start"
            break;
    }
    return (
        <div className={"w-full flex my-3 " + windowPosition}>
            <div className="border dark:border-white border-black h-fit w-2/3 p-3">
                <div className={"font-bold "+textPosition}>{props.user}</div>
                <div className={"font-bold text-gray-700 dark:text-gray-400 "+textPosition}>{props.time}</div>
                <div>{props.message}</div>
            </div>
        </div>
    )
}