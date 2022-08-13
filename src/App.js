import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [reqBody, setReqBody] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [resp, setResp] = useState("");
  const [showData, setShowData] = useState(false);

  const onClickButton = () => {
    setShowData(!showData);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangeInput = (e) => {
    setReqBody(e.target.value);
  };

  useEffect(() => {
    let url =
      id === ""
        ? "https://gorest.co.in/public-api/users/1"
        : "https://gorest.co.in/public-api/users/" + id;
    let options = {
      method: "PUT",
      body: reqBody,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 0ed8e719e04c5b8ec4016027c07b80924195b01402c1f490fbd92723ef322ba2",
      },
    };
    fetch(url, options)
      .then(function (response) {
        setStatusCode(response.status);
        return response.text();
      })
      .then(function (Data) {
        console.log(Data);
        setResp(Data);
      });
  }, [showData]);

  const url1 = " https://gorest.co.in/public-api/users";
  return (
    <div className="p-3 bg-container">
      <h1 className="heading mb-4">Put method practice</h1>
      <p className="request-url-text">
        REQUEST URL : <span className="request-url">{url1}</span>
      </p>
      <input
        id="userInput"
        placeholder="Enter id"
        className="w-25 p-1 user-input"
        onChange={onChangeId}
      />
      <textarea
        id="requestBody"
        placeholder="Enter Request Body"
        rows="5"
        cols="50"
        className="mt-3 p-2 request-body"
        onChange={onChangeInput}
      ></textarea>
      <button
        id="sendPutRequestBtn"
        className="mt-3 p-2 button"
        onClick={onClickButton}
      >
        Send Put Request
      </button>
      <hr />
      <div className="request-status-container p-2 mt-2">
        <p className="para1">Request Status</p>
        <p id="requestStatus" className="request-status">
          {showData && statusCode}
        </p>
      </div>
      <hr />
      <div className="response-body-container p-2 mt-2">
        <p className="para1">Response Body</p>
        <p id="httpResponse" className="http-response">
          {showData && resp}
        </p>
      </div>
    </div>
  );
}

export default App;
