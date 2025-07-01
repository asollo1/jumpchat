import ChatBox from "../components/ui/chatbox";
import Contacts from "../components/ui/contacts";
import SettingsBar from "../components/ui/SettingsBar";
import StatusBar from "../components/ui/statusbar";

export default function Chat() {
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