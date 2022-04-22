import Head from 'next/head';
// place-content-center
//
const ContactInformation = () =>
	<section className="lg:container lg:mx-auto self-center align-center" itemScope itemType="http://schema.org/Person">

		<div className="flex flex-wrap justify-center my-10">
			<div className="w-6/12 sm:w-2/12">
				<a href="/img/roman-ozana.jpg" download="Roman Ožana.jpg" title="Download me 😉...">
					<img src="/img/roman-ozana.jpg" alt="Roman Ožana" className="drop-shadow rounded-full max-w-full h-auto align-middle border-none border"/>
				</a>
			</div>
		</div>

		<div className="text-center mb-10">
			<h1 itemProp="name" className="font-bold text-4xl mb-1">Ing. Roman Ožana</h1>

			<a href="mailto:roman@ozana.cz" itemProp="email" className="text-3xl font-semibold">roman@ozana.cz</a>

			<p className="flex grid-cols-2 gap-x-3 justify-center divide-x my-3">
				<a href="tel:+420605783455" itemProp="telephone" className="font-bold text-current">+420 605 783 455</a>
			</p>

			<p itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="my-3">
				<span hidden itemProp="streetAddress">Přímětická 1199/36</span>
				<span itemProp="addressLocality">Prague</span>,{' '}
				<span itemProp="addressRegion">Czech Republic</span>
				<span hidden itemProp="postalCode">14000</span>
			</p>

			<p>
				IN: <a href="https://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=87098504" title="Registration number" target="_blank" className="text-current">87098504</a>
			</p>

			<a href="/ozana.vcf" download="Ing. Roman Ozana.vcf" className="py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-full text-white hover:text-white hover:no-underline inline-flex items-center mt-5 ml-2">
				<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
				</svg>
				<span>Add to Contacts</span>
			</a>
		</div>

	</section>;

const Homepage = () =>
	<>
		<Head>
			<title>Ing. Roman Ožana</title>
		</Head>
		<ContactInformation/>
	</>;


export default Homepage;