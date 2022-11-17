import Head from 'next/head';
import Experiences from './resume.experiences';
import Image from 'next/image';
import qr from './contact.svg';
import DownloadIcon from '../../components/download-icon.js';

import icons from '../../components/icons/index.js';

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
			<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current">Tech Stack</h2>
			<div className="my-4 gap-2 grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2">
				<article className="">


					<h3 className="text-lg font-semibold">Languages</h3>

					<ul className="flex flex-wrap gap-8 my-4">
						<li className="flex gap-1.5">
							<Image src={icons.php} alt="PHP" className="h-6 w-6 rounded"/>
							PHP
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.javascript} alt="Javascript" className="w-6 h-6"/>
							Javascript
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.html5} alt="HTML5" className="w-6 h-6"/>
							HTML5
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.css3} alt="CSS3" className="w-6 h-6"/>
							CSS3
						</li>
					</ul>

				</article>

				<article>
					<h3 className="text-lg font-semibold">Frameworks</h3>

					<ul className="flex flex-wrap gap-8 my-4">
						<li className="flex gap-1.5">
							<div className="w-6 h-6">
								<Image src={icons.react} alt="React"/>
							</div>
							React
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.nextjs} alt="Nextjs" className="w-6 h-6"/>
							NextJS
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.angularjs} alt="Angular" className="w-6 h-6"/>
							Angular
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.tailwindcss} alt="Tailwind CSS" className="w-6 h-6"/>
							Tailwind CSS
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.jquery} alt="jQuery" className="w-6 h-6"/>
							jQuery
						</li>

					</ul>

				</article>

				<article>
					<h3 className="text-lg font-semibold">Databases</h3>

					<ul className="flex flex-wrap gap-8 my-4">

						<li className="flex gap-1.5">
							<div className="w-6 h-6 flex items-stretch bg-[#E8E7D5] p-1 rounded-md">
								<Image src={icons.mongo} alt="Mongo"/>
							</div>
							MongoDB
						</li>

						<li className="flex gap-1.5">
							<div className="w-6 h-6 flex items-stretch bg-[#00758f] p-1 rounded-md">
								<Image src={icons.mysql} alt="MySQL"/>
							</div>
							MySQL
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.redis} alt="Redis" className="w-6 h-6"/>
							Redis
						</li>
					</ul>

				</article>

				<article>
					<h3 className="text-lg font-semibold">Tools</h3>

					<ul className="flex flex-wrap gap-4 my-4">
						<li className="flex gap-1.5">
							<Image src={icons.webpack} alt="Webpack" className="w-6 h-6"/>
							Webpack
						</li>

						<li className="flex gap-1.5">
							Parcel
						</li>

						<li className="flex gap-1.5">
							Makefile
						</li>
					</ul>
				</article>

				<article>
					<h3 className="text-lg font-semibold">DevStack &amp; environment</h3>

					<ul className="flex flex-wrap gap-8 my-4">
						<li className="flex gap-1.5">
							<Image src={icons.docker} alt="Docker" className="w-6 h-6"/>
							Docker
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.git} alt="Git" className="w-6 h-6"/>
							Git
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.apple} alt="Apple" className="w-6 h-6"/>
							macOS
						</li>

						<li className="flex gap-1.5">
							<Image src={icons.linux} alt="Linux" className="w-6 h-6"/>
							Linux
						</li>

					</ul>
				</article>

				<article>
					<h3 className="text-lg font-semibold">Quality assurance</h3>
					<ul className="list-disc marker:text-gray-500 ml-6 leading-loose my-2">
						<li>Cypress</li>
						<li>Mocha, Nette Tester, PHP Unit</li>
						<li>Unit Testing (PHP Unit, Nette Tester, Mocha)</li>
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
	</div>
);


// QR code generator
// @see https://www.qrcode-monkey.com/

export default Resume;