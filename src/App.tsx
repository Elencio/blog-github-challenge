import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Routes } from './routes'

function App() {
 
  return (
     <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />
         <Routes />
      </div>     
    </ThemeProvider>
  )
}

export default App
