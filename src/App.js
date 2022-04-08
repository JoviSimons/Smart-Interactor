import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { ethers } from 'ethers';

function App() {
  useEffect(() => {
    checkIfWalletExist()
  })

  const checkIfWalletExist = async () => {
    const { ethereum } = window;

    if(!ethereum){
      console.log("install metamask")
    }
    else{
      console.log("metamask intalled")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts'})

    if(accounts.length !== 0){
      const account = accounts[0]
      console.log("account: ", account)
    }
    else{
      console.log("no accounts found")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
