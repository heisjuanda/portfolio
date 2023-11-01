import { RoutesConfiguration } from "./routes/Route";
import PortfolioProvider from "./context/PortfolioContext";

import { addLoader } from "./localStorage/localStorage";

import "./App.css";

function App() {
  addLoader();
  return (
    <PortfolioProvider>
      <RoutesConfiguration />
    </PortfolioProvider>
  );
}

export default App;
