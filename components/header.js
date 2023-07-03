import Link from 'next/link'
import {useRouter} from 'next/router';

export default () => {
  const {asPath} = useRouter();

  return (
    <header className="print:hidden">
      <nav className="flex justify-center lg:justify-end border-b text-center">
        <ul className="grid grid-cols-3 divide-x py-3">
          <li className={asPath === '/' ? 'font-bold' : null}>
            <Link href="/" className="inline-block py-1 px-5 no-underline text-current">Contact</Link>
          </li>
          <li className={asPath === '/work' ? 'font-bold' : null}>
            <Link href="/work" className="inline-block py-1 px-5 no-underline text-current">Work</Link>
          </li>
          <li className={asPath === '/resume' ? 'font-bold' : null}>
            <Link href="/resume" className="inline-block py-1 px-5 no-underline text-current">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}