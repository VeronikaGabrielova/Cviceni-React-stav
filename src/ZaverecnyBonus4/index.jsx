import React,{useState} from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {

	const [add,setAdd] = useState(0)
	const [sub,setSub] = useState(0)


	return (
		<>

			<input onChange={(e)=>{setAdd(Number(e.target.value))}}  type="number" defaultValue="0" /> +{' '}
			<input onChange={(e)=>{setSub(Number(e.target.value))}}   type="number" defaultValue="0" /> = <output>{add+sub}</output>
		</>
	)
}
