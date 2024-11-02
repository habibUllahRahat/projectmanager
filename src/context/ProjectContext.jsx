/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
	createContext,
	useContext,
	useReducer,
} from "react"

const ProjectContext = createContext()
export default function ProjectContextProvider({
	children,
}) {
	const [tasks, dispatch] = useReducer(
		taskReducer,
		initialTasks
	)

	return (
		<ProjectContext.Provider
			value={{ tasks, dispatch }}
		>
			{children}
		</ProjectContext.Provider>
	)
}

const initialTasks = [
	{
		id: crypto.randomUUID(),
		title: "Write project proposal",
		description:
			"Draft a detailed proposal outlining project scope, timeline, and deliverables.",
		dueDate: "2024-11-05",
		type: "todo",
	},
	{
		id: crypto.randomUUID(),
		title: "Design wireframes",
		description:
			"Create low-fidelity wireframes for the new dashboard interface.",
		dueDate: "2024-11-07",
		type: "onprogress",
	},
	{
		id: crypto.randomUUID(),
		title: "Code review",
		description:
			"Review pull requests for bug fixes and UI enhancements in the application.",
		dueDate: "2024-11-03",
		type: "done",
	},
	{
		id: crypto.randomUUID(),
		title: "Research competitor products",
		description:
			"Conduct a market analysis of similar products to identify strengths and weaknesses.",
		dueDate: "2024-11-10",
		type: "revise",
	},
	{
		id: crypto.randomUUID(),
		title: "Team meeting preparation",
		description:
			"Prepare an agenda and talking points for the weekly team meeting.",
		dueDate: "2024-11-02",
		type: "todo",
	},
]

const taskReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [...state, action.task]
		case "EDIT_TASK":
			return state.map((t) => {
				if (t.id === action.task.id) {
					return action.task
				}
				return t
			})
		case "DELETE_TASK":
			return state.filter((t) => t.id !== action.id)

		case "SEARCH_TASK": {
			return state.filter((t) =>
				t.title
					.toLowerCase()
					.includes(action.text.toLowerCase())
			)
		}
		case "RESET_TASKS":
			return action.tasks
		default:
			alert("Unknown Action Type")
	}
}

export const useTasklist = () => {
	const { tasks } = useContext(ProjectContext)
	return tasks
}

export const useTasklistDispatch = () => {
	const { dispatch } = useContext(ProjectContext)
	return dispatch
}
