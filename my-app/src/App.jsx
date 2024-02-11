import data from './data'
import './App.css'
import Color from './components/Color'
import Search from './components/Search'


function App() {

  return (
    <>
      <Search data={data}/>
      <hr/>
      <Color data={data} color={'white'}/>
      <hr/>

      <Color data={data} color={'black'}/>
    </>
  )
}

export default App
