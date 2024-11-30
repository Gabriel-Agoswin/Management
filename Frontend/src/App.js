import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './components/App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';
import Try from './components/Try';
import { useState } from 'react';





function App() {
  return (
    <div className="bg-white dark:bg-slate-800 justify-center rounded-lg px-6 py-8 ring-slate-900/5">
      <h5>React CRUD operation using PHP API and MySQL</h5> 

      
      
     <BrowserRouter>
     <nav>
      <ul>
        <li >
          <Link to="/">List Users</Link>
        </li>
        <li>
          <Link to="user/create">Create User</Link>
        </li>
        <li>
          <Link to="user/Try">Try</Link>
        </li>
        
      </ul>
     </nav>
     <Routes>
      <Route index element ={<ListUser/>}/>
      <Route path='user/create' element ={<CreateUser/>}/>
      <Route path='user/:id/Edit' element ={<EditUser/>}/>
      <Route path='user/Try' element ={<Try/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
