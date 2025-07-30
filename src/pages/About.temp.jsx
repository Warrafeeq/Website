import React from 'react';

// Define all students data
const students = [
    {
        name: 'Pooja Bhardwaj (PhD)',
        photo: '/Pictures/Pooja.jpg',
        research: 'Edge-ML in Vehicular Networks',
        researchImg: '/Pictures/ai-vehicular-ml.jpg',
        type: 'current',
    },
    {
        name: 'Amit Sharma (PhD)',
        photo: '/Pictures/Amit.jpg',
        research: 'Real-Time Scheduling in Edge Computing',
        researchImg: '/Pictures/ai-edge-scheduling.jpg',
        type: 'current',
    },
    {
        name: 'Muhammed Rafeeq War (PhD)',
        photo: '/Pictures/Rafeeq.jpg',
        research: 'Edge computing and agriculture',
        researchImg: '/Pictures/ai-edge-agriculture.jpg',
        type: 'current',
    },
    {
        name: 'Jagpreet Singh (PhD, 2015)',
        photo: '/Pictures/Jagpreet.jpg',
        research: 'Assistant Professor, IIT Ropar | Swiss Gov. Fellow, ETH Zurich',
        researchImg: '/Pictures/ai-professor.jpg',
        type: 'graduated',
    },
    {
        name: 'Kaneez Fizza (MS, 2019)',
        photo: '/Pictures/Kaneez.jpg',
        research: 'Postdoctoral Fellow, Swinburne University, Australia',
        researchImg: '/Pictures/ai-postdoc.jpg',
        type: 'graduated',
    },
    {
        name: 'Anil Singh (PhD, 2021)',
        photo: '/Pictures/Anil.jpg',
        research: 'Post Doc, Umea University, Sweden | Assistant Professor, Thapar University',
        researchImg: '/Pictures/ai-postdoc.jpg',
        type: 'graduated',
    },
    {
        name: 'Amanjot Kaur (PhD, 2023)',
        photo: '/Pictures/Amajot.webp',
        research: 'Assistant Professor, BITS Pilani Dubai | Post Doc, Cardiff University, UK',
        researchImg: '/Pictures/ai-professor.jpg',
        type: 'graduated',
    },
    {
        name: 'Mansi Sahi (PhD, 2024)',
        photo: '/Pictures/Mansi.jpg',
        research: 'AI Trainer, FITT program, IIT Delhi',
        researchImg: '/Pictures/ai-ai-trainer.jpg',
        type: 'graduated',
    },
    {
        name: 'Dr. Tarunpreet Kaur (2021 - 2023)',
        photo: '/Pictures/Tarunpreet.jpg',
        research: 'Edge-ML in healthcare',
        researchImg: '/Pictures/ai-healthcare.jpg',
        type: 'postdoc',
    },
];

// Member card component
const MemberCard = ({ member }) => (
    <div className="group relative overflow-hidden rounded-lg bg-gray-900 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="aspect-w-16 aspect-h-9">
            <img 
                src={member.researchImg} 
                alt={member.research}
                className="absolute inset-0 h-48 w-full object-cover opacity-60"
            />
            <img
                src={member.photo}
                alt={member.name}
                className="absolute top-4 left-4 h-20 w-20 rounded-full border-2 border-red-600 object-cover shadow-lg"
            />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-20 rounded-full p-3 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <div className="p-4">
            <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                {member.name}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-3">
                {member.research}
            </p>
        </div>
    </div>
);

// Section component
const Section = ({ title, members, color = "red" }) => (
    <div className="mb-16">
        <h3 className={`text-2xl font-bold text-${color}-500 mb-8 uppercase tracking-wider`}>
            {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, idx) => (
                <MemberCard key={idx} member={member} />
            ))}
        </div>
    </div>
);

// Main component
export default function About() {
    const currentStudents = students.filter(s => s.type === 'current');
    const graduatedStudents = students.filter(s => s.type === 'graduated');
    const postdocs = students.filter(s => s.type === 'postdoc');

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Main Hero Section */}
            <div className="relative h-96 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-black opacity-50" />
                <div className="absolute inset-0">
                    <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-70" />
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <div className="mb-6">
                        <img
                            src="/Pictures/Nitin.jpg"
                            alt="Prof. Nitin Auluck"
                            className="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-red-600 object-cover"
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
                        Prof. Dr. Nitin Auluck
                    </h1>
                    <p className="text-lg text-gray-300 mb-2">
                        Professor & Head, Department of Computer Science & Engineering
                    </p>
                    <p className="text-md text-gray-400 mb-4">
                        IIT Ropar
                    </p>
                    <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 mb-4">
                        <h2 className="text-red-400 font-semibold mb-2">Research Areas</h2>
                        <p className="text-gray-300 text-sm">
                            Distributed Systems, Scheduling, Edge/Fog/Cloud Computing
                        </p>
                    </div>
                    <div className="text-gray-400 text-sm">
                        <span className="font-mono bg-gray-800 px-3 py-1 rounded">
                            nitin AT iitrpr DOT ac DOT in
                        </span>
                    </div>
                </div>
            </div>

            {/* Research Group Tree */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-red-500 mb-4">Research Group Tree</h2>
                    <p className="text-gray-400 mb-8">Under the guidance of Prof. Dr. Nitin Auluck</p>
                    <div className="relative">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{height: '200px'}}>
                            <line x1="50%" y1="0" x2="50%" y2="100" stroke="#dc2626" strokeWidth="3" />
                            <line x1="50%" y1="100" x2="25%" y2="150" stroke="#dc2626" strokeWidth="2" />
                            <line x1="50%" y1="100" x2="50%" y2="150" stroke="#dc2626" strokeWidth="2" />
                            <line x1="50%" y1="100" x2="75%" y2="150" stroke="#dc2626" strokeWidth="2" />
                            <text x="25%" y="170" textAnchor="middle" fill="#dc2626" className="text-sm font-semibold">Current</text>
                            <text x="50%" y="170" textAnchor="middle" fill="#dc2626" className="text-sm font-semibold">Graduated</text>
                            <text x="75%" y="170" textAnchor="middle" fill="#dc2626" className="text-sm font-semibold">Postdoc</text>
                        </svg>
                    </div>
                </div>

                <Section 
                    title="Current Students" 
                    members={currentStudents} 
                    color="green" 
                />
                <Section 
                    title="Graduated Students" 
                    members={graduatedStudents} 
                    color="blue" 
                />
                <Section 
                    title="Postdoc Researchers" 
                    members={postdocs} 
                    color="purple" 
                />
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">
                        © 2025 Research Group - Prof. Nitin Auluck | IIT Ropar
                    </p>
                </div>
            </footer>
        </div>
    );
}
