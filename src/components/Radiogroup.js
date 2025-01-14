import { useState, useCallback, useEffect } from 'react';

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
    if (data) {
        content = data.map(el => (
            <li key={el.id}>
                <label>
                    <input type="radio" onChange={props.setRadio} name="position" value={el.id} />
                    {el.name}
                </label>
            </li>
        ))
    }

    return (
        <div>
            {!isLoading && <ul>{content}</ul>}
            {isLoading && <p>Loading</p>}
        </div>
    )
}
export default Radiogroup;