import { Attributes } from "react";

export default function Field(props: {id: string, type: string, label: string, placeholder?: string, min?: number, max?:number, value?: string | number | undefined}) {
    return (
        <div className="m-3 p-5 border border-solid border-white">
            <label htmlFor={props.id}>{props.label}</label><br></br>
            <input defaultValue={props.value} className="p-2 border border-solid border-white" type={props.type} id={props.id} placeholder={props.placeholder} min={props.min} max={props.max}></input><br></br>
        </div>
    )
}