import React from "react";

interface Step1Props {
  network: string;
  handleNetworkChange: (network: string) => void;
  handleNextStep: () => void;
}

const Step1 = ({
  network,
  handleNetworkChange,
  handleNextStep,
}: Step1Props) => {
  const handleNetworkOptionChange = (event) => {
    handleNetworkChange(event.target.value);
  };

  const handleNextButtonClick = () => {
    handleNextStep();
  };

  return (
    <div className="step1">
      <h2 className="text-2xl font-medium">Step 1: Choose a network</h2>
      <div className="form-control">
        <label htmlFor="network" className="label">
          Select a network:
        </label>
        <select
          id="network"
          value={network}
          onChange={handleNetworkOptionChange}
          className="select select-bordered w-full max-w-xs  mt-1"
        >
          <option value="">Select a network</option>
          <option value="mainnet">Mainnet</option>
          <option value="polygon">Polygon</option>
          <option value="goerli">Goerli</option>
        </select>
      </div>
      <button
        onClick={handleNextButtonClick}
        disabled={!network}
        className={`btn ${network ? "btn-primary" : "btn-secondary"} mt-6`}
      >
        Next
      </button>
    </div>
  );

  //   return (
  //     <div className="step1">
  //       <h2>Step 1: Choose a network</h2>
  //       <div className="form-group">
  //         <label htmlFor="network">Select a network:</label>
  //         <select
  //           id="network"
  //           value={network}
  //           onChange={handleNetworkOptionChange}
  //         >
  //           <option value="">Select a network</option>
  //           <option value="mainnet">Mainnet</option>
  //           <option value="polygon">Polygon</option>
  //           <option value="goerli">Goerli</option>
  //         </select>
  //       </div>
  //       <button onClick={handleNextButtonClick} disabled={!network}>
  //         Next
  //       </button>
  //     </div>
  //   );
};

export default Step1;
// This component takes in the network, handleNetworkChange, and handleNextStep props from its parent component. The network prop is the selected network, handleNetworkChange is a callback function that updates the selected network, and handleNextStep is a callback function that moves the user to the next step in the form.

// The component renders a select element for the user to choose a network, and a next button that is disabled until a network is selected. When the next button is clicked, the handleNextStep callback function is called to move the user to the next step in the form. When the user selects a network, the handleNetworkChange callback function is called to update the network state in the parent component.
