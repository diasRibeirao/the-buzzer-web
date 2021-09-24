import { GlobalStyles } from "./GlobalStyles";
import Router from "./routes";

function App() {
  const signOut = true;
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
