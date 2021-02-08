import Head from 'next/head'
import Experiences from './resume.experiences';

function experiences() {
	let d = new Date();
	return d.getFullYear() - 2009;
}

const Resume = () => (
	<div className="lg:container lg:mx-auto">
		<Head>
			<title>Resume | Ing. Roman Ožana</title>
		</Head>

		<h1 className="text-center py-6 md:py-8 lg:py-12 xl:py-20">Ing. Roman Ožana / Resume</h1>

		<section className="print">
			<article>
				<p>
					<img src="/img/roman-ozana.jpg" alt="Roman Ožana" className="w-64 float-right rounded ml-8 mr-4"/>
					Hi there, <br/>
					my name is Roman Ožana. I am a freelance webdesigner and developer with <strong>more than {experiences()} years of
					experiences</strong>. I'm here to create websites and applications easy to use, intuitive and modern inside. I love tech
					startups and community around. Enjoy working in small and effective team.
				</p>
				<p>Say hi on Twitter <a href="https://www.twitter.com/OzzyCzech">@OzzyCzech</a></p>

				<ul>
					<li><strong>Address</strong>: Prague, Přímětická st.</li>
					<li><strong>Web</strong>: <a href="https://ozana.cz">https://ozana.cz</a></li>
					<li><strong>Email</strong>: <a href="mailto:roman@ozana.cz?subject=Resume">roman@ozana.cz</a></li>
					<li><strong>Phone</strong>: <a href="tel:+420605783455">+420&nbsp;605&nbsp;783&nbsp;455</a></li>
				</ul>
			</article>
		</section>

		<Experiences/>

		<section className="page-break-before">
			<h2 className="text-center md:text-left italic border-b-4 p-4 mb-5">Skills &amp; Technologies</h2>
			<div className="grid grid-cols-2 sm:grid-col-none mx-4 gap-2 xl:mx-6">
				<article>
					<h3>Day-to-day comfort</h3>
					<ul>
						<li>PHP</li>
						<li>OOP, DI, IOC, design patterns</li>
						<li>SQL language (MariaDB, MySQL)</li>
						<li>MongoDB, Redis, Memcached</li>
						<li>Javascript ES6</li>
						<li>React, Angular, jQuery</li>
						<li>HTML5, CSS3 (incl. LESS, Sass, cssnext, PostCSS, Bootstrap and Tailwind)</li>
						<li>Webpack, Makefile</li>
						<li>Responsive Layout and Design</li>
					</ul>
				</article>

				<article>
					<h3>Experience with</h3>
					<ul>
						<li>NextJS</li>
						<li>Tailwind</li>
						<li>Node.js</li>
						<li>Gulp &amp; Grunt</li>
						<li>Couchbase</li>
						<li>Adobe Photoshop and Illustrator</li>
					</ul>
				</article>

				<article>
					<h3>Quality assurance</h3>
					<ul>
						<li>E2E testing with Protractor</li>
						<li>Selenium + Selenium IDE</li>
						<li>Unit Testing (PHP Unit, Nette Tester, Mocha)</li>
					</ul>
				</article>

				<article>
					<h3>DevStack</h3>
					<ul>
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
			<h2 className="text-center md:text-left italic border-b-4 p-4 mb-5">Languages</h2>
			<article className="mx-4 lg:mx-8">
				<ul>
					<li><strong>Czech</strong> &ndash; native language</li>
					<li><strong>English</strong> &ndash; communicative</li>
				</ul>
			</article>
		</section>

		<section>
			<h2 className="text-center md:text-left italic border-b-4 p-4 mb-5">Additional Info</h2>
			<article className="mx-4 lg:mx-8">
				<ul>
					<li>Driving license: <strong>B</strong></li>
				</ul>
			</article>
		</section>

		<section>
			<h2 className="text-center md:text-left italic border-b-4 p-4 mb-5">Education</h2>
			<article className="mx-4 lg:mx-8">
				<h3>VŠB &ndash; Technical University of Ostrava</h3>
				<h4>2002 – 2007: Geoinformatics</h4>
				<ul>
					<li>Study program: <a href="https://gis.vsb.cz/" target="_blank">Geodesy and cartography, Geoinformatics</a></li>
					<li>Degree: Master's degree (Msc., Geoingormatics)</li>
					<li>Address: VŠB – Technical university of Ostrava, 17. listopadu 15, Ostrava – Poruba, Faculty of Mining and Geology</li>
				</ul>
			</article>
			<article className="mx-8">
				<h3>SPŠE Rožnov pod Radhoštěm</h3>
				<h4>1997 – 2001: Electronic computer systems </h4>
			</article>
		</section>

		<section className="page-break-before print">
			<div className="grid min-h-screen align-center">
				<h3>Contact me</h3>
				<div className="self-center">
					<img src="/contact.svg" alt="Roman Ožana" className="w-6/12 mx-auto"/>
				</div>
			</div>
		</section>

		<div className="text-center my-12 no-print">
			<a href="/cv.pdf" download={`CV - Ing. Roman Ožana - ${new Date().getFullYear()}.pdf`} className="btn btn-blue">
				<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
				</svg>
				Download as PDF
			</a>
		</div>
	</div>
)

export default Resume;