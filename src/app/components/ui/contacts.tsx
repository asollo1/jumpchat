import { getCookie } from "cookies-next";
import ChatContact from "./chatcontact";
import { useRouter } from "next/navigation";

export default function Contacts(props: {contacts: {name: string, img: string}[], setChosen: (name: string) => void}) {
    return (
        <div className="h-11/12">
            {props.contacts.map((contact, index) => (
                <ChatContact key={index} lastmessage="Lorem ipsum dolor sit." name={contact.name} img={contact.img} onClick={() => props.setChosen(contact.name)} />
            ))}
        </div>
    )
}