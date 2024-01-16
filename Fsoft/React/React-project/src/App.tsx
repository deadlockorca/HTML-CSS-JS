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
import { BrowserRouter, NavLink, Route} from 'react-router-dom'
import HomeRoute from './pages/react-router-dom/HomeRoute'
import AboutRoute from './pages/react-router-dom/AboutRoute'
import { Routes } from 'react-router-dom'
import UserRoute from './pages/react-router-dom/UserRoute'
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ReactBasicForm from './pages/react-form/basic-form/ReactBasicForm'
import ReactFormik from './pages/react-form/react-formik/ReactFormik'
import ReactFormikNew from './pages/react-form/react-formik/new-demo/ReactFormikNew'
import ReactFormikList from './pages/react-form/react-formik/react-formik-list/ReactFormikList'
import WithFetch from './pages/sever-interaction/WithFetch'
import WithAxiosNormal from './pages/sever-interaction/WithAxiosNormal'
import WithAxiosService from './pages/sever-interaction/WithAxiosService'
import UserContext from './pages/react-context/UserContext'
import MobxComponent from './pages/react-mobx/components/MobxComponent'
import Counter from './pages/react-mobx/components/Counter'
import ReduxComponent from './pages/react-redux/components/ReduxComponent'
import ReactBootstrap from './pages/react-bootstrap/ReactBootstrap'
import RecipeBooks from './pages/react-bootstrap/RecipeBooks'
import EnhancedForm from './pages/comment-recipes/WithFormik'
import AppHOC from './pages/comment-recipes/APpHOC'
import RenderProps from './pages/comment-recipes/RenderProps'
import ContextClass from './pages/advance-hook/ContextClass'
import UseRef from './pages/advance-hook/useRef'
import UseMemoHook from './pages/advance-hook/UseMemo'




const NotFound = () => <h2>404- NOT FOUND</h2>
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
const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleLogin = () => {
  setIsLoggedIn((prev) => !prev);
}
const LazyComponent = lazy(() => import('./pages/react-router-dom/LazyLoadRoute'));
const routes = [
  { path: "", element: <HomeRoute/>},
  { path: "about", element: <AboutRoute/>},
  { path: "info/:code/:firstName", element: <AboutRoute/>},
  {path: "/login", element : (
    <>
  <h2>Login Page</h2>
  <h3>Login status: {""}
  <label style = {{color: "blue"}}>
  {isLoggedIn ? "LoggedIn" : "Not LoggedIn"}
  </label></h3>
  <button className='btn btn-primary' onClick={handleLogin}>Toggle Login</button>
  </>)},
  {path: "info/:code/:firstName", element: <AboutRoute/>},
  {path: "users/*", element: isLoggedIn ? <UserRoute/> : <Navigate to='/login'/>},
  {path: "react-form", element: <ReactBasicForm/>},
  {path: "react-formik", element: <ReactFormik/>},
  {path: "react-formik-new", element: <ReactFormikNew/>},
  {path: "react-formik-list", element: <ReactFormikList/>},
  {path: "with-fetch", element: <WithFetch/>},
  {path: "with-axios", element: <WithAxiosNormal/>},
  {path: "with-axios-service", element: <WithAxiosService/>},
  {path: "user-context", element: <UserContext/>},
  {path: "react-mobx", element: <MobxComponent/>},
  {path: "react-mobx-counter", element: <Counter/>},
  {path: "react-redux", element: <ReduxComponent/>},
  {path: "react-bootstrap", element: <ReactBootstrap/>},
  {path: "recipe-books", element: <RecipeBooks/>},
  {path: "with-formik", element: <EnhancedForm/>},
  {path: "hoc", element: <AppHOC/>},
  {path: "render-props", element: <RenderProps/>},
  {path: "context-class", element: <ContextClass/>},
  {path: "use-ref", element: <UseRef/>},
  {path: "use-memo", element: <UseMemoHook/>},

];
const navLinks = [
  {path: "", title: "Home"},
  {path: "about", title: "About"},
  {path: "info/100/Hieu", title: "Info"},
  {path: "login", title: "Login"},
  {path: "users", title: "Users"},
  {path: "react-form", title: "React Basic Form"},
  {path: "react-formik", title: "React Formik"},
  {path: "react-formik-new", title: "React Formik New"},
  {path: "react-formik-list", title: "React Formik List"},
  {path: "with-fetch", title: "With Fetch"},
  {path: "with-axios", title: "With Axios"},
  {path: "with-axios-service", title: "With Axios Service"},
  {path: "user-context", title: "User Context"},
  {path: "react-mobx", title: "React Mobx"},
  {path: "react-mobx-counter", title: "React Mobx Counter"},
  {path: "react-redux", title: "React Redux"},
  {path: "react-bootstrap", title: "React Bootstrap"},
  {path: "recipe-books", title: "Recipe Books"},
  {path: "with-formik", title: "With-Formik"},
  {path: "hoc", title: "HOC"},
  {path: "render-props", title: "Render Props"},
  {path: "context-class", title: "Context Class"},
  {path: "use-ref", title: "Use Ref"},
  {path: "use-memo", title: "Use Memo"},

];
return (
  <>
  <BrowserRouter>
  <div className={styles.App}>
    <header>
      <nav className='navbar navbar-expand navbar-light bg-light'> 
      <ul className='navbar-nav'>
        {navLinks.map((link) => (
        <li className='nav-item' key={link.path}>
         <NavLink
         to={link.path}
         className={({ isActive, isPending}) => (isActive ? "active nav-link" : "nav-link")}>{link.title}</NavLink>
        </li>
        ))}
      </ul>
      </nav>
    </header>
    <main>
      <Suspense fallback={<h2>...Loading...</h2>}>
        <Routes>
          {routes.map((route) => (
            <Route
            key={route.path}
            path={route.path}
            element={route.element}>
            </Route>
          ))}
        </Routes>
      </Suspense>
    </main>
  </div>
  </BrowserRouter>
  {/* <BrowserRouter>
  <div className={styles.App}>
    <header>
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <a href="">Fsoft Academy</a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to='/' exact className='nav-link' activeClassName='active' >Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/info/100/Hieu' className='nav-link' activeClassName='active'>Info</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/info/100/Hieu?key1=Music&key2=Something' className='nav-link' activeClassName='active'>Info Search</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/users' className='nav-link' activeClassName='active'>User Info</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/lazy' className='nav-link' activeClassName='active'> Lazy</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Main content</h2>
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path='/' exact component={HomeRoute}></Route>
          <Route path='/about' component={AboutRoute} />
          <Route path='/info/:code/:lastName' component={AboutRoute}></Route>
          {/* Route Guard */}
          {/* <Route path= '/users'
          render={() => 
          isLoggedIn ? <UserRoute/> : <Redirect to='/login'/>}>
          </Route>
          <Route path = '/login'>
            <h2>Login Page</h2>
            <h3>Login status: {""}
            <label style = {{color: "blue"}}>
            {isLoggedIn ? "LoggedIn" : "Not LoggedIn"}
            </label></h3>
            <button className='btn btn-primary' onClick={handleLogin}>Toggle Login</button>
          </Route>
          <Route path='/lazy' component={LazyComponent}></Route>
          <Route component={NotFound}></Route>
        </Switch> */}
  {/* //     </Suspense> */}
  {/* //   </main> */}
  {/* </div> */}
  {/* // </BrowserRouter> */}
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
  //<StyledComponents></StyledComponents> */}
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
