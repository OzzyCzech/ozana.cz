import {useEffect, useState, useRef} from 'react';
import Image from 'next/image';
import DownloadIcon from './download-icon.js';
import me from '../public/img/roman-ozana-medium.jpg';

const Avatar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const dropdown = useRef(null);

	useEffect(() => {
		if (!showMenu) return;
		function handleOutsideClick(event) {
			if (dropdown.current && !dropdown.current.contains(event.target)) {
				setShowMenu(false);
			}
		}

		window.addEventListener('click', handleOutsideClick);
		return () => window.removeEventListener('click', handleOutsideClick);

	}, [showMenu]);

	return (<div className="w-6/12 sm:w-2/12">
		<button title="Download me 😉..." onClick={() => setShowMenu(showMenu => !showMenu)} ref={dropdown}>
			<Image src={me} alt="Roman Ožana" className="drop-shadow rounded-full max-w-full h-auto align-middle border-none border"/>
		</button>
		{showMenu &&
			(<div className="absolute z-10 w-48 right-0 left-0 m-auto bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 self-center">
				<ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
					<li><a className="block py-2 px-4 hover:bg-gray-100 hover:no-underline dark:hover:bg-gray-600 dark:hover:text-white" href="/img/roman-ozana-small.jpg" download><DownloadIcon/> Avatar size</a></li>
					<li><a className="block py-2 px-4 hover:bg-gray-100 hover:no-underline dark:hover:bg-gray-600 dark:hover:text-white" href="/img/roman-ozana-medium.jpg" download><DownloadIcon/> Medium size</a></li>
					<li><a className="block py-2 px-4 hover:bg-gray-100 hover:no-underline dark:hover:bg-gray-600 dark:hover:text-white" href="/img/roman-ozana.jpg" download><DownloadIcon/> Full size</a></li>
				</ul>
			</div>)}
	</div>);
}

export default Avatar;