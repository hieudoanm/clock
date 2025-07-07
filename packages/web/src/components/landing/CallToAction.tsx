import Link from 'next/link';
import { FC } from 'react';

export const CallToAction: FC = () => {
	return (
		<section className="w-full py-16">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-4 text-center md:gap-y-8">
				<h3 className="text-2xl font-bold sm:text-3xl">Master your time across zones</h3>
				<p className="text-neutral-500">
					Track multiple timezones and boost productivity with built-in Pomodoro sessions — all in one sleek,
					browser-based app.
				</p>
				<div>
					<Link href="/pomodoro">
						<button type="button" className="cursor-pointer rounded-full border border-neutral-800 px-6 py-3">
							Launch App
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
