import React from 'react';
import { pi } from '../data/members';

const members = [
	{
		name: 'Pooja Bhardwaj',
		photo: '/Pictures/Pooja.jpg',
		role: 'PhD Student',
		bio: 'Edge-ML in Vehicular Networks',
		links: [
			{
				label: 'LinkedIn',
				url: 'https://in.linkedin.com/in/pooja-bhardwaj-2202',
			},
		],
	},
	{
		name: 'Amit Sharma',
		photo: '/Pictures/Amit.jpg',
		role: 'PhD Student',
		bio: 'Real-Time Scheduling in Edge Computing',
		links: [
			{
				label: 'Google Scholar 1',
				url: 'https://scholar.google.co.in/citations?user=2P9UeLwAAAAJ&hl=en',
			},
			{
				label: 'Google Scholar 2',
				url: 'https://scholar.google.co.in/citations?user=CXgQufgAAAAJ&hl=en',
			},
		],
	},
	{
		name: 'Muhammed Rafeeq War',
		photo: '/Pictures/Rafeeq.jpg',
		role: 'PhD Student',
		bio: 'Edge computing and agriculture',
		links: [
			{
				label: 'Google Scholar',
				url: 'https://scholar.google.com/citations?user=ypzZCO0AAAAJ&hl=en',
			},
		],
	},
	{
		name: 'Jagpreet Singh',
		photo: '/Pictures/Jagpreet.jpg',
		role: 'PhD, 2015',
		bio: 'Assistant Professor, IIT Ropar | Swiss Gov. Fellow, ETH Zurich',
		links: [
			{
				label: 'Google Scholar',
				url: 'https://scholar.google.com/citations?user=aqJbfsoAAAAJ&hl=en',
			},
			{
				label: 'LinkedIn',
				url: 'https://in.linkedin.com/in/jagpreet-singh-04121189',
			},
		],
	},
	{
		name: 'Kaneez Fizza',
		photo: '/Pictures/Kaneez.jpg',
		role: 'MS, 2019',
		bio: 'Postdoctoral Fellow, Swinburne University, Australia',
		links: [
			{
				label: 'Google Scholar',
				url: 'https://scholar.google.com/citations?user=2WY7aoQAAAAJ&hl=en',
			},
		],
	},
	{
		name: 'Anil Singh',
		photo: '/Pictures/Anil.jpg',
		role: 'PhD, 2021',
		bio: 'Post Doc, Umea University, Sweden | Assistant Professor, Thapar University',
		links: [
			{
				label: 'Google Scholar',
				url: 'https://scholar.google.co.in/citations?user=wAR3mAwAAAAJ&hl=en',
			},
			{
				label: 'LinkedIn',
				url: 'https://in.linkedin.com/in/anil-singh-rawat',
			},
		],
	},
	{
		name: 'Amanjot Kaur',
		photo: '/Pictures/Amajot.webp',
		role: 'PhD, 2023',
		bio: 'Assistant Professor, BITS Pilani Dubai | Post Doc, Cardiff University, UK',
		links: [
			{
				label: 'Google Scholar',
				url: 'https://scholar.google.com/citations?user=3rej8xAAAAAJ&hl=en',
			},
			{
				label: 'LinkedIn',
				url: 'https://ca.linkedin.com/in/amanjot-kaur-batth',
			},
		],
	},
	{
		name: 'Mansi Sahi',
		photo: '/Pictures/Mansi.jpg',
		role: 'PhD, 2024',
		bio: 'AI Trainer, FITT program, IIT Delhi',
		links: [
			{
				label: 'Google Scholar',
				url: 'https://scholar.google.com/citations?user=1cFfsuEAAAAJ&hl=en',
			},
			{
				label: 'LinkedIn',
				url: 'https://in.linkedin.com/in/mansi-sahi-9001a2206',
			},
		],
	},
	{
		name: 'Ashish Kumar Kaushal',
		photo: '/Pictures/Ashish.jpg',
		role: 'PhD, 2024',
		bio: 'Post Doc, Tyndall National Institute, Ireland',
		links: [
			{
				label: 'Google Scholar 1',
				url: 'https://scholar.google.co.in/citations?user=1ViQG4YAAAAJ&hl=en',
			},
			{
				label: 'Google Scholar 2',
				url: 'https://scholar.google.co.in/citations?user=tFDfKn0AAAAJ&hl=en',
			},
		],
	},
];

export default function Members() {
	return (
		<section className="relative max-w-6xl mx-auto py-16 px-4 bg-gradient-to-br from-blue-50 via-teal-100 to-indigo-100 min-h-screen overflow-hidden">
			<h2 className="text-4xl font-extrabold mb-8 text-blue-900 drop-shadow-lg text-center">
				Nitin Sir & Members
			</h2>
			<div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
			<div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200 rounded-full blur-2xl opacity-30"></div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
				<div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300">
					<img
						src={pi.photo}
						alt={pi.name}
						className="w-28 h-28 rounded-full mb-4 shadow-lg"
					/>
					<h3 className="font-bold text-xl text-blue-700 mb-2">{pi.name}</h3>
					<p className="text-sm mb-2 text-teal-700">Principal Investigator</p>
					<p className="text-xs text-gray-600 mb-2">{pi.bio}</p>
					<a
						href={pi.website}
						className="text-blue-600 font-semibold"
						target="_blank"
						rel="noopener noreferrer"
					>
						Website
					</a>
					<a href={`mailto:${pi.email}`} className="text-blue-600">
						{pi.email}
					</a>
				</div>
				{members.map((m, i) => (
					<div
						key={i}
						className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
					>
						<img
							src={m.photo}
							alt={m.name}
							className="w-28 h-28 rounded-full mb-4 shadow-lg"
						/>
						<h3 className="font-bold text-xl text-blue-700 mb-2">{m.name}</h3>
						<p className="text-sm mb-2 text-teal-700">{m.role}</p>
						<p className="text-xs text-gray-600 mb-2">{m.bio}</p>
						<div className="flex gap-3 mt-2">
							{m.links.map((link, idx) => (
								<a
									key={idx}
									href={link.url}
									className="text-blue-600 font-semibold"
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
			<style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
		</section>
	);
}
