import Demo from './Demo'
import StateExample from './StateExample'
import FuncProps from './FuncProps'
import Event from './Event'
function App(){
  return(
      <div>
      <Event/>
      <Demo price="1st price"/>
      <StateExample/>
      <FuncProps carname="thar" year="2017"/>
        <h1>Hello</h1>
        {/*<Demo subject="ReactJS" year="2008"/>
        <Demo subject="Angular" year="2013"/>
        <Demo subject="Vue" year="2017"/>
      */}
      </div>
    )
}
export default App