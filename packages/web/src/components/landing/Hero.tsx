import { APP_NAME } from '@clock/constants';
import Link from 'next/link';
import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<section className="w-full py-20">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-4 text-center md:gap-y-8">
				<h2 className="text-4xl font-extrabold text-neutral-100 sm:text-5xl">{APP_NAME}</h2>
				<p className="text-lg text-neutral-500">
					A sleek, timezone-aware clock and Pomodoro timer — stay focused and in sync, right from your browser.
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
