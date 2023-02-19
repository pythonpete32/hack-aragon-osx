import React from "react";

interface Step2Props {
  daoName: string;
  ensSubdomain: string;
  description: string;
  logoFile: File | null;
  handleDaoInfoChange: (fieldName: string, value: string | File) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({
  daoName,
  ensSubdomain,
  description,
  logoFile,
  handleDaoInfoChange,
  handleNextStep,
  handlePrevStep,
}) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    handleDaoInfoChange(name, value);
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files.length > 0) {
      handleDaoInfoChange(name, files[0]);
    }
  };

  const handleNextButtonClick = () => {
    handleNextStep();
  };

  const handlePrevButtonClick = () => {
    handlePrevStep();
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <label htmlFor="daoName" className="text-lg mb-2">
          DAO Name:
        </label>
        <input
          id="daoName"
          name="daoName"
          type="text"
          value={daoName}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg w-full px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ensSubdomain" className="text-lg mb-2">
          ENS Subdomain:
        </label>
        <input
          id="ensSubdomain"
          name="ensSubdomain"
          type="text"
          value={ensSubdomain}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg w-full px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="text-lg mb-2">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg w-full px-3 py-2"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="logoFile" className="text-lg mb-2">
          Logo:
        </label>
        <input
          id="logoFile"
          name="logoFile"
          type="file"
          onChange={handleLogoChange}
          className="hidden"
        />
        <div className="relative">
          <label
            htmlFor="logoFile"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Choose File
          </label>
          <span className="ml-3">
            {logoFile ? logoFile.name : "No file chosen"}
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrevStep}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-4"
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={!daoName || !ensSubdomain}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );

  //   return (
  //     <div className="step2">
  //       <h2>Step 2: DAO Information</h2>
  //       <div className="form-group">
  //         <label htmlFor="daoName">DAO Name:</label>
  //         <input
  //           id="daoName"
  //           name="daoName"
  //           type="text"
  //           value={daoName}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="ensSubdomain">ENS Subdomain:</label>
  //         <input
  //           id="ensSubdomain"
  //           name="ensSubdomain"
  //           type="text"
  //           value={ensSubdomain}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="description">Description:</label>
  //         <textarea
  //           id="description"
  //           name="description"
  //           value={description}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="logoFile">Logo:</label>
  //         <input
  //           id="logoFile"
  //           name="logoFile"
  //           type="file"
  //           onChange={handleLogoChange}
  //         />
  //       </div>
  //       <div className="button-container">
  //         <button onClick={handlePrevButtonClick}>Previous</button>
  //         <button
  //           onClick={handleNextButtonClick}
  //           disabled={!daoName || !ensSubdomain}
  //         >
  //           Next
  //         </button>
  //       </div>
  //     </div>
  //   );
};

export default Step2;
