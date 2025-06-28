import { ReactNode } from "react";
export default function Button(props: {children: ReactNode}){
    return (
        <button className="p-3 m-3 border dark:border-white border-black hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black duration-200">
            {props.children}
        </button>
    )
}