import './App.css';
import {useState} from "react";



const App = () => {
  const myStyle = {backgroundColor:"red", color: "green"}
  const [counter, setCnt] = useState(0);
  const listName = ['ido', 'bob', 'clum', 'mery', 'lisa'];
  const dictName = [{'name':'ido', 'age':1}, {'name':'bob', 'age':2}]
  const [userName, setUserName] = useState("enter your name")
  const test = () => {
      setCnt(counter+1);
    };

 const newFnc = () =>{
    if (counter > listName.length-1){
      setCnt(counter-counter);
    
    }else{
      test()
    }

 };


  return (
    <div className="App">
        <button onClick = {() => newFnc()}>{listName[counter]} {counter} </button>    
        <input onChange={(e) => setUserName(e.target.value)}></input> 
        <h1 style={myStyle}>{userName} </h1>  
        {listName.map((name,i) => (
        <div key={i}>{name}</div>
        ))}

        {dictName.map((stu,i)=>(
          <div key={i}> {stu.name} : {stu.age}</div>
          ))}
        <inerComp>a</inerComp>
    </div>
    );
}

export default App;
