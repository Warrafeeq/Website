import React from 'react';
import MemberCard from './MemberCard';

const Section = ({ title, members }) => {
    return (
        <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
};

export default Section;
