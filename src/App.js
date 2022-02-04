import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';

function App() {
  const [input,setInput] = useState("");
  const [result,setResult] = useState("");
const changeHandler =(e)=>{
  setInput(e.target.value)
}
const submitHandler =(e)=>{
  setResult(eval(input))
  
}
  return (
    <div className="App">
    <input type="text" name='text' value={input} onChange={changeHandler}/><br/>
    <button onClick={submitHandler}>result</button>
    <h1>{result}</h1>
     <button onClick={()=>setInput(input+'1')}>1</button>
     <button onClick={()=>setInput(input+'2')}>2</button>
     <button onClick={()=>setInput(input+'3')}>3</button><br/>
     <button onClick={()=>setInput(input+'4')}>4</button>
     <button onClick={()=>setInput(input+'5')}>5</button>
     <button onClick={()=>setInput(input+'6')}>6</button><br/>
     <button onClick={()=>setInput(input+'7')}>7</button>
     <button onClick={()=>setInput(input+'8')}>8</button>
     <button onClick={()=>setInput(input+'9')}>9</button><br/>
     <button onClick={()=>setInput(input+'0')}>0</button>

     <button onClick={()=>setInput(input+'+')}>+</button>
     <button onClick={()=>setInput(input+'-')}>-</button>
     <button onClick={()=>setInput(input+'*')}>*</button>
     <button onClick={()=>setInput(input+'%')}>%</button>
     <button onClick={()=>setInput('')}>clr</button>

      
    </div>
  );
}

export default App;
