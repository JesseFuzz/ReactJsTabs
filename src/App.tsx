import './App.css'
import Tabs, { TabItems } from './components/Tab'

function App() {

 var items: TabItems[] = [
  {label: 'tab 1', content: <div>this is our tab 1</div>},
  {label: 'tab 2', content: <div>this is our tab 2</div>},
  {label: 'tab 3', content: <div>this is our tab 3</div>}
 ]

  return (
    <div style={{height: '100%', width: '100%'}}>
      <Tabs items={items} ></Tabs>
    </div>
  )
}

export default App
