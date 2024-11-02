//import {} from 'react';

import {
	HamBurgerMenu,
	MailIcon,
	NotifyBell,
} from "../svgs/HeaderSvgs"
import SearchBar from "./SearchBar"

export default function Header() {
	return (
		<header className='flex items-center justify-between bg-gray-800 p-4'>
			<button className='lg:hidden'>
				<HamBurgerMenu />
			</button>
			<SearchBar />
			<div className='flex items-center'>
				<button className='relative mr-4'>
					<NotifyBell />
					<span className='absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500'></span>
				</button>
				<button className='relative mr-4'>
					<MailIcon />
					<span className='absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500'></span>
				</button>
			</div>
		</header>
	)
}
