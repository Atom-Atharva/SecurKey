import React from "react";

const Features = () => {
  return (
    <div className="font-['Roboto_slab']" id="features">
      <h2 className="mx-60 font-['pacifico'] text-5xl underline">Features</h2>
      <div className="mx-60 flex flex-col gap-16 mt-16">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl mb-12">Secure Password Storage</h2>
            <p className="text-xl">
              Safely store and encrypt passwords in a secure
            </p>
            <p className="text-xl">
              vault, protecting them from unauthorized access.
            </p>
          </div>
          <div>
            <img src="./img/feature1.png" alt="featureimg" />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <img src="./img/feature2.png" alt="featureimg" />
          </div>

          <div>
            <h2 className="text-3xl mb-12">Multi-Device Synchronization</h2>
            <p className="text-xl">
              Synchronize passwords across various devices,{" "}
            </p>
            <p className="text-xl">ensuring accessibility and consistency.</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl mb-12">Search Functionality</h2>
            <p className="text-xl">
              Implement a robust search feature to quickly{" "}
            </p>
            <p className="text-xl">
              locate specific passwords within the vault.
            </p>
          </div>
          <div>
            <img src="./img/feature3.png" alt="featureimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
