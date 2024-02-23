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

const GitHubIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 16 16">
    <path
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
  </svg>;


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
        <GitHubIcon/> Open GitHub
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
      <CmdDialog/>
      <GitHub/>
    </main>
    <Footer/>
  </>;

export default Work;