import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1>Welcome to Payton R. Cooper’s SOVR.ONE Dashboard</h1>
      <p>This is your centralized dashboard for crypto vault, identity, and AI-powered income streams.</p>

      <section>
        <h2>Crypto Vault</h2>
        <p>Wallet Address: <code>0xYourWalletAddressHere</code></p>
        <p>Balance: <strong>Loading...</strong></p>
      </section>

      <section>
        <h2>Sovereign Identity</h2>
        <p>Status: <strong>Active</strong></p>
        <p>Trust Name: Payton R. Cooper Living Trust</p>
      </section>

      <section>
        <h2>AI Income Streams</h2>
        <ul>
          <li>Daily Blog Posts: Active</li>
          <li>Faceless Video Generator: Enabled</li>
          <li>Gumroad Product Pipeline: Running</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
