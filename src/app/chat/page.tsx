import Button from "../components/ui/button";
import ChatContact from "../components/ui/chatcontact";
import ChatItem from "../components/ui/chatitem";

export default function Chat() {
    return (
        <div className="flex h-screen">
            <div className="w-1/5 border dark:border-white border-black p-5 overflow-auto">
                <ChatContact lastmessage="Lorem ipsum dolor sit." name="John Doe" img="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" />
            </div>
            <div className="w-4/5 border dark:border-white border-black p-5 flex flex-col h-full">
                <div className="h-1/12 w-full border dark:border-white border-black flex flex-row justify-start">
                    <img alt="User icon" width={40} height={40} src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" className="rounded-full h-16 w-16 my-auto ml-5"/>
                    <div className="font-bold text-2xl my-auto ml-5">John Doe</div>
                </div>
                <div className="h-11/12 w-full border dark:border-white border-black flex flex-col">
                    <div className="h-full w-full p-5">
                        <ChatItem user="John Doe" time="12:20 12.10.2025" message="test" aligment="left"/>
                        <ChatItem user="Martha Smith" time="12:22 12.10.2025" message="test" aligment="right"/>
                    </div>
                    <div className="min-h-fit w-full flex-row flex border dark:border-white border-black justify-end">
                        <input type="text" className="border w-full dark:border-white border-black p-3 my-2 mx-5"/>
                        <Button>SEND</Button>
                    </div>
                </div> 
            </div>
        </div>
    )
}