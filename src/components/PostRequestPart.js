import Radiogroup from "./Radiogroup";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tokenActions } from "../store";
const PostRequestPart = () => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const [position, setPostion] = useState(undefined);
    const [selectedFile, setSelectedFile] = useState();
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    const radioChangeHandler = (event) => {
        console.log(event.target.value);
        setPostion(event.target.value);
    }
    const fileChangeHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const submitForm = (event) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(nameRef.current.value, phoneRef.current.value, emailRef.current.value, position)
        formData.append("photo", selectedFile);
        formData.append("name", nameRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("phone", `+${phoneRef.current.value}`);
        formData.append("position_id", position);
        console.log(...formData);
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Token': token
                },
            }).then(res => {
                if (res.ok) {
                    dispatch(tokenActions.removeToken())
                }
            })
    }
    return <div>
        <h2>POST REQUEST PART 2</h2>
        <form onSubmit={submitForm}>
            <div>
                <input type="text" name="name" placeholder="Your Name" ref={nameRef} />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" ref={emailRef} />
            </div>
            <div>
                <input type="number" name="phone" placeholder="Phone" ref={phoneRef} />
            </div>
            <Radiogroup setRadio={radioChangeHandler} />
            <div>
                <input type="file" name="image" onChange={fileChangeHandler} placeholder="Upload your photo" />
            </div>
            <button> Send</button>
        </form>
    </div>
}
export default PostRequestPart;