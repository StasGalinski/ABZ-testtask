import Radiogroup from "./Radiogroup";
import { useRef, useState } from "react";
import Input from "./Input";
const PostRequestPart = (props) => {
    const [position, setPostion] = useState(undefined);
    const [selectedFile, setSelectedFile] = useState();
    const [userName,setUserName]=useState('')
    const [userPhone,setPhone]=useState('')
    const [userEmail,setUserEmail]=useState('')
    const [userNameIsValid,setUserNameIsValid]= useState('false')
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
        formData.append("phone", phoneRef.current.value);
        formData.append("position_id", position);
        console.log(...formData)
        props.removeToken();

        //Get token
        //fetch data
    }

    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const phoneRegex = /[\+]{0,1}380([0-9]{8})/
    const nameRegex = /^[a-z ,.'-]+$/i
    console.log(userNameIsValid)
    const nameInputSave = (input,isValid)=>{
        setUserName(input)
        setUserNameIsValid(isValid)
    }
    return <div>
        <h2>POST REQUEST PART 2</h2>
        <form onSubmit={submitForm}>
            <Input name="name" type="text" placeholder='Your Name'  regEx={nameRegex} saveInput={nameInputSave}/>
            <Input name="email" type="email" placeholder='Email' regEx={emailRegex} />
            <Input name="phone" type="text" placeholder='Your phone' regEx={phoneRegex} />

            {/* <div>
                <input type="text" name="name" placeholder="Your Name" ref={nameRef}/>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" ref={emailRef} />
            </div>
            <div>
                <input type="number" name="phone" placeholder="Phone" ref={phoneRef} />
            </div> */}
            <Radiogroup setRadio={radioChangeHandler} />
            <div>
                <input type="file" name="image" onChange={fileChangeHandler} placeholder="Upload your photo" />
            </div>
            <button> Send</button>
        </form>
    </div>
}
export default PostRequestPart;