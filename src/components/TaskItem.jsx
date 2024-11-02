/* eslint-disable react/prop-types */
import { toast } from "react-toastify"
import { useTasklistDispatch } from "../context/ProjectContext"
import { DeleteBin, EditPencil } from "../svgs/TaskitemSvgs"
import { getFullDateFormatted } from "../utils/getDate"

export default function TaskItem({
	titleColor,
	onEdit,
	task,
}) {
	const dispatch = useTasklistDispatch()
	const deleteMsg = (
		<p>
			Task deleted: <b>{task.title}</b>
		</p>
	)
	return (
		<div className='mb-4 rounded-lg bg-gray-800 p-4'>
			<div className='flex justify-between'>
				<h4
					className={`mb-2 flex-1 font-semibold ${titleColor}`}
				>
					{task.title}
				</h4>

				<div className='flex gap-2'>
					<a
						onClick={() => {
							dispatch({
								type: "DELETE_TASK",
								id: task.id,
							})
							toast.error(deleteMsg, {
								position: "bottom-right",
							})
						}}
					>
						<DeleteBin />
					</a>
					<a onClick={() => onEdit(task)}>
						<EditPencil />
					</a>
				</div>
			</div>
			<p className='mb-2 text-sm text-zinc-200'>
				{task.description}
			</p>

			<p className='mt-6 text-xs text-zinc-400'>
				{getFullDateFormatted(task.dueDate)}
			</p>
		</div>
	)
}
