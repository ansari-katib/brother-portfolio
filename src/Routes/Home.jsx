import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import chefImage from '../assets/mubbu.jpg'; // Import your image

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section - Image & Introduction */}
            <div className="bg-blue-100 text-center py-16 px-6 flex flex-col md:flex-row items-center justify-center">

                {/* Image */}
                <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
                    <img
                        src={chefImage}
                        alt="Pastry Chef Mubasshir Ansari"
                        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto shadow-lg rounded-lg"
                    />
                </div>

                {/* Introduction */}
                <div className="md:w-1/2 text-center md:text-left px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">
                        Mubasshir Ansari
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mt-2">
                        Passionate Pastry Chef | Dessert Artist 🍰
                    </p>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto md:mx-0">
                        I am a professional <b>Pastry Chef </b> with over <b>5 years of experience</b> in crafting exquisite desserts.
                        My passion lies in designing visually stunning and mouthwatering pastries, cakes, and confections
                        that bring joy to every occasion.
                    </p>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto md:mx-0">
                        I specialize in <b>custom-designed 3D cakes, fondant cakes, wedding cakes, and gourmet pastries.
                            From elegant floral cakes to playful character-themed cakes </b>, I bring imagination to life with
                        intricate detailing and handcrafted edible art.
                    </p>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto md:mx-0">
                        My expertise extends to <b>macarons , mousse cakes, artisanal chocolates,</b> and a variety of
                        desserts, each made with precision and the finest ingredients. Whether it’s a luxury wedding,
                        a birthday, or a themed celebration, I ensure every creation is unique, delicious, and memorable.
                    </p>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto md:mx-0">
                        Passionate about <b>innovation in pastry art</b>, I take pride in blending traditional techniques
                        with modern designs. Every dessert I craft tells a story, making celebrations even more special.
                    </p>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Home;
