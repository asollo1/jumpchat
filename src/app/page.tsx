import Link from "next/link";
import Button from "./components/ui/button";
import Container from "./components/ui/container";

export default function Main(){
	return (
		<Container>
			<h1 className="text-4xl font-bold">
				Welcom to JumpCHAT
			</h1>
			<h2 className="text-2xl">
				New level of chat privacy
			</h2>
			<Link href={"/chat"}>
				<Button>
					Start chatting
				</Button>
			</Link>
		</Container>
	)
}