import '../styles/globals.css'
import Navbar from '../comps/navbar'
import {AuthContextProvider} from '../stores/authContext'

function App({Component, pageProps}) {
 
    return (
    <AuthContextProvider>
      <Navbar  />
      <Component {...pageProps} />
      </AuthContextProvider>
    )
  }

export default App
