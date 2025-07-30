import React from 'react';
import MemberCard from '../components/MemberCard';
import Section from '../components/Section';

const About = () => {
    const currentStudents = [
        {
            name: "Kaneez Fatma",
            title: "PhD Scholar",
            description: "Working on Interconnect Networks for CMPs",
            image: "../Pictures/Kaneez.jpg"
        },
        {
            name: "Pooja Yadav",
            title: "PhD Scholar",
            description: "Working on Heterogeneous Computing",
            image: "../Pictures/Pooja.jpg"
        },
        {
            name: "Jagpreet Singh",
            title: "PhD Scholar",
            description: "Working on Energy-Efficient CMPs",
            image: "../Pictures/Jagpreet.jpg"
        },
        {
            name: "Mansi",
            title: "PhD Scholar",
            description: "Working on Microarchitecture",
            image: "../Pictures/Mansi.jpg"
        },
        {
            name: "Amit Kumar",
            title: "PhD Scholar",
            description: "Working on Microarchitecture",
            image: "../Pictures/Amit.jpg"
        },
        {
            name: "Amajot Kaur",
            title: "BTech Project",
            description: "Working on MCP",
            image: "../Pictures/Amajot.webp"
        }
    ];

    const graduatedStudents = [
        {
            name: "Dr. Anil Kumar",
            title: "PhD (2023)",
            description: "Currently at IIT Guwahati",
            image: "../Pictures/Anil.jpg"
        },
        {
            name: "Dr. Ashish Malik",
            title: "PhD (2023)",
            description: "Currently at IIT Mandi",
            image: "../Pictures/Ashish.jpg"
        }
    ];

    const postdocs = [
        // Add postdoc researchers here
    ];
    return (
        <div className="min-h-screen bg-white">
            {/* Profile Section */}
            <div className="bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <img
                            src="../Pictures/Nitin.jpg"
                            alt="Prof. Nitin Auluck"
                            className="w-48 h-48 rounded-full shadow-lg object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                Prof. Dr. Nitin Auluck
                            </h1>
                            <p className="text-xl text-gray-600 mb-2">
                                Professor & Head
                            </p>
                            <p className="text-gray-600 mb-4">
                                Department of Computer Science & Engineering
                                <br />
                                IIT Ropar
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <h2 className="font-semibold text-gray-700 mb-2">Research Areas</h2>
                                <p className="text-gray-600">
                                    Distributed Systems, Scheduling, Edge/Fog/Cloud Computing
                                </p>
                            </div>
                            <div className="text-gray-600">
                                <span className="font-mono bg-gray-100 px-3 py-1 rounded">
                                    nitin AT iitrpr DOT ac DOT in
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Sections */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    Research Team
                </h2>

                <Section 
                    title="Current Students" 
                    members={currentStudents}
                />
                <Section 
                    title="Graduated Students" 
                    members={graduatedStudents}
                />
                <Section 
                    title="Postdoc Researchers" 
                    members={postdocs}
                />
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-600">
                        © 2025 Research Group - Prof. Nitin Auluck | IIT Ropar
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default About;