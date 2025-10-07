import Button from "@/app/components/ui/button";
import Field from "@/app/components/ui/field"
import Container from "@/app/components/ui/container";

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

export default function ServerConfif(){
    return (
        <Container>
            <h1 className="text-4xl font-bold">
                In order to start...
            </h1>
            <h2 className="text-2xl">
                Fill in the nececary data:
                <div className="flex flex-row">
                    <div>
                        <Field id="server" type="text" label="Server adress" placeholder="http://jumpchat.com"></Field>
                        <Field id="serverPort" type="number" label="Server port" min={1} max={65535}></Field>
                        <div onClick={() => {TestConnection()}}>
                            <Button>Test server</Button>
                        </div>
                    </div>
                    <div>
                        <Field id="username" type="text" label="Username" placeholder="j0hnyy"></Field>
                        <Field id="password" type="password" label="Password" placeholder="********"></Field>
                        <Button>Save config</Button>
                    </div>
                </div>
            </h2>
        </Container>
    )
}