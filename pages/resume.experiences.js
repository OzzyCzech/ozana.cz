import moment from 'moment';
import React from 'react';

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
	<article className="py-4">
		<div className="flex justify-between">
			<h3 className="text-xl font-semibold mb-1">
				<a href="https://www.testomato.com" target="_blank">Testomato s.r.o.</a> &ndash;
				Co-founder &amp; lead developer
			</h3>
			<span className="text-gray-600">{duration(new Date(2012, 3, 1), new Date())}</span>
		</div>
		<strong>March 2012 &ndash; present</strong>
		<p>
			Work as full time Javascript and PHP lead developer.
		</p>
	</article>;

const Devel = () =>
	<article className="py-4">
		<div className="flex justify-between">
			<h3 className="text-xl font-semibold mb-1"><a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=24683507" target="_blank">
				Devel.cz Lab s.r.o.</a> &ndash; PHP/JS developer
			</h3>
			<span className="text-gray-600">{duration(new Date(2011, 5, 1))}</span>
		</div>
		<strong>October 2009 &ndash; present</strong>
		<p>
			Work as experienced PHP and Javascript developer mostly on <a href="https://www.zdrojak.cz">zdrojak.cz</a>.
		</p>
	</article>;

const Intergraph = () =>
	<article className="py-4">
		<div className="flex justify-between">
			<h3 className="text-xl font-semibold mb-1">Intergraph s.r.o. &ndash; Application Engineer</h3>
			<span className="text-gray-600">{duration(new Date(2010, 7, 1), new Date(2011, 3, 31))}</span>
		</div>
		<strong>July 2010 &ndash; April 2011</strong>
		<p>
			Application Engineer (external consultant) – testing of corporate solution for metadata
			sharing and managing. Developing of simple C# .NET applications.
		</p>
	</article>;

const Skvely = () =>
	<article className="py-4">
		<div className="flex justify-between">
			<h3 className="text-xl font-semibold mb-1">Skvely.CZ s.r.o. &ndash; PHP developer</h3>
			<span className="text-gray-600">{duration(new Date(2009, 3, 1), new Date(2010, 7, 31))}</span>
		</div>
		<strong>March 2009 &ndash; July 2010</strong>
		<p>Works there as web application developer mostly in PHP and developing some modules for e-commerce Magento.</p>
	</article>;

const Freelancer = () =>
	<article className="py-4">
		<div className="flex justify-between">
			<h3 className="text-xl font-semibold mb-1"><a href="https://ozana.cz">Freelance web designer</a></h3>
			<span className="text-gray-600">{duration(new Date(2009, 2, 1))}</span>
		</div>
		<strong>October 2009 &ndash; present</strong>
		<p>Freelance web designer and developer of Internet application &ndash; mostly in PHP and Javascript.</p>
	</article>;


const Experiences = () => (
	<section>
		<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current">Work Experiences</h2>
		<div className="divide-y mb-3">
			<Testomato/>
			<Devel/>
			<Freelancer/>
		</div>
		<h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-1 pb-2 italic text-gray-600 print:text-current€">Former Work Experiences</h2>
		<div className="divide-y mb-3">
			<Intergraph/>
			<Skvely/>
		</div>
	</section>

);

export default Experiences;