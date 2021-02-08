import moment from 'moment';
import React from "react";

function duration(start, end) {
	let s = moment(start).add(-1, 'day');
	let e = moment(end);

	let duration = moment.duration(e.diff(s));

	return [
		duration.years() ? duration.years() + (duration.years() === 1 ? ' year ' : ' years ') : '',
		duration.months() ? duration.months() + (duration.months() === 1 ? ' month ' : ' months ') : '',
		duration.days() ? duration.days() + (duration.days() === 1 ? ' day ' : ' days ') : '',
	].join(' ');
}

export const Testomato = () =>
	<article>
		<small className="lg:float-right text-gray-600">{duration(new Date(2012, 3, 1), new Date())}</small>
		<h3>
			<a href="https://www.testomato.com" target="_blank">Testomato s.r.o.</a> &ndash;
			Co-founder &amp; lead developer
		</h3>

		<h4>March 2012 &ndash; present</h4>

		<p>
			Work as full time Javascript and PHP lead developer.
		</p>

	</article>;

const Devel = () =>
	<article>
		<small className="lg:float-right text-gray-600">{duration(new Date(2011, 5, 1))}</small>

		<h3><a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=24683507" target="_blank">Devel.cz
			Lab s.r.o.</a> &ndash; PHP/JS developer</h3>

		<h4>October 2009 &ndash; present</h4>

		<p>
			Work as experienced PHP and Javascript developer mostly on <a href="https://www.zdrojak.cz">zdrojak.cz</a>.
		</p>
	</article>;

const Intergraph = () =>
	<article>
		<small className="lg:float-right text-gray-600">{duration(new Date(2010, 7, 1), new Date(2011, 3, 31))}</small>

		<h3>Intergraph s.r.o. &ndash; Application Engineer</h3>

		<h4>July 2010 &ndash; April 2011</h4>

		<p>
			Application Engineer (external consultant) – testing of corporate solution for metadata
			sharing and managing. Developing of simple C# .NET applications.
		</p>
	</article>;

const Skvely = () =>
	<article>

		<small className="lg:float-right text-gray-600">{duration(new Date(2009, 3, 1), new Date(2010, 7, 31))}</small>
		
		<h3>Skvely.CZ s.r.o. &ndash; PHP developer</h3>

		<h4>March 2009 &ndash; July 2010</h4>

		<p>Works there as web application developer mostly in PHP and developing some modules for e-commerce Magento.</p>
	</article>;

const Freelancer = () =>
	<article>
		<small className="lg:float-right text-gray-600">{duration(new Date(2009, 2, 1))}</small>

		<h3><a href="https://ozana.cz">ozana.cz</a> &ndash; Freelance web designer</h3>

		<h4>October 2009 &ndash; present</h4>

		<p>Freelance web designer and developer of Internet application &ndash; mostly in PHP and Javascript.</p>
	</article>;


const Experiences = () => (
	<section>
		<h2 className="text-center md:text-left italic border-b-4 p-4 mb-5">Work Experiences</h2>
		<div className="grid gap-y-4 mx-4 lg:mx-8">
			<Testomato/>
			<Devel/>
			<Freelancer/>
		</div>
		<h2 className="text-center md:text-left italic border-b-4 p-4 mb-5">Former Work Experiences</h2>
		<div className="grid gap-y-4 mx-4 lg:mx-8">
			<Intergraph/>
			<Skvely/>
		</div>
	</section>

)

export default Experiences;