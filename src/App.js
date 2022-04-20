import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import LatestRelease from "./components/LatestRelease"
import MyFooter from "./components/MyFooter"

function App() {
  return (
    <div className="book-container">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  )
}

export default App
