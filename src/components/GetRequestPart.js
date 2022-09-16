import { useState, useCallback, useEffect } from "react";
import User from "./User";
import classes from './GetRequestPart.module.css'
const GetRequestPart = () => {
    const [page,setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([])
    const fetchUsers = useCallback(() => {
        setIsLoading(true);
        console.log("fetching")
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                return data.users;
            })
    }, [page]);
    const nextPage = ()=>{
        setPage(prev=> prev+1);
    }
    useEffect(() => {
        const timer = setTimeout(()=>{
            fetchUsers()
            .then(data=>{
                setLoadedUsers(prev=>[...prev,...data]);
            })
        },500)
        return ()=>{
            clearTimeout(timer)
        }
    }, [fetchUsers])
    let content;
    if (loadedUsers) {
        content = loadedUsers.map(el => <User key={el.id} user={el} />)
    }
    return (
        <div>
            <p>GET REQUEST PART</p>
            {isLoading && <p>Loading</p>}
            
                {!isLoading && <div className={classes.container}> {content }</div>}
                <button onClick={nextPage}>Show More</button>

        </div>
    )
}
export default GetRequestPart;