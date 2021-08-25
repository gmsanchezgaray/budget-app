import { useState } from "react";
import Balance from "./components/Balance";
import Form from "./components/Form";
import History from "./components/History";

import "./App.scss";

function App() {
  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  return (
    <div className="container">
      <Balance />
      <History />
      <Form showForm={showForm} />
      <button onClick={() => setShowForm(!showForm)} className="btn btn__float">
        ➕
      </button>
    </div>
  );
}

export default App;
