import { useState, useCallback, useEffect } from 'react';
import classes from "./Radiogroup.module.css";
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
        props.setRadio(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    if (data) {
        content = data.map(el => (
            <li key={el.id} className={classes.radio_item}>
                <label className={classes.container}>
                    <input type="radio" onChange={changeRadioHandler} name="position_id" value={el.id} required />
                </label>
                <div className={classes.position_name}>
                    {el.name}
                </div>
            </li>
        ))
    }

    return (
        <div className={classes.radiogroup}>
            <p>Select your position</p>
            {!isLoading && <ul className={classes.radio_items}>{content}</ul>}
            {isLoading && <p>Loading</p>}
        </div>
    )
}
export default Radiogroup;