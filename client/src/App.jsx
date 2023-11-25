import React, { useState } from 'react';
import DomainForm from './components/DomainForm'
import DomainInfo from './components/DomainInformation/DomainInfo';
import './App.css';

function App() {

  const [isInitialized,setIsInitialized]=useState(false)
  const [domain, setDomain] = useState('');
  return (
    <div className="app-container">
      <DomainForm setDomain={setDomain} setIsInitialized={setIsInitialized}/>
      {isInitialized ? <DomainInfo domain={domain} />:""}
    </div>
  );
}

export default App;
