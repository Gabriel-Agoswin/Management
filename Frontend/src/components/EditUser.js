
import { useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


export default function EditUser(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([])

    const {id} = useParams();
    
    useEffect(() => {

        getUser();
    }, []);

    function getUser(){
    axios.get(`http://localhost:80/Management-System/Backend/user/${id}`).then(function(response){
        console.log(response.data);
        setInputs(response.data);
    });

  }


    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:80/Management-System/Backend/users/${id}/edit`, inputs).then(function(response){

          console.log(response.data);
          navigate("/");
          

        });
        
    }
    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Edit User</h1>
            <form onSubmit = {handleSubmit}>

            <label for="email" className="text-left block text-sm/6 font-medium text-gray-600">Full name</label>
              <input value={inputs.name} type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="name" onChange={handleChange}/>
              <br/>
              <label for="email"  className="block text-left text-sm/6 font-medium text-gray-500">Email address</label>
              <input value={inputs.email} type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="email" onChange={handleChange}/>
              <br/>
              <label for="email"  className="block text-left text-sm/6 font-medium text-gray-500">Mobile number</label>
              <input value={inputs.mobile} type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="mobile" onChange={handleChange}/>
              <br/>
              <button  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Update</button>
            </form>


            </div>
        </div>
        
    )
}