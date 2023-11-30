import { ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import React from 'react'
import Dropdown from './Component/Dropdown'

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

class App extends React.Component {
  constructor(props : string) {
    super(props);
  }
  render() {
    const phones = ["Iphone", "Samsung", " Apple" ];
    const cats = ["Bella", "Meow", "Kitty", "Miu"];
    return (
      <>
      <div className='row'>
        <div className='col-6'>
          <Dropdown option = {phones}/>
        </div>
        <div className='col-6'>
          <Dropdown option = {cats} title = "Choose your cat's name"/>
        </div>
      </div>
      </>
    );
  }
}

export default App
