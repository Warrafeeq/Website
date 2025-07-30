import React from 'react';

const MemberCard = ({ member }) => {
    return (
        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-gray-200"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.title}</p>
            <p className="text-gray-500">{member.description}</p>
        </div>
    );
};

export default MemberCard;
