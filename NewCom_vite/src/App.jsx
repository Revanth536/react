
import './App.css'
import Cards from './Components/Cards'
import ClassCom from './Components/ClassCom'
import Functional from './Components/Function'

function App() {
 

  return (
    <>
      <div style={{ display:"-webkit-flex", gap: "20px" }}>
    {/* <Functional />
      <ClassCom /> */}
        <Cards />
        <Cards />
        <Cards />
        <Cards/>
      </div>
    </>
  )
}

export default App
