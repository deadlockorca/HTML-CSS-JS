import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import React from 'react'
import Dropdown from './Component/Dropdown'
import Persion from './pages/basic-hooks/Persion'
import ReactMemo from './pages/basic-hooks/react-memo'
import StatePicker from './pages/basic-hooks/react-memo/react-memo-election/StatePicker'
import { ElectionState } from './pages/basic-hooks/react-memo/react-memo-election/Election.model'
import Summary from './pages/basic-hooks/react-memo/react-memo-election/Summary'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
function App () {
  const [selectedState, setSeclectedState] = useState({} as ElectionState);
  const [elections, setElections] = useState<ElectionState[]> ([]);

useEffect(() => {
  fetch("https://5e7db521fa19eb0016519ec1.mockapi.io/elections")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return response.json();
  })
  .then((data) => {
    setElections(data);
  });

},[]);

const charSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
  const stateId = Number(event.target.value);
  const selectedState = elections.find((item) => item.id === stateId);
  setSeclectedState(selectedState as ElectionState);
}
const reRenderHandler = () => {
  setSeclectedState({...selectedState})
}
return (<>
  <StatePicker 
  option={elections}
  selectedId = {selectedState?.id}
  onSelectState={charSelectHandler} 
/>
<hr />
<Summary state={selectedState}/>
<hr />
{selectedState.candidates && (
  <button onClick={reRenderHandler} >Re- select</button>
)}
</>)
}
// class App extends React.Component {
//   constructor(props : string) {
//     super(props);
//   }
//   render() {
//     const phones = ["Iphone", "Samsung", " Apple" ];
//     const cats = ["Bella", "Meow", "Kitty", "Miu"];
//     return (
//       <>
//       <StatePicker
//       option={elections}
//       selectedId ={selectedState?.id}
//       onSeclectState = {charSelectHandler}></StatePicker>
//       <Persion></Persion>
//       <ReactMemo></ReactMemo>
//       <div className='row'>
//         <div className='col-6'>
//           <Dropdown option = {phones}/>
//         </div>
//         <div className='col-6'>
//           <Dropdown option = {cats} title = "Choose your cat's name"/>
//         </div>
//       </div>
//       </>
//     );
//   }
// }

export default App
