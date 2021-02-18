import Head from 'next/head'
import github from "../data/github.json";

// classname fill-current w-4 h-4 ml-2
const ShareIcon = () =>
	<svg width="1em" height="1em" viewBox="0 0 16 16" className="fill-current w-6 h-6 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
		<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
	</svg>

const Testomato = () =>
	<article className="bg-testomato grid lg:grid-cols-2 md:p-12 md:gap-12 p-6 lg:p-32 lg:gap-32 text-white">
		<div>

			<p>
				<img src="/img/testomato.svg" alt="Testomato" className="w-6/12 sm:w-4/12"/>
			</p>

			<p className="text-2xl leading-relaxed">
				I'm working at <a href="https://www.testomato.com/team" target="_blank" className="font-bold hover:text-white">Testomato</a> since beginning as co-founder &amp; developer.{' '}
				<a href="https://www.testomato.com" target="_blank" className="font-bold hover:text-white">Testomato starts</a> almost ten years ago
				as <a href="https://www.testomato.com/about" className="font-bold hover:text-white">one man project</a> based on ideas
				of <a href="https://michal.illich.cz/" className="hover:text-white font-bold" target="_blank">Michal Illich</a>.{' '}
				<a href="https://www.testomato.com" target="_blank" className="font-bold hover:text-white">Testomato</a> is a cloud-based{' '}
				<a href="https://www.testomato.com" target="_blank" className="font-bold hover:text-white">automated website monitoring tool</a>{' '}
				for checks any type of websites and alerts you to problems. It's fast and easiest way to monitor websites automatically!{' '}
				<a href="https://www.testomato.com" target="_blank" className="font-bold hover:text-white">Testomato</a> can check your website
				300 times a day. How often do you?
			</p>

			<h3>Technologies &amp; Tools</h3>

			<ul className="text-xl">
				<li>
					PHP (<a href="https://nette.org/cs/" target="_blank" rel="nofollow" className="hover:text-white">Nette</a>,{' '}
					<a href="https://framework.zend.com/" target="_blank" rel="nofollow" className="hover:text-white">Zend Framework</a>)
				</li>
				<li>
					<a href="https://mariadb.org/" target="_blank" rel="nofollow" className="hover:text-white">MariaDB</a>,{' '}
					<a href="https://www.mongodb.com/" target="_blank" rel="nofollow" className="hover:text-white">MongoDB</a>,{' '}
					<a href="https://redis.io/" target="_blank" rel="nofollow" className="hover:text-white">Redis</a>
				</li>
				<li>our own <a href="https://github.com/testomato/minicrawler" target="_blank" className="hover:text-white">Minicrawler</a></li>
				<li><a href="https://www.docker.com/" target="_blank" rel="nofollow" className="hover:text-white">Docker</a>, git, DI, CI, TDD, &hellip;</li>
				<li>Angular JS + Javascript ES6</li>
				<li>Build with <a href="https://webpack.js.org/" target="_blank" className="hover:text-white">Webpack</a> and Makefile</li>
			</ul>

			<p className="text-center">
				<a href="https://www.testomato.com" target="_blank" className="btn btn-white" title="Visit page"><ShareIcon/> Testomato.com</a>
			</p>
		</div>

		<div>
			<a href="https://www.testomato.com">
				<img src="/img/work/testomato.png" alt="Testomato website screenshot" className="shadow-2xl rounded"/>
			</a>
		</div>
	</article>;

const Zdrojak = () =>
	<article className="bg-zdrojak grid lg:grid-cols-2 md:p-12 md:gap-12 p-6 lg:p-32 lg:gap-32 text-white">
		<div>

			<p>
				<img src="/img/zdrojak.svg" alt="Zdrojak.cz" className="w-6/12 sm:w-4/12"/>
			</p>

			<p className="text-2xl leading-relaxed">
				<a href="https://www.zdrojak.cz/" target="_blank">Zdrojak.cz</a> is one of the most famous Czech
				magazines about development. I am there since <a href="https://www.zdrojak.cz/clanky/novy-zdrojak-startuje-tri-dva-jedna/">the rebirth</a> as
				the lead developer and site administrator.
				Current version is build on Wordpress and multiple in-house plugins, modifications and tweaks.
			</p>

			<h3>Technologies &amp; Tools</h3>

			<ul className="text-xl ">
				<li><a href="https://wordpress.org/" target="_blank" rel="nofollow" className="hover:text-white">Wordpress 5+</a> with custom plugins and template</li>
				<li>PHP 8 and Javascript ES6</li>
				<li><a href="https://reactjs.org/" target="_blank" rel="nofollow" className="hover:text-white">React</a> (for Gutenberg plugins)</li>
				<li>
					<a href="https://mariadb.org/" target="_blank" rel="nofollow" className="hover:text-white">MariaDB</a>,{' '}
					<a href="https://redis.io/" target="_blank" rel="nofollow" className="hover:text-white">Redis</a>{' '}
				</li>
				<li>
					<a href="https://www.docker.com/" target="_blank" rel="nofollow" className="hover:text-white">Docker</a>, git, CI
				</li>
				<li>
					Build with <a href="https://parceljs.org/" target="_blank" rel="nofollow" className="hover:text-white">Parcel</a> and Makefile
				</li>
			</ul>

			<p className="text-center">
				<a href="https://www.zdrojak.cz" target="_blank" className="btn btn-white" title="Visit page"><ShareIcon/> Zdrojak.cz</a>
			</p>

		</div>

		<div>
			<a href="https://www.testomato.com">
				<img src="/img/work/zdrojak.png" alt="Zdrojak website screenshot" className="rounded shadow-2xl"/>
			</a>
		</div>
	</article>;

const Sphido = () =>
	<article className="text-center bg-gray-200 p-6 md:p-24 lg:p-32">
		<p>
			<a href="http://sphido.org" target="_sphido"><img src="/img/sphido.svg" alt="Sphido Logo" className="inline-block"/></a>
		</p>
		<p>A rocket <img className="inline-block w-6 h-6 mb-1" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/v/13.0.0/72x72/1f680.png"/> fast, lightweight, static site generator</p>
		<p className="text-center">
			<a href="https://sphido.org" target="_blank" className="btn btn-blue"><ShareIcon/> Sphido.org</a>
		</p>
	</article>;

const GitHub = () =>
	<article className="bg-github p-6 md:p-24 xl:p-32">
		<p>
			<a href="https://github.com/OzzyCzech" target="_blank" title="Visit my GitHub profile">
				<img src="/img/github.svg" alt="GitHub logo" className="w-48"/>
			</a>
		</p>

		<ul className="grid lg:grid-cols-2 lg:gap-x-8">
			{github.filter((item) => !item.fork && !item.archived).sort((a, b) => {
				return new Date(b.pushed_at) - new Date(a.pushed_at);
			}).map((item, index) => (<li key={index}>
				<a href={item.html_url} target="_blank" className="font-bold">{item.name}</a> {item.description ? '- ' + item.description : ''}
			</li>))}
		</ul>
		<p className="text-center mt-32">
			<a href="https://github.com/OzzyCzech" target="_blank" className="btn btn-black" title="Visit my GitHub profile"><ShareIcon/> Open GitHub</a>
		</p>
	</article>;

const Work = () =>
	<>
		<Head>
			<title>Work | Ing. Roman Ožana</title>
		</Head>
		<div>
			<Testomato/>
			<Zdrojak/>
			<Sphido/>
			<GitHub/>
		</div>
	</>

export default Work;