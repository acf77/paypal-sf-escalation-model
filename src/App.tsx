import React, { useState } from "react";

import "./App.css";

function App() {
  const [engineerName, setEngineerName] = useState("");
  const [alertID, setAlertID] = useState("");
  const [merchant, setMerchant] = useState("");
  const [merchantID, setMerchantID] = useState("");
  const [csmName, setCsmName] = useState("");
  const [issue, setIssue] = useState("");
  const [impact, setImpact] = useState("");
  const [resolution, setResolution] = useState("");

  return (
    <div id="container">
      <img alt="paypal-logo" src="https://upload.wikimedia.org/wikipedia/donate/0/02/Paypal-logo-white.svg" />
      <h1>Salesforce escalation template</h1>
      <div id="flex-container">
        <div id="flex-left">
          <h3>Engineer's name</h3>
          <input
            value={engineerName}
            type="text"
            onChange={(e) => setEngineerName(e.target.value)}
          ></input>

          <h3>Alert ID</h3>
          <input
            value={alertID}
            type="number"
            onChange={(e) => setAlertID(e.target.value)}
          ></input>

          <h3>Merchant's name</h3>
          <input
            value={merchant}
            type="text"
            onChange={(e) => setMerchant(e.target.value)}
          ></input>

          <h3>Merchant ID</h3>
          <input
            value={merchantID}
            type="number"
            onChange={(e) => setMerchantID(e.target.value)}
          ></input>
        </div>
        <div id="flex-right">
          <h3>CSM's name</h3>
          <input
            value={csmName}
            type="text"
            onChange={(e) => setCsmName(e.target.value)}
          ></input>

          <h3>Issue description</h3>
          <input
            value={issue}
            type="text"
            onChange={(e) => setIssue(e.target.value)}
          ></input>

          <h3>Impact</h3>
          <input
            value={impact}
            type="text"
            onChange={(e) => setImpact(e.target.value)}
          ></input>

          <h3>How to resolve it</h3>
          <input
            value={resolution}
            type="text"
            onChange={(e) => setResolution(e.target.value)}
          ></input>
        </div>
      </div>

      <div id="sfText">
        <span>
          <i>Email subject</i>
        </span>
        <h4>
          MTS Monitoring for alert ID {alertID} for Merchant {merchant}
        </h4>
        <span>
          <i>Email content</i>
        </span>
        <br />
        <br />
        Dear {csmName}, hope you’re doing well.
        <br />
        <br />
        This is {engineerName} from MTS Global Monitoring Team. It has come to
        our attention that one of your merchants have being processing with an
        unexpected behavior, please review the information below.
        <br />
        <br />
        <strong>Merchant Account Number:</strong> {merchantID}
        <br />
        <strong>Merchant name:</strong> {merchant}
        <br />
        <br />
        Please see the details below:
        <br />
        <br />
        <strong>Issue description:</strong> {issue}
        <br />
        <br />
        <strong>Impact:</strong> {impact} <br />
        <br />
        <strong>How to resolve it:</strong> {resolution}
        <br />
        <br />
        We recommend you get in touch with the merchant to resolve the behavior.
        Please let us know if you have further questions about it.
      </div>
    </div>
  );
}

export default App;
