import React, { useState } from "react";

interface Step3Props {
  tokenName: string;
  tokenSymbol: string;
  initialOwners: { address: string; amount: number }[];
  handleTokenInfoChange: (
    fieldName: string,
    value: string | number,
    index?: number
  ) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Step3: React.FC<Step3Props> = ({
  tokenName,
  tokenSymbol,
  initialOwners,
  handleTokenInfoChange,
  handlePrevStep,
  handleNextStep,
}) => {
  const [owners, setOwners] = useState(initialOwners);

  const handleAddOwner = () => {
    setOwners([...owners, { address: "", amount: 0 }]);
  };

  const handleRemoveOwner = (index: number) => {
    const newOwners = [...owners];
    newOwners.splice(index, 1);
    setOwners(newOwners);
    handleTokenInfoChange("initialOwners", newOwners);
  };

  const handleOwnerChange = (
    key: string,
    value: string | number,
    index: number
  ) => {
    const newOwners = [...owners];
    newOwners[index][key] = value;
    setOwners(newOwners);
    handleTokenInfoChange("initialOwners", newOwners);
  };

  return (
    <div className="p-4">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Token Name
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-primary-500"
            value={tokenName}
            onChange={(e) => handleTokenInfoChange("tokenName", e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Token Symbol
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-primary-500"
            value={tokenSymbol}
            onChange={(e) =>
              handleTokenInfoChange("tokenSymbol", e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Initial Owners
          </label>
          {initialOwners.map((owner, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="text"
                className="border-2 border-gray-400 rounded-lg py-2 px-4 w-2/3 focus:outline-none focus:border-primary-500"
                placeholder="Address"
                value={owner.address}
                onChange={(e) =>
                  handleOwnerChange("address", e.target.value, index)
                }
              />
              <input
                type="number"
                className="border-2 border-gray-400 rounded-lg py-2 px-4 ml-4 w-1/3 focus:outline-none focus:border-primary-500"
                placeholder="Amount"
                value={owner.amount}
                onChange={(e) =>
                  handleOwnerChange("amount", Number(e.target.value), index)
                }
              />

              <button
                type="button"
                className="ml-4 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleRemoveOwner(index)}
                disabled={initialOwners.length === 1}
              >
                -
              </button>

              <button
                type="button"
                className="ml-4 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddOwner}
              >
                +
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePrevStep}
          >
            Back
          </button>
          <button
            type="button"
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
