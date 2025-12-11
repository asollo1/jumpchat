"use client"
import { useRouter } from "next/navigation";
import ChatBox from "@/app/components/ui/chatbox";
import Contacts from "@/app/components/ui/contacts";
import SettingsBar from "@/app/components/ui/SettingsBar";
import StatusBar from "@/app/components/ui/statusbar";
import { getCookie } from "cookies-next";

async function Update() {
    const { push } = useRouter();
    var username = getCookie('username');
    var password = getCookie('password');
    var server = getCookie('server');
    var serverPort = getCookie('port');
    if(username == "" || password == "" || server == "" || serverPort == ""){
        push('/config');
    }
    fetch(`${server}:${serverPort}/get_message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: username, password: password}),
    }).then(response => {
        return response.json();
    })
    setInterval(Update, 100);
}

export default function Chat() {
    if(getCookie('username') == undefined || getCookie('password') == undefined || getCookie('server') == undefined || getCookie('port') == undefined){
        useRouter().push('/config');
    }
    return (
        <div className="flex h-screen">
            <div className="w-1/5 border dark:border-white border-black p-5 overflow-auto">
                <Contacts />
                <SettingsBar />
            </div>
            <div className="w-4/5 border dark:border-white border-black p-5 flex flex-col h-full">
                <StatusBar />
                <ChatBox />
            </div>
        </div>
    )
}