import Document, {Head, Html, Main, NextScript} from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'
import React from "react";

export default class MyDocument extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps}
	}

	render() {

		const pathname = this.props.__NEXT_DATA__.page; // get active pathname...
		const page = this.props.__NEXT_DATA__.page.replace(/[^\w\-]+/g, '');

		return (
			<Html>
				<Head>
					<meta name="author" content="All: Roman Ožana; e-mail: roman@ozana.cz"/>
					<link rel="shortcut icon" href="/favicon.svg"/>
					<link rel="author" href="/humans.txt"/>
				</Head>

				<body className={'font-sans text-gray-900 leading-normal tracking-normal grid min-h-screen grid-rows-[auto_1fr_auto] ' + (page ? page : 'home')}>
				<Header active={pathname}/>
				<main className="grid items-center"><Main/></main>
				<Footer active={pathname}/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}