/* eslint-disable react/prop-types */
import { useState } from "react"
import { FilterIcon } from "../svgs/TasklistSvgs"
import TaskItem from "./TaskItem"

const taskList = {
	todo: {
		title: "To-Do",
		typeColor: " bg-indigo-600 ",
		titleColor: "text-indigo-500",
	},
	onprogress: {
		title: "On Progress",
		typeColor: " bg-yellow-500 ",
		titleColor: "text-yellow-500",
	},
	done: {
		title: "Done",
		typeColor: " bg-teal-500 ",
		titleColor: "text-teal-500",
	},
	revise: {
		title: "Revise",
		typeColor: " bg-rose-500 ",
		titleColor: "text-rose-500",
	},
}

export default function TaskList({ type, onEdit, tasks }) {
	const [sortMode, setSortMode] = useState(false)
	let displayTasks = tasks
	const onSort = () => {
		if (sortMode) {
			displayTasks = tasks.sort(
				(a, b) =>
					Date.parse(b.dueDate) -
					Date.parse(a.dueDate)
			)
		} else {
			displayTasks = tasks.sort(
				(a, b) =>
					Date.parse(a.dueDate) -
					Date.parse(b.dueDate)
			)
		}
	}

	return (
		<div className='mb-4 w-full px-2 sm:w-1/2 md:w-1/4'>
			<div
				className={`rounded-lg p-4 ${taskList[type].typeColor}`}
			>
				<div className='mb-2 flex items-center justify-between'>
					<h3 className='text-lg font-semibold'>
						{taskList[type].title} (
						{displayTasks.length})
					</h3>
					<a
						onClick={() => {
							setSortMode(!sortMode)
							onSort()
						}}
					>
						<FilterIcon />
					</a>
				</div>
				<div>
					{displayTasks.length
						? displayTasks.map((task) => (
								<TaskItem
									key={task.id}
									titleColor={
										taskList[type]
											.titleColor
									}
									onEdit={onEdit}
									task={task}
								/>
						  ))
						: "NO TASKS FOUND"}
				</div>
			</div>
		</div>
	)
}
