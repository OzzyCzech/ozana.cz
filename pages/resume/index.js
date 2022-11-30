import Head from 'next/head';
import Experiences from './resume.experiences';
import Image from 'next/image';
import qr from './contact.svg';
import DownloadIcon from '../../components/download-icon.js';
import Header from '../../components/header.js';

import {
	Git, React, PhpStorm, NextJs, TailwindCss, Docker, Apple, Linux, Parcel, Webpack, Php,
	Javascript, Html5, Css3, Angularjs, JQuery, Gnu, MySql, Redis, MongoDb, VisualStudioCode,
	Cypress, Mocha, PhpUnit, NodeJs, Bootstrap, Ava, Nette, Zend,
} from 'wticons';
import Footer from '../../components/footer.js';

const icons = {};

function experiences() {
	let d = new Date();
	return d.getFullYear() - 2009;
}

export default () =>
	<>
		<Head>
			<title>Resume | Ing. Roman Ožana</title>
		</Head>

		<Header/>

		<main className="px-4 max-w-screen-xl mx-auto">

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
				<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current">Tech Stack</h2>

				<div className="grid grid-flow-row gap-8 my-8">

					<article>
						<h3 className="font-semibold mb-6">Server side</h3>
						<ul className="flex flex-wrap gap-8 ml-6">
							<li className="flex gap-1.5 items-center">
								<Php className="h-6 w-6 rounded"/>
								PHP
							</li>
							<li className="flex gap-1.5 items-center">
								<NodeJs className="w-6 h-6"/>
								NodeJS
							</li>
						</ul>
					</article>

					<article>
						<h3 className="font-semibold mb-6">Client side</h3>
						<ul className="flex flex-wrap gap-8 ml-6">
							<li className="flex gap-1.5 items-center">
								<Javascript className="w-6 h-6"/>
								Javascript
							</li>
							<li className="flex gap-1.5 items-center">
								<Html5 className="w-6 h-6"/>
								HTML5
							</li>
							<li className="flex gap-1.5 items-center">
								<TailwindCss className="w-6 h-6"/>
								Tailwind CSS
							</li>
							<li className="flex gap-1.5 items-center">
								<Bootstrap className="w-6 h-6"/>
								Bootstrap
							</li>
							<li className="flex gap-1.5 items-center">
								<Css3 className="w-6 h-6"/>
								CSS3
							</li>
							<li className="flex gap-1.5 items-center">
								<React className="w-6 h-6"/>
								React
							</li>

							<li className="flex gap-1.5 items-center">
								<JQuery className="w-6 h-6"/>
								jQuery
							</li>
						</ul>
					</article>

					<article>
						<h3 className="font-semibold mb-6">Frameworks</h3>
						<ul className="flex flex-wrap gap-8 ml-6">
							<li className="flex gap-1.5 items-center">
								<NextJs className="w-6 h-6"/>
								NextJS
							</li>
							<li className="flex gap-1.5 items-center">
								<Angularjs className="w-6 h-6"/>
								Angular JS
							</li>
							<li className="flex gap-1.5 items-center">
								<Zend className="w-6 h-6"/>
								Zend Framework
							</li>
							<li className="flex gap-1.5 items-center">
								<Nette className="w-6 h-6"/>
								Nette Framework
							</li>
						</ul>
					</article>


					<article>
						<h3 className="font-semibold mb-6">Databases</h3>
						<ul className="flex flex-wrap gap-8 ml-6">
							<li className="flex gap-1.5 items-center">
								<MongoDb className="w-6 h-6"/>
								MongoDB
							</li>
							<li className="flex gap-1.5 items-center">
								<MySql className="w-6 h-6"/>
								MySQL
							</li>
							<li className="flex gap-1.5 items-center">
								<Redis className="w-6 h-6"/>
								Redis
							</li>
						</ul>

					</article>


					<article>
						<h3 className="font-semibold mb-6">Code quality</h3>
						<ul className="flex flex-wrap gap-8 ml-6">
							<li className="flex gap-1.5 items-center">
								<Ava className="w-6 h-6"/>
								AVA
							</li>
							<li className="flex gap-1.5 items-center">
								<PhpUnit className="w-5 h-5"/>
								PhpUnit
							</li>
							<li className="flex gap-1.5 items-center">
								<Cypress className="w-6 h-6"/>
								Cypress
							</li>
							<li className="flex gap-1.5 items-center">
								<Mocha className="w-6 h-6"/>
								Mocha
							</li>
						</ul>
					</article>


					<article>
						<h3 className="font-semibold mb-6">Bundlers</h3>
						<ul className="flex flex-wrap gap-8 ml-6">
							<li className="flex gap-1.5 items-center">
								<Parcel className="w-6 h-6"/>
								Parcel
							</li>

							<li className="flex gap-1.5 items-center">
								<Webpack className="w-6 h-6"/>
								Webpack
							</li>

							<li className="flex gap-1.5 items-center">
								<Gnu className="w-6 h-6"/>
								Makefile
							</li>
						</ul>
					</article>


					<article>
						<h3 className="font-semibold mb-6">DevStack</h3>

						<ul className="flex flex-wrap gap-8 ml-6">
							<li className="flex gap-1.5 items-center">
								<Apple className="w-6 h-6"/>
								macOS
							</li>
							<li className="flex gap-1.5 items-center">
								<Linux className="w-6 h-6"/>
								Linux
							</li>
							<li className="flex gap-1.5 items-center">
								<Docker className="w-6 h-6"/>
								Docker
							</li>
							<li className="flex gap-1.5 items-center">
								<Git className="w-6 h-6"/>
								Git
							</li>
							<li className="flex gap-1.5 items-center">
								<PhpStorm className="w-6 h-6"/>
								PhpStorm
							</li>
							<li className="flex gap-1.5 items-center">
								<VisualStudioCode className="w-6 h-6"/>
								Visual Studio Code
							</li>
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
						<Image src={qr} alt="Roman Ožana" className="w-6/12 mx-auto"/>
					</div>
				</div>
			</section>

			<div className="text-center my-12 print:hidden">
				<a href="/cv.pdf" download={`Resume - Ing. Roman Ožana - ${new Date().getFullYear()}.pdf`} className="py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-full text-white hover:text-white hover:no-underline inline-flex items-center">
					<DownloadIcon/>
					Download as PDF
				</a>
			</div>
		</main>

		<Footer/>
	</>