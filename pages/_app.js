import '../styles/globals.css'
import "bulma/css/bulma.css"
import Nav from "../components/Nav"
import Container from '../components/context/Container'
function App({Component, pageProps}) {
  
  return (
  <Container> 
          <div className="container">
            <Nav/>
            <br />
            <br />
          <Component {...pageProps} /> 

          </div>
  </Container>)
}

export default App
