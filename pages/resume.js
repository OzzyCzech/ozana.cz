import Head from 'next/head';
import Experiences from './resume.experiences';

function experiences() {
	let d = new Date();
	return d.getFullYear() - 2009;
}

const Resume = () => (
	<div className="px-4 max-w-screen-xl mx-auto">
		<Head>
			<title>Resume | Ing. Roman Ožana</title>
		</Head>

		<h1 className="text-center py-6 md:py-8 lg:py-12 xl:py-20 text-2xl font-semibold">Ing. Roman Ožana / Resume</h1>

		<section className="hidden print:block">
			<article className="flex gap-4 py-4">
				<div>
					<p className="mb-3 text-lg leading-relaxed">
						Hi there, <br/>
						my name is Roman Ožana. I am a freelance webdesigner and developer with <strong>more than {experiences()} years of
						experiences</strong>. I'm here to create websites and applications easy to use, intuitive and modern inside. I love tech
						startups and community around. Enjoy working in small and effective team.
					</p>
					<ul className="leading-loose">
						<li><strong>Address</strong>: <a href="https://goo.gl/maps/v2qt8eXuiXqPijZD7">Prague, Přímětická st.</a></li>
						<li><strong>Web</strong>: <a href="https://ozana.cz">https://ozana.cz</a></li>
						<li><strong>Email</strong>: <a href="mailto:roman@ozana.cz?subject=Resume">roman@ozana.cz</a></li>
						<li><strong>Phone</strong>: <a href="tel:+420605783455">+420&nbsp;605&nbsp;783&nbsp;455</a></li>
						<li><strong>Twitter</strong>: <a href="https://www.twitter.com/OzzyCzech">@OzzyCzech</a></li>
					</ul>
				</div>
				<div className="w-[650px]">
					<img src="/img/roman-ozana.jpg" alt="Roman Ožana" className="object-cover my-4 rounded"/>
				</div>
			</article>
		</section>

		<Experiences/>

		<section className="break-before-page">
			<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current">Skills &amp; Technologies</h2>
			<div className="my-4 gap-2 grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2">
				<article>
					<h3 className="text-lg font-semibold">Day-to-day comfort</h3>
					<ul className="list-disc marker:text-gray-500 ml-6 leading-loose my-2">
						<li>PHP</li>
						<li>OOP, DI, IOC, design patterns</li>
						<li>SQL language (MariaDB, MySQL)</li>
						<li>MongoDB, Redis, Memcached</li>
						<li>Javascript ES6</li>
						<li>React, Angular, jQuery</li>
						<li>HTML5, CSS3, Tailwind (LESS, Sass, cssnext, PostCSS)</li>
						<li>Responsive Layout and Design</li>
						<li>Webpack, Parcel, Makefile</li>
					</ul>
				</article>

				<article>
					<h3 className="text-lg font-semibold">Experience with</h3>
					<ul className="list-disc marker:text-gray-500 ml-6 leading-loose my-2">
						<li>NextJS</li>
						<li>Node.js</li>
						<li>Gulp &amp; Grunt</li>
						<li>Couchbase</li>
						<li>Adobe Photoshop and Illustrator</li>
					</ul>
				</article>

				<article>
					<h3 className="text-lg font-semibold">Quality assurance</h3>
					<ul className="list-disc marker:text-gray-500 ml-6 leading-loose my-2">
						<li>E2E testing with Protractor</li>
						<li>Selenium + Selenium IDE</li>
						<li>Unit Testing (PHP Unit, Nette Tester, Mocha)</li>
					</ul>
				</article>

				<article>
					<h3 className="text-lg font-semibold">DevStack</h3>
					<ul className="list-disc marker:text-gray-500 ml-6 leading-loose my-2">
						<li>Docker</li>
						<li>Git</li>
						<li>Webpack, Makefile, Bash</li>
						<li>Travis &amp; GitLab CI</li>
						<li>MacOS and OS Linux</li>
					</ul>
				</article>
			</div>
		</section>

		<section>
			<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current">Languages</h2>
			<article className="my-4">
				<ul className="leading-loose">
					<li><strong>Czech</strong> &ndash; native language</li>
					<li><strong>English</strong> &ndash; communicative</li>
				</ul>
			</article>
		</section>

		<section>
			<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current">Additional Info</h2>
			<article className="my-4">
				<ul>
					<li>Driving license: <strong>B</strong></li>
				</ul>
			</article>
		</section>

		<section>
			<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current">Education</h2>
			<article className="my-4">
				<h3 className="text-xl font-semibold mb-0.5">VŠB &ndash; Technical University of Ostrava</h3>
				<p className="italic">2002 – 2007: Geoinformatics</p>
				<ul className="list-disc marker:text-gray-500 ml-6 leading-loose my-2">
					<li><strong>Study program</strong>: <a href="https://gis.vsb.cz/" target="_blank">Geodesy and cartography, Geoinformatics</a></li>
					<li><strong>Degree</strong>: Master's degree (Msc., Geoingormatics)</li>
					<li><strong>Address</strong>: VŠB – Technical university of Ostrava, 17. listopadu 15, Ostrava – Poruba, Faculty of Mining and Geology</li>
				</ul>
			</article>
			<article className="my-4">
				<h3 className="text-xl font-semibold mb-0.5">SPŠE Rožnov pod Radhoštěm</h3>
				<p className="italic">1997 – 2001: Electronic computer systems</p>
			</article>
		</section>

		<section className="hidden print:block break-before-page">
			<div className="grid min-h-screen align-center">
				<div className="self-center">
					<img src="/contact.svg" alt="Roman Ožana" className="w-6/12 mx-auto"/>
				</div>
			</div>
		</section>

		<div className="text-center my-12 print:hidden">
			<a href="/cv.pdf" download={`Resume - Ing. Roman Ožana - ${new Date().getFullYear()}.pdf`} className="py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-full text-white hover:text-white hover:no-underline inline-flex items-center">
				<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
				</svg>
				Download as PDF
			</a>
		</div>
	</div>
);

export default Resume;