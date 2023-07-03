import Head from 'next/head';
import github from '../../data/github.json';
import Twemoji from '../../components/twemoji.js';
import Image from 'next/image';

import logoGithub from './github.svg';
import logoSphido from './sphido.svg';
import logoTestomato from './testomato.svg';
import logoZdrojak from './zdrojak.svg';

import homepageTestomato from './testomato.png';
import homepageZdrojak from './zdrojak.png';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';

// classname fill-current w-4 h-4 ml-2
const ShareIcon = () =>
  <svg width="1em" height="1em" viewBox="0 0 16 16" className="fill-current w-6 h-6 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
  </svg>;

const Testomato = () =>
  <article className="bg-[#b72b2a] grid lg:grid-cols-2 md:p-12 md:gap-12 p-6 lg:p-32 lg:gap-32 text-white">
    <div>

      <Image src={logoTestomato} alt="Testomato" className="w-6/12 sm:w-4/12 my-6"/>

      <p className="text-xl leading-relaxed mb-4">
        I'm working at <a href="https://www.testomato.com/team" target="_blank" className="hover:text-white">Testomato</a> since beginning as co-founder &amp; developer.{' '}
        <a href="https://www.testomato.com" target="_blank" className="hover:text-current">Testomato starts</a> almost ten years ago
        as <a href="https://www.testomato.com/about" className="hover:text-current">one man project</a> based on ideas
        of <a href="https://michal.illich.cz/" className="hover:text-current" target="_blank">Michal Illich</a>.{' '}
        <a href="https://www.testomato.com" target="_blank" className="hover:text-current">Testomato</a> is a cloud-based{' '}
        <a href="https://www.testomato.com" target="_blank" className="hover:text-current">automated website monitoring tool</a>{' '}
        for checks any type of websites and alerts you to problems. It's fast and easiest way to monitor websites automatically!{' '}
        <a href="https://www.testomato.com" target="_blank" className="hover:text-current">Testomato</a> can check your website
        300 times a day. How often do you?
      </p>

      <h3 className="font-medium mb-3 text-xl">Technologies &amp; Tools</h3>

      <ul className="list-disc ml-8 leading-loose text-lg mb-4">
        <li>
          PHP (<a href="https://nette.org/cs/" target="_blank" rel="nofollow" className="hover:text-current">Nette</a>,{' '}
          <a href="https://framework.zend.com/" target="_blank" rel="nofollow" className="hover:text-current">Zend Framework</a>)
        </li>
        <li>
          <a href="https://mariadb.org/" target="_blank" rel="nofollow" className="hover:text-current">MariaDB</a>,{' '}
          <a href="https://www.mongodb.com/" target="_blank" rel="nofollow" className="hover:text-current">MongoDB</a>,{' '}
          <a href="https://redis.io/" target="_blank" rel="nofollow" className="hover:text-current">Redis</a>
        </li>
        <li>our own <a href="https://github.com/testomato/minicrawler" target="_blank" className="hover:text-current">Minicrawler</a></li>
        <li><a href="https://www.docker.com/" target="_blank" rel="nofollow" className="hover:text-current">Docker</a>, git, DI, CI, TDD, &hellip;</li>
        <li><a href="https://tailwindcss.com/" target="_blank" className="hover:text-current">Tailwind</a>, Angular JS and Javascript ES6</li>
        <li>Build with <a href="https://parceljs.org/" target="_blank" className="hover:text-current">Parcel</a> and Makefile</li>
      </ul>

      <p className="mt-6">
        <a href="https://www.testomato.com" target="_blank" className="py-3 px-6 bg-white/20 hover:bg-white/30 rounded-full hover:text-current hover:no-underline inline-flex items-center" title="Visit page">
          <ShareIcon/> Visit Testomato
        </a>
      </p>
    </div>

    <div>
      <a href="https://www.testomato.com" target="_blank">
        <Image src={homepageTestomato} alt="Testomato website screenshot" className="shadow-2xl rounded-lg border border-gray-900"/>
      </a>
    </div>
  </article>;

