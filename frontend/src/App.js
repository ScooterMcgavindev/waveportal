import React from "react";
import './App.css';
import Info from "./components/Info";
import Nav from "./components/Nav";
import SendWave from "./components/SendWave";
import Wallet from "./components/Wallet";
import useWallet from "./hooks/useWallet";
function App() {
  const { walletInstalled, walletConnected, connectWallet, loading, writeLoading, totalWaves, wave } = useWallet();
  return (
    <div>
      <Nav />
      <div className="container">
        <Info />
        <Wallet 
          loading={loading} 
          walletInstalled={walletInstalled}
          walletConnected={walletConnected}
          connectWallet={connectWallet}
        />
        <SendWave 
          loading={loading}
          writeLoading={writeLoading}
          totalWaves={totalWaves}
          wave={wave}
        />
      </div>
    </div>
  );
}

export default App;
