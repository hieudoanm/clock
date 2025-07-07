import { CallToAction } from '@clock/components/landing/CallToAction';
import { Features } from '@clock/components/landing/Features';
import { Footer } from '@clock/components/landing/Footer';
import { Hero } from '@clock/components/landing/Hero';
import { LinearBackground } from '@clock/components/shared/Linear';
import { Navbar } from '@clock/components/shared/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<LinearBackground />
			<div className="relative z-10">
				<Navbar />
				<div className="w-full border-t border-neutral-800" />
				<Hero />
				<div className="w-full border-t border-neutral-800" />
				<Features />
				<div className="w-full border-t border-neutral-800" />
				<CallToAction />
				<div className="w-full border-t border-neutral-800" />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
