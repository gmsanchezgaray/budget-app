import { useState } from "react";
import Balance from "./components/Balance/Balance";
import Form from "./components/Form/Form";
import History from "./components/History/History";

// import "./App.scss";

function App() {
  const [income, setIncome] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <div className="container">
      <Balance total={total} />
      <Form />
      <History />
    </div>
  );
}

export default App;
