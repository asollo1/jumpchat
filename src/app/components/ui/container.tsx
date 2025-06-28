import { ReactNode } from "react";

export default function Container(props: {children: ReactNode}){
    return (
        <div className="w-full h-screen flex justify-center align-center dark:text-white">
            <div className="border dark:border-white border-black p-5 m-auto">
                {props.children}
            </div>
        </div>
    )
}