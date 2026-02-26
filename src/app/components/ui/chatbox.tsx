import Button from "./button";
import ChatItem from "./chatitem";
import { getCookie } from "cookies-next";

export default function ChatBox(props: {messages: {text: string, sender: string, time: string}[], chosen: string}) {
    const username = getCookie('username');
    return (
        <div className="h-11/12 w-full border dark:border-white border-black flex flex-col">
            <div className="h-full w-full p-5">
                {props.messages.filter(message => message.sender == props.chosen).map((message, index) => (
                    <ChatItem key={index} user={message.sender} time={message.time} message={message.text} aligment={message.sender != username ? "left" : "right"} />
                ))}
            </div>
            <div className="min-h-fit w-full flex-row flex border dark:border-white border-black justify-end">
                <textarea name="text" rows={2} wrap="soft" className="border w-full dark:border-white border-black p-3 my-2 mx-5"/>
                <Button>SEND</Button>
            </div>
        </div> 
    )
}