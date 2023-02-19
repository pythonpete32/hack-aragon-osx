import React from "react";

interface ReviewProps {
  network: string;
  daoName: string;
  ensSubdomain: string;
  description: string;
  tokenName: string;
  tokenSymbol: string;
  initialOwners: { address: string; amount: number }[];
  handlePrevStep: () => void;
  handleSubmit: () => void;
}

const Review: React.FC<ReviewProps> = ({
  network,
  daoName,
  ensSubdomain,
  description,
  tokenName,
  tokenSymbol,
  initialOwners,
  handlePrevStep,
  handleSubmit,
}) => {
  console.log({
    network,
    daoName,
    ensSubdomain,
    description,
    tokenName,
    tokenSymbol,
    initialOwners,
  });
  return (
    <>
      <div className="mb-4">
        <p className="text-lg font-semibold">Network:</p>
        <p>{network}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">DAO Name:</p>
        <p>{daoName}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">ENS Subdomain:</p>
        <p>{ensSubdomain}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Description:</p>
        <p>{description}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Token Name:</p>
        <p>{tokenName}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Token Symbol:</p>
        <p>{tokenSymbol}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Initial Owners:</p>
        <ul>
          {initialOwners.map((owner, index) => (
            <li key={index} className="mb-2">
              <p className="text-sm">
                Address: <span className="font-medium">{owner.address}</span>
              </p>
              <p className="text-sm">
                Amount: <span className="font-medium">{owner.amount}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="btn btn-primary mr-4"
          onClick={handlePrevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );

  // return (
  //   <div>
  //     <h1>Review</h1>
  //     <p>Network: {network}</p>
  //     <p>DAO Name: {daoName}</p>
  //     <p>ENS Subdomain: {ensSubdomain}</p>
  //     <p>Description: {description}</p>
  //     <p>Token Name: {tokenName}</p>
  //     <p>Token Symbol: {tokenSymbol}</p>
  //     <p>Initial Owners:</p>
  //     <ul>
  //       {initialOwners.map((owner, index) => (
  //         <li key={index}>
  //           Address: {owner.address}, Amount: {owner.amount}
  //         </li>
  //       ))}
  //     </ul>
  //     <button type="button" onClick={handlePrevStep}>
  //       Back
  //     </button>
  //     <button type="button" onClick={handleSubmit}>
  //       Submit
  //     </button>
  //   </div>
  // );
};

export default Review;
