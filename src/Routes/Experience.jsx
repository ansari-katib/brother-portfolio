import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Import images (if storing in src/assets)
import dgEnterpriseImg from '../assets/Mr-Mubasshir-images-2.jpg';
import seventhHeavenImg from '../assets/Mr-Mubasshir-images-1.jpg';
import celejorImg from '../assets/Mr-Mubasshir-images-3.jpg';

const experiences = [
    {
        id: 1,
        title: "Cake and Pastry DCDP - D.G ENTERPRISE, Pune",
        duration: "21.03.2023 - Present",
        description: "Working as a Cake and Pastry DCDP, specializing in creating innovative and high-quality desserts.",
        image: dgEnterpriseImg,
    },
    {
        id: 2,
        title: "Cake and Pastry Commi-I - 7th HEAVEN, Andheri Mumbai",
        duration: "19.08.2021 - 27.02.2023",
        description: "Designed and prepared a variety of cakes and pastries, focusing on presentation and taste.",
        image: seventhHeavenImg,
    },
    {
        id: 3,
        title: "Cake and Pastry Commi-II - MONGINIS, Mumbai",
        duration: "07.04.2019 - 10.06.2021",
        description: "Assisted in daily pastry production, specializing in premium cakes and baked goods.",
        image: null, // No image provided
    },
    {
        id: 4,
        title: "Cake and Pastry Commi-III - CELEJOR, Byculla East Mumbai",
        duration: "05.02.2018 - 13.01.2019",
        description: "Gained hands-on experience in professional baking, pastry decoration, and customer service.",
        image: celejorImg,
    }
];

const Experience = () => {
    return (
        <>
            <Navbar />
            <div className="bg-blue-50 py-10 px-4 md:px-10">
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">My Experience</h1>

                <div className="container mx-auto max-w-5xl">
                    {experiences.map((exp, index) => (
                        <div 
                        key={exp.id} 
                        className={`flex flex-col md:flex-row bg-blue-100 p-6 mb-8 rounded-lg shadow-lg items-center 
                        ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            
                            {/* Image Section - Full width on mobile, Right side on large screens */}
                            {exp.image ? (
                                <div className="md:w-1/2 w-full">
                                    <img src={exp.image} alt={exp.title} className="w-full h-64 md:h-80 object-cover rounded-lg" />
                                </div>
                            ) : (
                                <div className="md:w-1/2 w-full flex items-center justify-center text-gray-500 italic">
                                    No Image Available
                                </div>
                            )}

                            {/* Text Section - Full width on mobile, Left side on large screens */}
                            <div className="md:w-1/2 w-full p-4 md:p-6">
                                <h2 className="text-2xl font-semibold text-blue-700">{exp.title}</h2>
                                <p className="text-gray-600 italic">{exp.duration}</p>
                                <p className="text-gray-700 mt-2">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Experience;
