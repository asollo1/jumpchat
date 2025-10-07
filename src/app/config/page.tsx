"use client"
import ServerConfig from "@/app/components/serverConfig"

// Function that sends request to server and checks if it's alive
function TestConnection(){
	let server = (document.getElementById("server") as HTMLInputElement).value;
	let serverPort = (document.getElementById("serverPort") as HTMLInputElement).value;
	fetch(`${server}:${serverPort}/api/status`, {
		method: 'POST',
        headers: { 
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	}).then(response => {
		if(response.status){
			return false
		}
		return response.json();
	}).then(response => {
		console.log(response)
	})
}

export default function Main(){
	return (
		<ServerConfig/>
	)
}