const Zdrojak = () =>
  <article className="bg-[#424242] grid lg:grid-cols-2 md:p-12 md:gap-12 p-6 lg:p-32 lg:gap-32 text-gray-50">
    <div>

      <Image src={logoZdrojak} alt="Zdrojak.cz" className="drop-shadow-2xl w-6/12 sm:w-4/12 my-6"/>

      <p className="text-xl leading-relaxed mb-3">
        <a href="https://www.zdrojak.cz/" target="_blank" className="hover:text-current">Zdrojak.cz</a> is one of the most famous Czech
        magazines about development. I am there since <a href="https://www.zdrojak.cz/clanky/novy-zdrojak-startuje-tri-dva-jedna/">the rebirth</a> as
        the lead developer and site administrator.
        Current version is build on Wordpress and multiple in-house plugins, modifications and tweaks.
      </p>

      <h3 className="font-medium mb-3 text-xl">Technologies &amp; Tools</h3>

      <ul className="list-disc ml-8 leading-loose text-lg mb-4">
        <li><a href="https://wordpress.org/" target="_blank" rel="nofollow" className="hover:text-white">Wordpress</a> with custom plugins and template</li>
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

      <p className="mt-6">
        <a href="https://www.zdrojak.cz" target="_blank" className="py-3 px-6 bg-white/20 hover:bg-white/30 rounded-full hover:text-current hover:no-underline inline-flex" title="Visit page">
          <ShareIcon/> Visit Zdrojak.cz
        </a>
      </p>

    </div>

    <div>
      <a href="https://www.testomato.com" target="_blank">
        <Image src={homepageZdrojak} alt="Zdrojak website screenshot" className="shadow-2xl rounded-lg border border-gray-900"/>
      </a>
    </div>
  </article>;

const Sphido = () =>
  <article className="text-center bg-gray-200 p-6 md:p-24 lg:p-32">
    <a href="http://sphido.org" target="_sphido">
      <Image src={logoSphido} alt="Sphido Logo" className="inline-block my-4"/>
    </a>
    <p className="my-3 text-xl">
      A rocket <Twemoji>🚀</Twemoji> fast, <Twemoji>💭</Twemoji> lightweight and flexible static site <Twemoji>🤖</Twemoji> generator
    </p>
    <p className="text-center mt-6">
      <a href="https://sphido.org" target="_blank" className="py-3 px-6 bg-rose-600 hover:bg-rose-700 text-white rounded-full hover:text-white hover:no-underline inline-flex items-center"><ShareIcon/> sphido.org</a>
    </p>
  </article>;

// @see https://primer.style/css/utilities/colors
const GitHub = () =>
  <article className="bg-[#f6f8fa] p-6 md:p-24 xl:p-32">

    <a href="https://github.com/OzzyCzech" target="_blank" title="Visit my GitHub profile">
      <Image src={logoGithub} alt="GitHub logo" className="w-48 my-4"/>
    </a>

    <ul className="grid gap-3 lg:grid-cols-2 list-disc marker:text-gray-300">
      {github.filter((item) => !item.fork && !item.archived).sort((a, b) => {
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      }).map((item, index) => (<li key={index} className="mx-4">
        <a href={item.html_url} target="_blank" className="font-bold">{item.name}</a> {item.description ? '- ' + item.description : ''}
      </li>))}
    </ul>
    <p className="text-center mt-32">
      <a href="https://github.com/OzzyCzech" target="_blank"
         className="py-3 px-6 bg-gray-900 hover:bg-black text-white rounded-full hover:text-white hover:no-underline inline-flex items-center"
         title="Visit my GitHub profile">
        <ShareIcon/> Open GitHub
      </a>
    </p>
  </article>;

const Work = () =>
  <>
    <Head>
      <title>Work | Ing. Roman Ožana</title>
    </Head>
    <Header/>
    <main>
      <Testomato/>
      <Zdrojak/>
      <Sphido/>
      <GitHub/>
    </main>
    <Footer/>
  </>;

export default Work;