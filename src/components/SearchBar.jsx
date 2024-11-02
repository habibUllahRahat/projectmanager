//import {} from 'react';
import { useState } from "react"
import {
	useTasklist,
	useTasklistDispatch,
} from "../context/ProjectContext"

export default function SearchBar() {
	const [tempTasks, setTempTasks] = useState(null)
	const dispatch = useTasklistDispatch()
	const tasks = useTasklist()
	const onSearch = (text) => {
		if (text.length > 0) {
			if (tempTasks === null) {
				setTempTasks(tasks)
			}
			dispatch({
				type: "SEARCH_TASK",
				text,
			})
		} else {
			dispatch({
				type: "RESET_TASKS",
				tasks: tempTasks,
			})
			setTempTasks(null)
		}
	}
	return (
		<div className='mx-4 flex-1'>
			<input
				type='text'
				placeholder='Search here'
				className='w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none'
				onChange={(e) => onSearch(e.target.value)}
			/>
		</div>
	)
}
