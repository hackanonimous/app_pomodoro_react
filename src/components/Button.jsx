const Button=({name,time,setActionTime,actionTime,id,setModal})=>{
	const handleClick=()=>{
		if (name==="Start"){
			console.log(name)
		} 
		else if (name==="Setting"){
			setModal({
				state:true
			})
		}
		else if (name=="Ok"){
			setModal({
				state:false
			})
		} 	
		else {
			setActionTime(actionTime.map(el=>{
				if (el.id === id){
					return {...el,active:true}
				}else if (el.id !== id){
					return {...el,active:false}
				}else{
					return el
				}
			}))	
		}
	}
	return(
		<>
			<button className="bg-teal-800 hover:bg-teal-900 active:border-0 px-4 py-2 rounded text-teal-100 text-sm lg:text-lg" onClick={handleClick}>{name}</button>
		</>
		
	)
}
export default Button