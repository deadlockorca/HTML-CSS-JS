import { ChangeEvent, ReactNode, Suspense, useEffect, useState } from 'react'
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
import StyledComponents from './pages/react-styling/styled-components'
import CssModule from './pages/react-styling/css-module/CssModule'
import UserCRUD from './pages/debugging/tables/UserCRUD'
import EditUser from './pages/debugging/forms/EditUser'
import ErrorBoundaryClass from './pages/error-boundaries/ErrorBoundaryClass'
import ErrorBoundaryFunction from './pages/error-boundaries/ErrorBoundaryFunction'
import BuggyCounter from './pages/error-boundaries/BuggyCounter'
import Modal from './pages/react-portal/Modal'
import styles from './App.module.css'
import { BrowserRouter, NavLink} from 'react-router-dom'
import { Route, Routes } from 'react-router'
import HomeRoute from './pages/react-router-dom/HomeRoute'
import AboutRoute from './pages/react-router-dom/AboutRoute'

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
const [someKey, setSomeKey] = useState(null);

const [openModal, setOpenModal] = useState(false);
return (
  <>
  <BrowserRouter>
  <div className={styles.App}>
    <header>
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <a href="">Fsoft Academy</a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link' >Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-link'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Main content</h2>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path='/' Component={HomeRoute}></Route>
            <Route path='/about' Component={AboutRoute} />
        </Routes>
      </Suspense>
    </main>
  </div>
  </BrowserRouter>
  {/* <Modal open = {openModal}>
    <h2>Dialog</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <div style={{flex : 1}}>
      <button className='button' onClick={() => setOpenModal(false)}>OK</button>
    </div>
  </Modal>
  <button className='button' onClick={() => setOpenModal(true)}>Open modal</button> */}
  </>

  // <ErrorBoundary FallbackComponent = {ErrorBoundaryFunction}
  // onReset = { () => setSomeKey(null)}
  // resetKeys = {[someKey]}>
  //   <BuggyCounter></BuggyCounter>
  // </ErrorBoundary>
  // <UserCRUD></UserCRUD>
  //<StyledComponents></StyledComponents>
  // <CssModule></CssModule>
  
)
// return (<>
//   <StatePicker 
//   option={elections}
//   selectedId = {selectedState?.id}
//   onSelectState={charSelectHandler} 
// />
// <hr />
// <Summary state={selectedState}/>
// <hr />
// {selectedState.candidates && (
//   <button onClick={reRenderHandler} >Re- select</button>
  
// )}
// </>)
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
