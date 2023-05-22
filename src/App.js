import React, { useState } from "react";
import "./App.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Character";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COPY_Fail, COPY_SUCCESS } from "./message";
import Main from "./components/Main";
import PasswordLength from "./components/PasswordLength";
import IncludeUpperCase from "./components/IncludeUpperCase";
import IncludeLowerCase from "./components/IncludeLowerCase";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("To generate password you must select atleast one checkbox", true);
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      notify("Password is generated successfully", false);
    }
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleCopyPassword = (e) => {
    if (password === "") {
      notify(COPY_Fail, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };

  const changeLengthHandler = (value) => setPasswordLength(value);
  const includeUpperCaseHandler = (value) => setIncludeUpperCase(value);
  const includeLowerCaseHandler = (value) => setIncludeLowerCase(value);
  const includeNumbersHandler = (value) => setIncludeNumbers(value);
  const includeSymbolsHandler = (value) => setIncludeSymbols(value);

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <Main passwordValue={password} handleClick={handleCopyPassword} />
          {/* <h2 className="generator__header">Password Generator</h2>
          <div className="generator__password">
            <h3>{password}</h3>
            <button className="copy__btn">
              <i onClick={handleCopyPassword} className="far fa-clipboard"></i>
            </button>
          </div> */}
          <PasswordLength
            length={passwordLength}
            handleLength={changeLengthHandler}
          />
          <IncludeUpperCase
            includes={includeUpperCase}
            handleCheck={includeUpperCaseHandler}
          />
          <IncludeLowerCase
            includes={includeLowerCase}
            handleCheck={includeLowerCaseHandler}
          />
          <IncludeNumbers
            includes={includeNumbers}
            handleCheck={includeNumbersHandler}
          />
          <IncludeSymbols
            includes={includeSymbols}
            handleCheck={includeSymbolsHandler}
          />
          <button onClick={handleGeneratePassword} className="generator__btn">
            Generate Password
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default App;
