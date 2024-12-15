
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function CreateUser(){
  const navigate = useNavigate();
    const [inputs, setInputs]= useState({})

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:80/Management-System/Backend/users/save', inputs).then(function(response){

          console.log(response.data);
          navigate("/");
          

        });
        
    }
    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12  ">
           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           <h2 className="mt-10 text-center text-2xl/9  font-medium tracking-tight text-gray-400">Create a new User</h2>
            <form onSubmit = {handleSubmit} >
              <label for="email" className="block text-left text-sm/6 font-medium text-gray-400">Full name</label>
              <input type="text" placeholder="Enter your name" className="block bg-gray-700 w-full rounded-md  px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 dark:bg-slate-100 focus:outline-gray-200 placeholder:text-gray-500" name="name" onChange={handleChange}/>
              <br/>
              <label for="email"  className="block text-left text-sm/6 font-medium text-gray-400">Email address</label>
              <input type="text" placeholder="Enter your email address" className="block w-full rounded-md bg-gray-700 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 dark:bg-slate-100 focus:outline-gray-200  placeholder:text-gray-500" name="email" onChange={handleChange}/>
              <br/>
              <label for="email"  className="block text-left text-sm/6 font-medium text-gray-400">Mobile number</label>
              <input type="text" placeholder="Enter your mobile number" className="block w-full rounded-md bg-gray-700 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600  sm:text-sm/6 dark:bg-slate-100 focus:outline-gray-200 placeholder:text-gray-500"  name="mobile" onChange={handleChange}/>
              <br/>

              
              <button className="flex w-full justify-center bg-green-500 rounded-md text-white px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  >Submit</button>
            </form>

          

            </div>
        </div>







        
    )
}