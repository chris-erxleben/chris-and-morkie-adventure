import '../styles/globals.css'
import Nav from '../shared/components/Nav'
import Footer from '../shared/components/Footer'

const App = ({ Component, pageProps }) => (
  <div className="bg-slate-50">
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </div>
)

export default App
