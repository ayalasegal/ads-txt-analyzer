import React, { useState } from 'react';
import DomainForm from './components/DomainForm'
import DomainInformation from './components/DomainInformation/DomainInformation';
import './App.css';

function App() {

  const [isInitialized,setIsInitialized]=useState(false)
  const [domain, setDomain] = useState('');
  return (
    <div className="app-container">
      <DomainForm setDomain={setDomain} setIsInitialized={setIsInitialized}/>
      {isInitialized ? <DomainInformation domain={domain} />:""}
    </div>
  );
}

export default App;
