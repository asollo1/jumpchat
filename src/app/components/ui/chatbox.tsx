"use client"
import Button from "./button";
import ChatItem from "./chatitem";
import { getCookie } from "cookies-next";

export default function ChatBox(props: {messages: {text: string, sender: string, time: string}[], chosen: string}) {
    const username = getCookie('username');
    const password = getCookie('password');
    const server = getCookie('server');
    const serverPort = getCookie('serverPort');
    async function sendMessages() {
        let message = (document.getElementById("message") as HTMLInputElement);
        if(message.value == ""){
            return;
        }
        fetch(`${server}:${serverPort}/api/send_message`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({sender: username, password: password, message: message.value, recipient: props.chosen}),
        }).then(response => {
            if(response.status == 200){
                message.value = "";
            }
        })
    }
    return (
        <div className="h-11/12 w-full border dark:border-white border-black flex flex-col">
            <div className="h-full w-full p-5">
                {props.messages.filter(message => message.sender == props.chosen).map((message, index) => (
                    <ChatItem key={index} user={message.sender} time={message.time} message={message.text} aligment={message.sender != username ? "left" : "right"} />
                ))}
            </div>
            <div className="min-h-fit w-full flex-row flex border dark:border-white border-black justify-end">
                <textarea id="message" rows={2} wrap="soft" className="border w-full dark:border-white border-black p-3 my-2 mx-5"/>
                <Button onClick={sendMessages}>SEND</Button>
            </div>
        </div> 
    )
}