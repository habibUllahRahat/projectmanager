/* eslint-disable react/prop-types */
import { useState } from "react"
import { toast } from "react-toastify"
import { useTasklistDispatch } from "../context/ProjectContext"

export default function AddTaskModal({
	taskToEdit = null,
	onClose,
}) {
	const [task, setTask] = useState(
		taskToEdit || {
			id: crypto.randomUUID(),
			title: "",
			description: "",
			dueDate: "",
			type: "todo",
		}
	)
	const dispatch = useTasklistDispatch()
	const handleChange = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		for (const [key, value] of Object.entries(task)) {
			if (value === "") {
				let warnMsg = (
					<p>
						Please fill{" "}
						<span className='font-bold capitalize'>
							{key}
						</span>{" "}
						the fields
					</p>
				)
				toast.warn(warnMsg, {
					position: "bottom-left",
				})
				return
			}
		}

		dispatch({
			type: taskToEdit ? "EDIT_TASK" : "ADD_TASK",
			task: task,
		})
		setTask({
			id: crypto.randomUUID(),
			title: "",
			description: "",
			dueDate: "",
			type: "todo",
		})
		onClose()
	}
	return (
		<div className='flex min-h-screen w-screen items-center justify-center bg-gray-900/70 p-4 text-white backdrop-blur-sm absolute top-0 left-0 z-10'>
			<div className='w-full max-w-md rounded-lg bg-gray-800 shadow-xl shadow-gray-700/30 '>
				<div className='p-6'>
					<h2 className='mb-6 text-2xl font-bold text-green-400'>
						{taskToEdit
							? "Edit Task"
							: "Create Task"}
					</h2>
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className='mb-4'>
							<label
								htmlFor='taskName'
								className='mb-1 block text-sm font-medium text-gray-300'
							>
								Task Name
							</label>
							<input
								type='text'
								id='taskName'
								name='title'
								value={task.title}
								onChange={handleChange}
								className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='description'
								className='mb-1 block text-sm font-medium text-gray-300'
							>
								Description
							</label>
							<textarea
								id='description'
								name='description'
								value={task.description}
								rows='3'
								onChange={handleChange}
								className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
							></textarea>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='dueDate'
								className='mb-1 block text-sm font-medium text-gray-300'
							>
								Due Date
							</label>
							<input
								type='date'
								name='dueDate'
								onChange={handleChange}
								value={task.dueDate}
								className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
							/>
						</div>

						<div className='mb-4'>
							<label
								htmlFor='category'
								className='mb-1 block text-sm font-medium text-gray-300'
							>
								Category
							</label>
							<select
								id='category'
								name='type'
								className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
								value={task.type}
								onChange={handleChange}
							>
								<option value='todo'>
									To-Do
								</option>
								<option value='onprogress'>
									On Progress
								</option>
								<option value='done'>
									Done
								</option>
								<option value='revise'>
									Revise
								</option>
							</select>
						</div>

						<div className='flex justify-end space-x-3'>
							<button
								type='button'
								className='rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
								onClick={() => {
									onClose()
									setTask({
										id: crypto.randomUUID(),
										title: "",
										description: "",
										dueDate: "",
										type: "todo",
									})
								}}
							>
								Cancel
							</button>
							{taskToEdit ? (
								<button
									type='submit'
									className='rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
								>
									Update Task
								</button>
							) : (
								<button
									type='submit'
									className='rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
								>
									Create Task
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
