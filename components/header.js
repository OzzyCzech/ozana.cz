import Link from 'next/link'
import me from '../public/img/roman-ozana-medium.jpg';

const Header = ({active = '/'}) =>
	<header className="print:hidden">
		<nav className="flex justify-center lg:justify-end border-b text-center">
			<ul className="grid grid-cols-3 divide-x py-3">
				<li className={active === '/' ? 'font-bold' : null}>
					<Link href="/" className="inline-block py-1 px-5 no-underline text-current">Contact</Link>
				</li>
				<li className={active === '/work' ? 'font-bold' : null}>
					<Link href="/work" className="inline-block py-1 px-5 no-underline text-current">Work</Link>
				</li>
				<li className={active === '/resume' ? 'font-bold' : null}>
					<Link href="/resume" className="inline-block py-1 px-5 no-underline text-current">Resume</Link>
				</li>
			</ul>
		</nav>
	</header>

export default Header;