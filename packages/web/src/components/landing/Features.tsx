import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our Time Management App?</h3>
				<p className="mx-auto mt-4 max-w-3xl text-neutral-500">
					Stay focused, on time, and in sync — no accounts, no clutter, just smart productivity in your browser.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🌍 Global Clock View</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Track time across multiple timezones — perfect for remote work, scheduling, and global collaboration.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⏱️ Built-in Pomodoro</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Boost your focus with Pomodoro sessions — complete with breaks, notifications, and stats.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 100% Private & Local</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Everything works directly in your browser. No data leaves your device, ensuring full privacy.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
