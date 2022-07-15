import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [LVal,setLVal]=useState(null);
  const [RVal,setRVal]=useState(null);
  const [Operator,setOperator]=useState(null);
  const [KetQua,setKetQua]=useState(null);

  const UpdateVal = (Val) => {
    if(Operator==null){
      if(LVal!=null){
        setLVal(LVal*10+Val);
      }
      else {
        setLVal(Val);
      }
    }
    else{
      if(LVal!=null){
        setRVal(RVal*10+Val);
      }
      else {
        setRVal(Val);
      }
    }
  }
  const UpdateOperator = (CurOp) => {
    if(LVal!=null){
      setOperator(CurOp);
    }
  }
  const Calculate = () => {
    if(LVal != null && RVal != null && Operator != null){
      switch(Operator){
        case "+":
          setKetQua(LVal+RVal);
          break;
        case "-":
          setKetQua(LVal-RVal);
          break;
        case "*":
          setKetQua(LVal*RVal);
          break;
        case "/":
          setKetQua(LVal/RVal);
          break;
      }
    }
  }
  return (
    <div className="App">
      <p>
        <div>
          {LVal} {Operator} {RVal} {KetQua!=null? "=":""} {KetQua}
        </div>
        <div>
          <button onClick={() => UpdateVal(1)}>
            1
          </button>
          <button onClick={() => UpdateVal(2)}>
            2
          </button>
          <button onClick={() => UpdateVal(3)}>
            3
          </button>
        </div>
        <div>
          <button onClick={() => UpdateVal(4)}>
            4
          </button>
          <button onClick={() => UpdateVal(5)}>
            5
          </button>
          <button onClick={() => UpdateVal(6)}>
            6
          </button>
        </div>
        <div>
          <button onClick={() => UpdateVal(7)}>
            7
          </button>
          <button onClick={() => UpdateVal(8)}>
            8
          </button>
          <button onClick={() => UpdateVal(9)}>
            9
          </button>
        </div>
        <div>
          <button onClick={() => setOperator("+")}>
            +
          </button>
          <button onClick={() => setOperator("-")}>
            -
          </button>
          <button onClick={() => setOperator("*")}>
            *
          </button>
          <button onClick={() => setOperator("/")}>
            /
          </button>
        </div>
        <div>
          <button onClick={() => Calculate()}>
            =
          </button>
          <button onClick={() => UpdateVal(0)}>
            0
          </button>
        </div>
      </p>
    </div>
  )
}

export default App
