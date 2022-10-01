import { useState, useCallback, useEffect} from "react";

import User from "./User";

import classes from './GetRequestPart.module.css'

const GetRequestPart = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([])
    const fetchUsers = useCallback(() => {
        setIsLoading(true);
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?offset=0&count=${props.page.pageNumber * 6}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setIsLoading(false);
                    setLoadedUsers(data.users);
                } else {
                    throw new Error(data.message);
                }
            })
            .catch(e => {
                console.log(e);
            })
    }, [props.page]);
    const nextPage = () => {
        props.changePage();

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchUsers();
        }, 100)
        return () => {
            clearTimeout(timer);
        }
    }, [fetchUsers])
    let content;
    if (loadedUsers) {
        content = loadedUsers.map(el => <User key={el.id} user={el} />)
    }
    return (
        <div id="#usersList">
            <p>GET REQUEST PART</p>
            {isLoading && <p>Loading</p>}

            {!isLoading && <div className={classes.container}> {content}</div>}
            <button onClick={nextPage}>Show More</button>
        </div>
    )
}
export default GetRequestPart;