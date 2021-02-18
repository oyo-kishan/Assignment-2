import React ,{useEffect, useState} from 'react';

import PaginationTable from '../components/PaginationTable';
import Spinner from '../components/Spinner';


const Pagination=()=>{

    let url="https://gorest.co.in/public-api/users/?page=";
    const [data,setData]=useState([]);
    const [pageNo,setPageNo]=useState(1);
    const[loading,setLoading]=useState(true);


    useEffect(()=>{
        setLoading(true);
        if(pageNo<=0){
            alert("No more data");
            setPageNo(1);
            setLoading(false);
            return;
        }

        const newUrl=url+pageNo;

            const fetchUsers=async ()=>{
                const response=await fetch(newUrl);
                if(!response.ok){
                    alert("Some error occured");
                    throw new Error(response.status);
                }
                const users=await response.json();
                setData(users.data);
                setLoading(false);
            }

            fetchUsers();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pageNo]);

    return (
        loading?<Spinner/>:
                <PaginationTable
                    className="movietable" 
                    heading={["Name","Email","Gender","Status","Created At"]}
                    data={data}
                    onPrevClicked={()=>{setPageNo(pageNo-1)}}
                    onNextClicked={()=>{setPageNo(pageNo+1)}}
                />
    )
    
}
export default Pagination;