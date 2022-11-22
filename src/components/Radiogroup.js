import { useState, useCallback, useEffect } from 'react';
import "./Radiogroup.css";
const Radiogroup = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    let content;
    const fetchData = useCallback(() => {
        setIsLoading(true)
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(res => res.json())
            .then(data => {
                setData(data.positions)
                setIsLoading(false)
            })
    }, [])
    useEffect(() => {
        fetchData();
    }, [fetchData])
    const changeRadioHandler = (e) => {
        console.log(e.target.name)
        props.setRadio(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    if (data) {
        content = data.map(el => (
            <li key={el.id}>
                <label>
                    <input type="radio" onChange={changeRadioHandler} name="position_id" value={el.id} required />
                    {el.name}
                </label>
            </li>
        ))
    }

    return (
        <div>
            <div className="radiogroup">
                {!isLoading && <ul>{content}</ul>}
                {isLoading && <p>Loading</p>}
                <div className='errorMsg'>Something went wrong</div>
            </div>
        </div>
    )
}
export default Radiogroup;