"use client"
import { ReactNode } from "react"
import Button from "@/app/components/ui/button"
import Link from "next/link"
import React from "react";
import ServerConfig from "../components/serverConfig";
import { deleteCookie, setCookie } from "cookies-next";

export default function Settings(){
    const settingMenu = {
        Look: 1,
        Server: 2,
        Info: 3,
        About: 4
    };

    const [chosenMenu, setChosenMenu] = React.useState(settingMenu.Look);
    let settingsMenu = (<div></div>)

    switch(chosenMenu){
        case settingMenu.Look:
            settingsMenu = (<div>Looks</div>)
            break;
        case settingMenu.Server:
            settingsMenu = (<ServerConfig />)
            break;
        case settingMenu.Info:
            settingsMenu = (<div>Info</div>)
            break;
        case settingMenu.About:
            settingsMenu = (<div>About</div>)
            break;
        default:
            settingsMenu = (<div>Chose settings tab on the right</div>)
    }

    function SettingsItem(props: {children: ReactNode, menuItem: number}){
        return (
            <div className="border dark:border-white border-black p-5 m-3 cursor-pointer hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black duration-300" onClick={() => {setChosenMenu(props.menuItem)}}>
                {props.children}
            </div>
        )
    }

    function logOff(){
        deleteCookie("username");
        deleteCookie("password");
        deleteCookie("server");
        deleteCookie("port");
        window.location.href = "/";
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/5 border dark:border-white border-black p-5 overflow-auto">
                <SettingsItem menuItem={settingMenu.Look}>Look</SettingsItem>
                <SettingsItem menuItem={settingMenu.Server}>Server</SettingsItem>
                <SettingsItem menuItem={settingMenu.Info}>Info</SettingsItem>
                <SettingsItem menuItem={settingMenu.About}>About authors</SettingsItem>
                <div onClick={() => logOff()}>
                    <SettingsItem menuItem={0}>Log off</SettingsItem>
                </div>
                <Link href={"/chat"}><Button>Back</Button></Link>
            </div>
            <div className="w-4/5 border dark:border-white border-black p-5 flex flex-col h-full">
                {settingsMenu}
            </div>
        </div>
    )
}