
import {useState} from "react"
import Button from "./components/Button"
import Modal from "./components/Modal"
const App=()=>{
	const [actionTime,setActionTime] = useState([
		{
			id:1,
			name:"Pomodoro",
			time:"25:00",
			active:true
		},
		{
			id:2,
			name:"Short Break",
			time:"5:00",
			active:false
		},
		{
			id:3,
			name:"Long Break",
			time:"15:00",
			active:false
		},
	])
	const [modal,setModal]=useState({state:false})
	return(
		<main className="w-screen h-screen bg-teal-600 flex flex-col items-center">
			<header className="p-2 mb-10 font-bold flex justify-center items-center">
				<h2 className="text-teal-100 text-3xl lg:text-4xl">Pomodoro</h2>
			</header>
			<section className="bg-teal-700 w-[90%] flex flex-col items-center justify-center rounded-md p-5 lg:max-w-[50%]">
				<header className="flex flex-row gap-10 lg:gap-20">
					{actionTime.map((valor,index)=>(
						<Button key={index} id={valor.id} name={valor.name} time={valor.time} setActionTime={setActionTime} actionTime={actionTime}/>
						)
					)}
				</header>
				<div className="mt-10">
					<h1 className="text-teal-100 text-7xl lg:text-9xl">{actionTime.find(el=>el.active===true).time}</h1>
				</div>
				<footer className="mt-10">
					<Button name="Start" setModal={setModal} modal={modal}/>
				</footer>
			</section>
			<footer className="mt-16">
				<Button name="Setting" setModal={setModal} modal={modal}/>
			</footer>
			{modal.state ? <Modal setActionTime={setActionTime} actionTime={actionTime} setModal={setModal}/>:""}
		</main>
	)
}
export default App