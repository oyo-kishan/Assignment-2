import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import addUserInfo from '../actions/AddUserInfo';
import UserTable from '../components/UserTable';


const FetchUser=()=>{
    const dispatch=useDispatch();
    const [data,setData]=useState(useSelector((state) => state.userData.users));
    const url="https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        if(data.length!==0)return;
            const fetchUsers=async ()=>{
                const response=await fetch(url);
                if(!response.ok){
                    alert("Some error occured");
                    throw new Error(response.status);
                }
                const users=await response.json();
                console.log(users);
                dispatch(addUserInfo(users));
                setData(users);
                }
            fetchUsers();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
          <UserTable
            className="movietable" 
            heading={["Name","Email","Phone","Username","Website"]}
            data={data}
            />
        </div>
    )
}
export default FetchUser;