
import './App.css'
import Counterr from './Counterr';
import Team from './Team';

import Users from './Users';


function App() {
  function handleClick(){
    alert('Click this button');
  }
  const handleClick2 = ()=>{
    alert('Click this button 2 ');
  }
  const addFive = (count)=>{
    alert(count+5);
  }
  return (
    <>
   
      <h1> React core concepts 2</h1>
    
      <Users></Users>
      <Counterr></Counterr>
      <Team></Team>


      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it 2</button>
      <button onClick={()=>{alert('this is third button')}}>third button</button>
      <button onClick={()=>addFive(8)}>fourth</button>
    </>
  )
}

export default App
