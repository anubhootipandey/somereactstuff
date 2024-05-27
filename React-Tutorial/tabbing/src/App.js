import React, { useState } from "react";
import "./App.css";


const tabs = [
  { id: 1, title: "Tab 1", content: "Hello! I am under the water. Please save me!" },
  { id: 2, title: "Tab 2", content: "Lorem ipsum lorem ipsum lorem ipsum" },
  { id: 3, title: "Tab 3", content: "Kuch bhi likh do, etna jaruri nahi hai!" },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="tabs-container">
        <h1>React Tabbing</h1>
        <ul className="tabs">
          {tabs.map((tab) => (
            <li key={tab.id}
                className={`tab-item ${activeTab.id === tab.id ? 'active' : ''}`}
                onClick={() => changeTab(tab)}
                style={{backgroundColor: "cadetblue", cursor: "pointer", padding: "10px", fontSize: "1.2rem", fontWeight: "bold", color: "white"}}
              >
                {tab.title}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          <p style={{margin: "50px auto", height: "300px", width: "400px", backgroundColor: "cadetblue", padding: "10px", fontSize: "1.2rem", fontWeight: "bold", color: "white"}}>{activeTab.content}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
