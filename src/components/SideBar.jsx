//import {} from 'react';

import Logo from "../assets/lws-logo-en.svg"
import {
	CalendarIcon,
	ConatctIcon,
	DashBoardIcon,
	KanbanIcon,
	MessageIcon,
	ProjectsIcon,
	SettingIcon,
} from "../svgs/SidebarSvgs"

export default function SideBar() {
	return (
		<aside className='hidden w-64 bg-gray-800 p-6 lg:block'>
			<div className='mb-8 flex items-center'>
				<div className='flex items-center justify-center rounded-full text-xl font-bold'>
					<img
						src={Logo}
						className='mx-auto h-10 text-center'
					/>
				</div>
			</div>
			<button className='mb-8 w-full rounded-md bg-green-500 py-2 text-white'>
				+ New Project
			</button>
			<nav>
				<ul className='space-y-4'>
					<li>
						<a
							href='#'
							className='flex items-center'
						>
							<DashBoardIcon />
							Dashboard
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center'
						>
							<ProjectsIcon />
							Projects
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center'
						>
							<ConatctIcon />
							Contact
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center'
						>
							<KanbanIcon />
							Kanban
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center'
						>
							<CalendarIcon />
							Calendar
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center'
						>
							<MessageIcon />
							Messages
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center'
						>
							<SettingIcon />
							Settings
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
