import Button from "./components/ui/button";

export default function Main(){
	return (
		<div className="w-full h-screen flex justify-center align-center dark:text-white">
			<div className="border dark:border-white border-black p-5 m-auto">
				<h1 className="text-4xl font-bold">
					Welcom to JumpCHAT
				</h1>
				<h2 className="text-2xl">
					New level of chat privacy
				</h2>
				<Button>
					Start chatting
				</Button>
			</div>
		</div>
	)
}