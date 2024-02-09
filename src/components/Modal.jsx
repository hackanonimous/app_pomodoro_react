import Button from "./Button"
import {useState} from "react"
const Modal=({actionTime,setActionTime,setModal})=>{
	const timePomodoro=actionTime.find(el=>el.name==="Pomodoro").time.split(":").shift()
	const timeSort=actionTime.find(el=>el.name==="Short Break").time.split(":").shift()
	const timeLong=actionTime.find(el=>el.name==="Long Break").time.split(":").shift()

	const handleClick=(event,action)=>{
		setActionTime(actionTime.map(el=>{
			if(el.name === action){
				return {...el,time:event.time}
			}else{
				return el
			}
		})
		)
	}

	const [time,setTime]=useState("")
	const handleChange=({target})=>{
		const time=target.value
		setTime(`${time}:00`)
	}
	return(
		<aside className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
			<div className="bg-teal-200 p-5 rounded flex flex-col justify-center items-center gap-5">
				<header><h2>Setting time of pomodoro</h2></header>
				<section>
					<article>
						<h3>Setting Pomodoro</h3>
						<div className="flex flex-col">
							<label htmlFor="" className="mr-3 font-semibold">
								Setting Minutes
							</label>
							<div className="flex flex-row gap-5">
								<input type="text" className="w-32 px-4 border-2 border-gray-200 rounded-lg" value={timePomodoro} disabled/>
								<input type="number" className="w-32 px-4 border-2 border-gray-200 rounded-lg" onChange={handleChange}/>
								<button className="bg-teal-800 hover:bg-teal-900 active:border-0 px-4 py-2 rounded text-teal-100 text-sm lg:text-lg"onClick={()=>handleClick({time},"Pomodoro")}>set</button>
							</div>
						</div>
					</article>
					<article>
						<h3>Setting Short Break</h3>
						<div className="flex flex-col">
							<label htmlFor="" className="mr-3 font-semibold">
								Setting Minutes
							</label>
							<div className="flex flex-row gap-5">
								<input type="text" className="w-32 px-4 border-2 border-gray-200 rounded-lg" value={timeSort} disabled/>
								<input type="number" className="w-32 px-4 border-2 border-gray-200 rounded-lg" onChange={handleChange}/>
								<button className="bg-teal-800 hover:bg-teal-900 active:border-0 px-4 py-2 rounded text-teal-100 text-sm lg:text-lg" onClick={()=>handleClick({time},"Short Break")}>set</button>
							</div>
							
						</div>
					</article>
					<article>
						<h3>Setting Long Break</h3>
						<div className="flex flex-col">
							<label htmlFor="" className="mr-3 font-semibold">
								Setting Minutes
							</label>
							<div className="flex flex-row gap-5">
								<input type="text" className="w-32 px-4 border-2 border-gray-200 rounded-lg" value={timeLong} disabled/>
								<input type="number" className="w-32 px-4 border-2 border-gray-200 rounded-lg" onChange={handleChange}/>
								<button className="bg-teal-800 hover:bg-teal-900 active:border-0 px-4 py-2 rounded text-teal-100 text-sm lg:text-lg" onClick={()=>handleClick({time},"Long Break")}>set</button>
							</div>
						</div>
					</article>
				</section>
				<Button setModal={setModal} name="Ok"/>
			</div>
		</aside>
	)
}
export default Modal