import Link from 'next/link'

const Header = ({active = '/'}) =>
	<header className="no-print">
		<nav className="flex justify-center lg:justify-end border-b text-center">
			<ul className="grid grid-cols-3 divide-x py-3">
				<li className={active === '/' ? 'font-bold' : null}>
					<Link href="/"><a className="inline-block py-1 px-5 no-underline text-current">Contact</a></Link>
				</li>
				<li className={active === '/work' ? 'font-bold' : null}>
					<Link href="/work"><a className="inline-block py-1 px-5 no-underline text-current">Work</a></Link>
				</li>
				<li className={active === '/resume' ? 'font-bold' : null}>
					<Link href="/resume"><a className="inline-block py-1 px-5 no-underline text-current">Resume</a></Link>
				</li>
			</ul>
		</nav>
	</header>

export default Header;