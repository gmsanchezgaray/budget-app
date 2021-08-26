import Balance from "./components/Balance/Balance";
import Form from "./components/Form/Form";
import History from "./components/History/History";
import ContextProvider from "./global-context/Context";
import "./App.scss";

function App() {
  return (
    <div>
      <ContextProvider>
        <Balance />
        <Form />
        <History />
      </ContextProvider>
    </div>
  );
}

export default App;
