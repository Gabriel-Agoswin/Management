import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './components/App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';
import Try from './components/Try';
import { useState } from 'react';





function App() {


  const [darkMode, setDarkMode] = useState(true)

  function handleToggle(){
    setDarkMode(!darkMode);
  }

  return (

    <div className={`${darkMode && "dark"} container`}>
    <div className=" before:absolute before:h-1/2 before: before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10divide-y-2 divide-green-700  text-content min-h-screen bg-black  dark:bg-bkg  justify-center divide-y-2 divide-green-700 px-6 py-8 ring-slate-900/2">
    

      
      
     <BrowserRouter>
     <nav className="before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10 flex flex-row justify-between  before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10 -2-indent">
      <ul className='py-3 px-5 gap-5 flex flex-row '>
        <li className="text-gray-300 dark:text-gray-700 hover:text-green-400  ">
          <Link to="/">List Users</Link>
        </li>
        <li className=" text-gray-300 dark:text-gray-700 hover:text-green-400 ">
          <Link to="user/create">Create User</Link>
        </li>
        <li className=" text-gray-300 dark:text-gray-700 hover:text-green-400 ">
          <Link to="user/Try">Try</Link>
        </li>
        
        <button onClick={handleToggle} className=" text-gray-300 border-gray-600 dark:text-gray-400">
          {darkMode ? 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
        </svg>

        : 
          
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>


          }
        </button>


     
        
      </ul>

      <div className='py-3 px-5 gap-5 text-gray-400'>
        
        Admin
      </div>
     </nav>
     <Routes>
      <Route index element ={<ListUser/>}/>
      <Route path='user/create' element ={<CreateUser/>}/>
      <Route path='user/:id/Edit' element ={<EditUser/>}/>
      <Route path='user/Try' element ={<Try/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>

    </div>
  );
}

export default App;
