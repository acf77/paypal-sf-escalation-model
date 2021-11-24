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

  // states for certificate expiration
  const [engineerNameC, setEngineerNameC] = useState("");
  const [merchantC, setMerchantC] = useState("");
  const [csmNameC, setCsmNameC] = useState("");
  const [merchantIDC, setMerchantIDC] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  return (
    <div id="container">
      <img
        alt="paypal-logo"
        src="https://upload.wikimedia.org/wikipedia/donate/0/02/Paypal-logo-white.svg"
      />
      <h1>Salesforce escalation template</h1>
      <div id="flex-container">
        <div id="flex-left">
          <h1>Default email model</h1>
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
        <div id="flex-right">
          <h1>Certificate expiration model</h1>
          <h3>Engineer's name</h3>
          <input
            value={engineerNameC}
            type="text"
            onChange={(e) => setEngineerNameC(e.target.value)}
          ></input>

          <h3>Merchant's name</h3>
          <input
            value={merchantC}
            type="text"
            onChange={(e) => setMerchantC(e.target.value)}
          ></input>

          <h3>Merchant ID</h3>
          <input
            value={merchantIDC}
            type="number"
            onChange={(e) => setMerchantIDC(e.target.value)}
          ></input>

          <h3>CSM's name</h3>
          <input
            value={csmNameC}
            type="text"
            onChange={(e) => setCsmNameC(e.target.value)}
          ></input>

          <h3>Expiration Date</h3>
          <input
            value={expirationDate}
            type="date"
            onChange={(e) => setExpirationDate(e.target.value)}
          ></input>
        </div>
      </div>
      <div id="result-box">
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
          We recommend you get in touch with the merchant to resolve the
          behavior. Please let us know if you have further questions about it.
        </div>

        <div id="certificateText">
          <span>
            <i>Email subject</i>
          </span>
          <h4>Certificate Expiration for {merchantC} Id: {merchantIDC}</h4>
          <span>
            <i>Email content</i>
          </span>
          <br />
          <br />
          Dear {csmNameC}, hope you’re doing well.
          <br />
          <br />
          This is {engineerNameC} from MTS Global Monitoring Team.
          <br />
          This is a courtesy notification to inform you that the API Certificate
          on your Managed Account <strong>{merchantIDC}</strong> will expire in <strong>{expirationDate}</strong>.
          <br />
          <br />
          We recommend you communicating the merchant that if they are no longer
          using this API certificate for their integration, no further action is
          needed.
          <br />
          <br />
          If they are, they will need to renew and update their platform/servers
          prior to the date mentioned above or their transaction processing will
          stop.
          <br />
          <br />
          <strong>Here is how to do so:</strong>
          <br />
          <br />
          1. Log into your PayPal account;
          <br />
          <br />
          2. Click name/business name in the upper right corner and click
          "Account Settings" from the menu;
          <br />
          <br />
          3. Click "Website Payments" on the left side of the page;
          <br />
          <br />
          4. Click "Update" next to the API acces;
          <br />
          <br />
          5. Under NVP/SOAP API integration (Classic), click "Manage API
          Credentials";
          <br />
          <br />
          6. Click "Renew" (if Renew is not there you will need to remove your
          certificate before requesting a new one instead).
          <br />
          <br />
          Plese let us know if you have any further questions about it.
        </div>
      </div>
    </div>
  );
}

export default App;
