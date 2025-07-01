import Button from "./button";
import ChatItem from "./chatitem";

export default function ChatBox(){
    return (
        <div className="h-11/12 w-full border dark:border-white border-black flex flex-col">
            <div className="h-full w-full p-5">
                <ChatItem user="John Doe" time="12:20 12.10.2025" message="test" aligment="left"/>
                <ChatItem user="Martha Smith" time="12:22 12.10.2025" message="test" aligment="right"/>
            </div>
            <div className="min-h-fit w-full flex-row flex border dark:border-white border-black justify-end">
                <textarea name="text" rows={2} wrap="soft" className="border w-full dark:border-white border-black p-3 my-2 mx-5"/>
                <Button>SEND</Button>
            </div>
        </div> 
    )
}