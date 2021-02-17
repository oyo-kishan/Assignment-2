import React ,{useEffect, useState} from 'react';
import PaginationTable from '../components/PaginationTable';

const Pagination=()=>{
    let url="https://gorest.co.in/public-api/users/?page=";
    const [data,setData]=useState([]);
    const [pageNo,setPageNo]=useState(1);

    useEffect(()=>{

        if(pageNo<=0){
            alert("No more data");
            setPageNo(1);
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
                }
            fetchUsers();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pageNo]);

    return (
        <div>
         <PaginationTable
            className="movietable" 
            heading={["Name","Email","Gender","Status","Created At"]}
            data={data}
            onPrevClicked={()=>{setPageNo(pageNo-1)}}
            onNextClicked={()=>{setPageNo(pageNo+1)}}
        />
        </div>
    )
}
export default Pagination;