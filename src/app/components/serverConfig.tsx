"use client"
import Button from "@/app/components/ui/button";
import Field from "@/app/components/ui/field"
import Container from "@/app/components/ui/container";
import { getCookie, setCookie } from "cookies-next";

// Function that sends request to server and checks if it's alive
async function TestConnection(){
	let server = (document.getElementById("server") as HTMLInputElement);
	let serverPort = (document.getElementById("serverPort") as HTMLInputElement);
    let success = document.getElementById("success");
    let elements = [server, serverPort];
    let missingField = false;
    let succesFullRequest = false;
    elements.forEach((el) => {
        el.classList.replace("border-red-500", "border-white");
    });
    elements.forEach((el) => {
        if(el!.value == ""){
        el!.focus();
        el!.classList.replace("border-white", "border-red-500");
        missingField = true;
    }});
    if(missingField){
        return;
    }
    success!.innerHTML = "Testing...";
    success!.classList = "text-white-500"
	await fetch(`${server!.value}:${serverPort!.value}/api/status`, {
		method: 'POST',
        headers: { 
			'Content-Type': 'application/json',
		}
	}).then(response => {
		if(response.status != 200){
            success!.innerHTML = "Jumpchat server is NOT running here!"
            success!.classList = "text-red-500"
		} else {
            success!.innerHTML = "Jumpchat server is running here!"
            success!.classList = "text-green-500"
            succesFullRequest = true;
        }
	}).catch((error) => {
        success!.innerHTML = "Jumpchat server is NOT running here!"
        success!.classList = "text-red-500"
    });
    return succesFullRequest;
}

// Save configuration function
async function SaveConfig(){
    let server = (document.getElementById("server") as HTMLInputElement);
    let serverPort = (document.getElementById("serverPort") as HTMLInputElement);
    let username = (document.getElementById("username") as HTMLInputElement);
    let password = (document.getElementById("password") as HTMLInputElement);
    let logoutTime = (document.getElementById("logoutTime") as HTMLInputElement);
    let elements = [server, serverPort, username, password];
    let missingField = false;
    let maxAge = parseInt(logoutTime.value) * 24 * 60 * 60;
    elements.forEach((el) => {
        el.classList.replace("border-red-500", "border-white");
    });
    elements.forEach((el) => {
        if(el!.value == ""){
        el!.focus();
        el!.classList.replace("border-white", "border-red-500");
        missingField = true;
    }});
    if(missingField){
        return;
    }
    let ifConnection = await TestConnection();
    if(ifConnection == false){
        return;
    }
    // Save to cookies
    setCookie("server", server.value, {maxAge: maxAge, sameSite: "strict"});
    setCookie("serverPort", serverPort.value, {maxAge: maxAge, sameSite: "strict"});
    setCookie("username", username.value, {maxAge: maxAge, sameSite: "strict"});
    setCookie("password", password.value, {maxAge: maxAge, sameSite: "strict"});
    setCookie("logoutTime", logoutTime.value, {maxAge: maxAge, sameSite: "strict"});
    // Redirect to messaging page
    window.location.href = "/chat";
}

// Server configuration page
export default function ServerConfig(){
    let server = getCookie('server');
    let serverPort = getCookie('serverPort');
    let username = getCookie('username');
    let password = getCookie('password');
    let logoutTime = getCookie('logoutTime');
    return (
        <Container>
            <h2 className="text-2xl">
                Fill in the nececary data:
                <div className="flex flex-row">
                    <div>
                        <Field value={server} id="server" type="text" label="Server adress" placeholder="http://jumpchat.com"></Field>
                        <Field value={serverPort} id="serverPort" type="number" label="Server port" min={1} max={65535}></Field>
                        <div onClick={() => {TestConnection()}}>
                            <Button>Test server</Button>
                        </div>
                        <div id="success"></div>
                    </div>
                    <div>
                        <Field value={username} id="username" type="text" label="Username" placeholder="j0hnyy"></Field>
                        <Field value={password} id="password" type="password" label="Password" placeholder="********"></Field>
                        <Field value={logoutTime} id="logoutTime" type="number" label="Logout time (days)" min={1}></Field>
                        <div onClick={() => SaveConfig()}>
                            <Button>Save config</Button>
                        </div>
                    </div>
                </div>
            </h2>
        </Container>
    )
}