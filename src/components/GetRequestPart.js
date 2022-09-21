import { useState, useCallback, useEffect } from "react";
import User from "./User";
import classes from './GetRequestPart.module.css'
import { useSelector } from "react-redux";

const GetRequestPart = () => {
    const token = useSelector(state => state.token);
    console.log('token')
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([])
    const fetchUsers = useCallback(() => {
        if (token) {
            setLoadedUsers([])
        }
        setIsLoading(true);
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                return data.users;
            })
    }, [page, token]);
    console.log("fetching")
    const nextPage = () => {
        setPage(prev => prev + 1);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchUsers()
                .then(data => {
                    setLoadedUsers(prev => [...prev, ...data]);
                })
        }, 700)
        return () => {
            clearTimeout(timer)
        }
    }, [fetchUsers])
    let content;

    if (loadedUsers) {
        content = loadedUsers.map(el => <User key={el.id} user={el} />)
    }
    return (
        <div>
            <h2>GET REQUEST PART</h2>
            {isLoading && <p>Loading</p>}

            {!isLoading && <div className={classes.container}> {content}</div>}
            {isLoading && <p>LOADING!!!</p>}
            {token && <p>Token is active</p>}
            <button onClick={nextPage}>Show More</button>

        </div>
    )
}
export default GetRequestPart;