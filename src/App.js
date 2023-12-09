import { useEffect } from "react";
import LandingPage from "./pages/landingPage";

function App() {

  useEffect(() => {
    const receiveMessage = (event) => {
      const parameter = event.data;

      if (parameter.type === 'webpackWarnings' || parameter.type === 'webpackOk') return

      localStorage.setItem('customerToken', parameter?.token)
      localStorage.setItem('baId', parameter?.id)
    }

    window.addEventListener('message', receiveMessage)

    return () => {
      window.removeEventListener('message', receiveMessage)
    }
  }, [])

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App
