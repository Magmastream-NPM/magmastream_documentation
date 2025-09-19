import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import React from 'react';

import Header from "../components/Landing/Header";
import Content from "../components/Landing/Content";
import Features from "../components/Landing/Features";
import QuickLinks from "../components/Landing/QuickLinks";

function Landing() {

	return (
		<Layout>
			<div>
				<Header />
				<div className={'container'}>
					<Content />
					<Features />
					<QuickLinks />
				</div>
			</div>
		</Layout>
	);
}

export default Landing;