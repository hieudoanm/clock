import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const timezones = [
	{ label: 'Los Angeles', tz: 'America/Los_Angeles' }, // UTC-7
	{ label: 'Dallas', tz: 'America/Chicago' }, // UTC-5
	{ label: 'New York', tz: 'America/New_York' }, // UTC-4
	{ label: 'London', tz: 'Europe/London' }, // UTC+1
	{ label: 'Frankfurt', tz: 'Europe/Berlin' }, // UTC+2
	{ label: 'Paris', tz: 'Europe/Paris' }, // UTC+2
	{ label: 'Helsinki', tz: 'Europe/Helsinki' }, // UTC+3
	{ label: 'Dubai', tz: 'Asia/Dubai' }, // UTC+4
	{ label: 'Bangkok', tz: 'Asia/Bangkok' }, // UTC+7
	{ label: 'Tokyo', tz: 'Asia/Tokyo' }, // UTC+9
	{ label: 'Sydney', tz: 'Australia/Sydney' }, // UTC+10
];

const getTimeInZone = (tz: string) => {
	return new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
		timeZone: tz,
	}).format(new Date());
};

const TimeZonesPage: NextPage = () => {
	const [times, setTimes] = useState(() => timezones.map(({ tz }) => getTimeInZone(tz)));

	useEffect(() => {
		const interval = setInterval(() => {
			setTimes(timezones.map(({ tz }) => getTimeInZone(tz)));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-neutral-900 px-4 py-16 text-white">
			<h1 className="mb-10 text-center text-4xl font-bold">World Clock</h1>
			<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{timezones.map(({ label }, index) => (
					<div key={label} className="rounded-xl border border-neutral-700 bg-neutral-800 p-6 text-center shadow-sm">
						<h2 className="text-xl font-semibold">{label}</h2>
						<p className="mt-2 font-mono text-2xl tabular-nums">{times[index]}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TimeZonesPage;
