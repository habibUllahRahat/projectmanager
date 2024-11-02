//import {} from 'react';

import DashBoard from "../components/DashBoard"
import Header from "../components/Header"
import SideBar from "../components/SideBar"

export default function ProjectManager() {
	
	return (
		<div className='flex h-screen '>
			<SideBar />
			<main className='flex-1 overflow-y-auto overflow-x-hidden'>
				<Header />
				<DashBoard />
			</main>
		</div>
	)
}
