import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ListUser(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers(){
    axios.get('http://localhost:80/Management-System/Backend/users').then(function(response){
        console.log(response.data);
        setUsers(response.data);
    });

    }

    const deleteUser = (id) =>{
        axios.delete(`http://localhost:80/Management-System/Backend/users/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return(
        <div className="flex min-h-full flex-col rounded px-6 py-12 lg:px-8 ">
        <h1 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-400" >List of users</h1>

        <table className="table-fixed font-centuryGothic divide-y divide-gray-200">
            <thead>
                <tr className="py-3 text-gray-300 justify-center bg-green-700 dark:bg-green-600 text-white ">
                    <th>Check</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="mb-2 justify-center  divide-y divide-gray-800 dark:divide-gray-200">
                {users.map((user, key) => (
                    <tr key={key} className=" text-slate-400 mb-10 text-smb hover:bg-gray-800 cursor-pointer dark:hover:bg-gray-200 cursor-pointer">
                        <td ><input type="checkbox" className="bg-gray-400 py-2 px-2 border-2 border-gray-300"/></td>
                        <td >{user.id}</td>                        
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td className="items-center">
                            <button className="text-green-500  ml-20  mb-2 mt-2 bg-gray-700 p-2 outline-1 outline-gray-400 rounded p-2 outline-1 outline-gray-400 rounded dark:bg-gray-200 hover:bg-green-200  p-2 outline-1 outline-gray-400 rounded"><Link className="mt-10" to = {`user/${user.id}/edit`} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            </Link>
                            </button>

                            <button className="text-red-500 bg-gray-700  ml-20  outline-1 outline-gray-400 rounded p-2 outline-1 outline-gray-400 rounded dark:bg-gray-200 hover:bg-red-300 p-2 outline-1 outline-gray-400 rounded" onClick = {() => deleteUser(user.id)}> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}