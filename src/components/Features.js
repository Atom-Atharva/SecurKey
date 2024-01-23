import React from "react";

const Features = () => {
    return (
        <div className="font-['Roboto_slab'] mt-16" id="features">
            <h2 className="mx-20 font-['pacifico'] text-6xl underline">
                Features
            </h2>
            <div className="mx-20 flex flex-col gap-16 mt-16">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl mb-12">
                            Secure Password Storage
                        </h2>
                        <p className="text-2xl">
                            Safely store and encrypt passwords in a secure
                            vault, protecting them from unauthorized access.
                        </p>
                    </div>
                    <div className="w-5/12">
                        <img src="./img/feature1.png" alt="featureimg" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <img src="./img/feature2.png" alt="featureimg" />
                    </div>
                    <div className="ml-10">
                        <h2 className="text-4xl mb-12">
                            Multi-Device Synchronization
                        </h2>
                        <p className="text-2xl">
                            Synchronize passwords across various devices,
                            ensuring accessibility and consistency.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl mb-12">Search Functionality</h2>
                        <p className="text-2xl">
                            Implement a robust search feature to quickly locate
                            specific passwords within the vault.
                        </p>
                    </div>
                    <div className="w-5/12">
                        <img src="./img/feature3.png" alt="featureimg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Features;
