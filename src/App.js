import "./App.css";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";
import Header from "./Componennts/Header";
function App() {
  return (
    <MUIThemeProvider>
      <Header />
    </MUIThemeProvider>
  );
}

export default App;
