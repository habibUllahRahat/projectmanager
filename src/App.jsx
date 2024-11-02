//import {} from 'react';

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProjectContext from "./context/ProjectContext"
import ProjectManager from "./pages/ProjectManager"

export default function App() {
	return (
		<ProjectContext>
			<ProjectManager />
			<ToastContainer />
		</ProjectContext>
	)
}
