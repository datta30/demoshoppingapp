import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Header from './Header';
import PlantCard from './PlantCard';

const ProductListingPage = () => {
    const { plants } = useContext(AppContext);
    
    // Group plants by category
    const plantsByCategory = plants.reduce((acc, plant) => {
        if (!acc[plant.category]) {
            acc[plant.category] = [];
        }
        acc[plant.category].push(plant);
        return acc;
    }, {});
    
    return (
        <div>
            <Header />
            <div className="container my-5">
                <h1 className="text-center mb-5">Our Plants Collection</h1>
                
                {Object.entries(plantsByCategory).map(([category, plants]) => (
                    <div key={category} className="mb-5">
                        <h2 className="mb-4 category-title">{category} Plants</h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {plants.map(plant => (
                                <div key={plant.id} className="col">
                                    <PlantCard plant={plant} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
