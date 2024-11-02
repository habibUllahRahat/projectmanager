//import {} from 'react';

import { useState } from "react"
import { useTasklist } from "../context/ProjectContext"
import { AddButton } from "../svgs/DashboardSvgs"
import AddTaskModal from "./AddTaskModal"
import TaskList from "./TaskList"

export default function DashBoard() {
	const [isOpen, setIsOpen] = useState(false)
	const [taskToUpdate, setTaskToUpdate] = useState(null)
	const tasks = useTasklist()
	const handleEdit = (task) => {
		setTaskToUpdate(task)
		setIsOpen(true)
	}
	return (
		<>
			{isOpen && (
				<AddTaskModal
					taskToEdit={taskToUpdate}
					onClose={() => {
						setIsOpen(false)
						setTaskToUpdate(null)
					}}
				/>
			)}
			<div className='mx-auto max-w-7xl p-6 '>
				<div className='mb-6 flex items-center justify-between'>
					<h2 className='text-2xl font-bold'>
						Projectify
					</h2>
					<div className='flex space-x-2'>
						<button
							className='flex items-center rounded-md bg-gray-700 px-4 py-2 text-white'
							onClick={() => setIsOpen(true)}
						>
							<AddButton />
							Add
						</button>
					</div>
				</div>

				<div className='-mx-2 mb-6 flex flex-wrap'>
					<TaskList
						type={"todo"}
						onEdit={handleEdit}
						tasks={tasks.filter(
							(t) => t.type === "todo"
						)}
					/>
					<TaskList
						type={"onprogress"}
						onEdit={handleEdit}
						tasks={tasks.filter(
							(t) => t.type === "onprogress"
						)}
					/>
					<TaskList
						type={"done"}
						onEdit={handleEdit}
						tasks={tasks.filter(
							(t) => t.type === "done"
						)}
					/>
					<TaskList
						type={"revise"}
						onEdit={handleEdit}
						tasks={tasks.filter(
							(t) => t.type === "revise"
						)}
					/>
				</div>
			</div>
		</>
	)
}
