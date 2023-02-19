import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Review from "./Review";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [network, setNetwork] = useState("");
  const [daoName, setDaoName] = useState("");
  const [ensSubdomain, setEnsSubdomain] = useState("");
  const [description, setDescription] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [initialOwners, setInitialOwners] = useState([
    { address: "", amount: 0 },
  ]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNetworkChange = (network) => {
    setNetwork(network);
  };

  const handleDaoInfoChange = (key, value) => {
    switch (key) {
      case "daoName":
        setDaoName(value);
        break;
      case "ensSubdomain":
        setEnsSubdomain(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "logoFile":
        setLogoFile(value);
        break;
      default:
        break;
    }
  };

  const handleTokenInfoChange = (key, value) => {
    switch (key) {
      case "tokenName":
        setTokenName(value);
        break;
      case "tokenSymbol":
        setTokenSymbol(value);
        break;
      case "initialOwners":
        setInitialOwners(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Submit form data
    setFormSubmitted(true);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 space-y-6 rounded-lg shadow-lg">
      <div className="w-full h-4 bg-purple-600 rounded-t-lg" />
      {currentStep === 1 && (
        <div>
          <h1 className="text-4xl font-bold">Step 1: Network</h1>
          <Step1
            network={network}
            handleNetworkChange={handleNetworkChange}
            handleNextStep={handleNextStep}
          />
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h1 className="text-4xl font-bold">Step 2: DAO Information</h1>
          <Step2
            daoName={daoName}
            ensSubdomain={ensSubdomain}
            description={description}
            logoFile={logoFile}
            handleDaoInfoChange={handleDaoInfoChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h1 className="text-4xl font-bold">Step 3: Token Information</h1>
          <Step3
            tokenName={tokenName}
            tokenSymbol={tokenSymbol}
            initialOwners={initialOwners}
            handleTokenInfoChange={handleTokenInfoChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      )}
      {currentStep === 4 && !formSubmitted && (
        <div>
          <h1 className="text-4xl font-bold">Step 4: Review</h1>
          <Review
            network={network}
            daoName={daoName}
            ensSubdomain={ensSubdomain}
            description={description}
            //   logoFile={logoFile}
            tokenName={tokenName}
            tokenSymbol={tokenSymbol}
            initialOwners={initialOwners}
            handlePrevStep={handlePrevStep}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
      {formSubmitted && (
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-green-500">Success!</h2>
          <p className="text-lg text-gray-700">Your DAO has been created.</p>
          <button
            className="px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
            onClick={() => setFormSubmitted(false)}
          >
            Go to DAO
          </button>
        </div>
      )}
      <div className="relative w-full h-px bg-gray-300">
        <div
          className="absolute top-0 left-0 h-full bg-purple-600"
          style={{ width: `${(currentStep - 1) * 33.3333}%` }}
        />
      </div>
    </div>
  );

  //   return (
  //     <div className="p-6 space-y-6  rounded-lg shadow-lg">
  //       <div className="w-full h-4 bg-purple-600 rounded-t-lg" />
  //       <h1 className="text-4xl font-bold">Create Your DAO</h1>
  //       <div className="relative w-full h-px ">
  //         <div
  //           className="absolute top-0 left-0 h-full bg-purple-600"
  //           style={{ width: `${currentStep * 25}%` }}
  //         />
  //       </div>
  //       {currentStep === 1 && (
  //         <Step1
  //           network={network}
  //           handleNetworkChange={handleNetworkChange}
  //           handleNextStep={handleNextStep}
  //         />
  //       )}
  //       {currentStep === 2 && (
  //         <Step2
  //           daoName={daoName}
  //           ensSubdomain={ensSubdomain}
  //           description={description}
  //           logoFile={logoFile}
  //           handleDaoInfoChange={handleDaoInfoChange}
  //           handleNextStep={handleNextStep}
  //           handlePrevStep={handlePrevStep}
  //         />
  //       )}
  //       {currentStep === 3 && (
  //         <Step3
  //           tokenName={tokenName}
  //           tokenSymbol={tokenSymbol}
  //           initialOwners={initialOwners}
  //           handleTokenInfoChange={handleTokenInfoChange}
  //           handleNextStep={handleNextStep}
  //           handlePrevStep={handlePrevStep}
  //         />
  //       )}
  //       {currentStep === 4 && (
  //         <Review
  //           network={network}
  //           daoName={daoName}
  //           ensSubdomain={ensSubdomain}
  //           description={description}
  //           //   logoFile={logoFile}
  //           tokenName={tokenName}
  //           tokenSymbol={tokenSymbol}
  //           initialOwners={initialOwners}
  //           handlePrevStep={handlePrevStep}
  //           handleSubmit={handleSubmit}
  //         />
  //       )}
  //       {formSubmitted && (
  //         <div className="flex flex-col items-center space-y-4">
  //           <h2 className="text-2xl font-bold text-green-500">Success!</h2>
  //           <p className="text-lg text-gray-700">Your DAO has been created.</p>
  //           <button
  //             className="px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
  //             onClick={() => setFormSubmitted(false)}
  //           >
  //             Go to DAO
  //           </button>
  //         </div>
  //       )}
  //     </div>
  //   );
};

export default MultiStepForm;
