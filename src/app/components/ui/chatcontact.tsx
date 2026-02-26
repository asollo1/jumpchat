export default function ChatContact(props: {lastmessage: string, img: string, name: string, onClick: () => void}) {
    return (
        <div className="p-3 border dark:border-white border-black h-20 flex flex-row w-full hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black cursor-pointer" onClick={props.onClick}>
            <div>
                <img alt="User icon" width={80} height={80} src={props.img} className="rounded-full h-16 w-16"/>
            </div>
            <div className="m-auto ml-5 flex justify-center flex-col">
                <b>{props.name}</b>
                <p className="min-w-fit overflow-hidden">{props.lastmessage}</p>
            </div>
        </div>
    ) 
}