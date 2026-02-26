"use client"
import { useRouter } from "next/navigation";
import ChatBox from "@/app/components/ui/chatbox";
import Contacts from "@/app/components/ui/contacts";
import SettingsBar from "@/app/components/ui/SettingsBar";
import StatusBar from "@/app/components/ui/statusbar";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { time } from "console";

export default function Chat() {
    //States
    const [messages, setMessages] = useState([{text: "Welcome to JumpChat!", sender: "System", time: "12:20 12.10.2025"}, {text: "This is a placeholder message, to show how messages will look like. It will be replaced with real messages once you connect to the server.", sender: "Tester", time: "12:21 12.10.2025"}]);
    const [contacts, setContacts] = useState([{name: "System", img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"}, {name: "Tester", img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"}]);
    const [chosen, setChosen] = useState("System");

    if(getCookie('username') == undefined || getCookie('password') == undefined || getCookie('server') == undefined || getCookie('serverPort') == undefined){
        useRouter().push('/config');
    }

    async function getMessages() {
        var username = getCookie('username');
        var password = getCookie('password');
        var server = getCookie('server');
        var serverPort = getCookie('serverPort');
        fetch(`${server}:${serverPort}/get_message`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: username, password: password}),
        }).then(response => {
            return response.json();
        }).then(data => {
            if(messages != data){
                setMessages(data);
            }
        })
        setInterval(getMessages, 100);
    }

    async function getContacts() {
        var username = getCookie('username');
        var password = getCookie('password');
        var server = getCookie('server');
        var serverPort = getCookie('serverPort');

        fetch(`${server}:${serverPort}/get_users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: username, password: password}),
        }).then(response => {
            return response.json();
        }).then(data => {
            if(contacts != data){
                setContacts(data);
            }
        })
        setInterval(getContacts, 10000);
    }
    // useEffect(() => {
    //     getMessages();
    //     getContacts();
    // }, []);
    return (
        <div className="flex h-screen">
            <div className="w-1/5 border dark:border-white border-black p-5 overflow-auto">
                <Contacts contacts={contacts} setChosen={setChosen} />
                <SettingsBar />
            </div>
            <div className="w-4/5 border dark:border-white border-black p-5 flex flex-col h-full">
                <StatusBar chosen={chosen} />
                <ChatBox messages={messages} chosen={chosen} />
            </div>
        </div>
    )
}