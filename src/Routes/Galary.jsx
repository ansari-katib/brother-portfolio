import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Import images from assets (this works only if images are inside src/assets)
import chocolateCake from '../assets/gallery/chocolate-cake.jpg';
import fondantCake from '../assets/gallery/fondant-cake.jpg';
import fruitTart from '../assets/gallery/fruite-tart.jpg';
import macarons from '../assets/gallery/macrones.jpg';
import threeDCake from '../assets/gallery/3d-cake.jpg';
import pastryDelight from '../assets/gallery/delight-pestry.jpeg';

const galleryImages = [
    { id: 1, src: chocolateCake, alt: 'Chocolate Cake' },
    { id: 2, src: fondantCake, alt: 'Fondant Cake' },
    { id: 3, src: fruitTart, alt: 'Fruit Tart' },
    { id: 4, src: macarons, alt: 'Macarons' },
    { id: 5, src: threeDCake, alt: '3D Cake' },
    { id: 6, src: pastryDelight, alt: 'Pastry Delight' },
];



const Gallery = () => {
    return (
        <>
            <Navbar />
            <div className="bg-blue-50 py-10">
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Gallery</h1>

                {/* Image Grid */}
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover transform transition duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Gallery;
