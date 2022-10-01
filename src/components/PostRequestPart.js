import Radiogroup from "./Radiogroup";
import { useRef, useState } from "react";
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phoneRegex = /[\+]{0,1}380([0-9]{8})/;
const nameRegex = /^[A-z0-9 ,.'-]{2,60}$/;
const fileRegex = /(.jpg|.jpeg)$/;

const PostRequestPart = (props) => {

    const nameRef = useRef();
    const [nameIsValid, setNameIsValid] = useState('true');

    const phoneRef = useRef();
    const [phoneIsValid, setPhoneIsValid] = useState('true');

    const emailRef = useRef();
    const [emailIsValid, setEmailIsValid] = useState('true');

    const [selectedFile, setSelectedFile] = useState();
    const [fileIsValid, setFileIsValid] = useState('true');

    const [position, setPostion] = useState(undefined);
    const [positionIsValid, setPositionIsValid] = useState(false)

    const [formWasTouched, setFormWasTouched] = useState(false);
    const [formIsSent, setFormIsSent] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        console.log(props.token)
        if (!props.token) {

        } else if (nameIsValid && phoneIsValid && emailIsValid && formWasTouched && positionIsValid) {
            const formData = new FormData();
            console.log(nameRef.current.value, phoneRef.current.value, emailRef.current.value, position)
            formData.append("photo", selectedFile);
            formData.append("name", nameRef.current.value);
            formData.append("email", emailRef.current.value);
            formData.append("phone", phoneRef.current.value);
            formData.append("position_id", position);
            console.log(...formData)
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
                {
                    method: "POST",
                    body: formData,
                    headers: { 'Token': props.token }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        props.removeToken();
                        setFormIsSent(true)
                        console.log(data);
                    } else {
                        throw new Error(data.message)
                    }
                })
                .catch(e => {
                    console.log('Something went wrong : ',e)
                })
        } else {
            console.log("something went wrong")
        }

    }

    const nameValidator = () => {
        setFormWasTouched(true)
        const inputItem = nameRef.current.value;
        setNameIsValid(inputItem.match(nameRegex) && inputItem.trim().length > 0)
    }
    const emailValidator = () => {
        setFormWasTouched(true)
        setEmailIsValid(emailRef.current.value.match(emailRegex))
    }
    const phoneValidator = () => {
        setFormWasTouched(true)
        setPhoneIsValid(phoneRef.current.value.match(phoneRegex))
    }
    const radioValidator = (event) => {
        setFormWasTouched(true)
        setPositionIsValid(true)
        console.log(event.target.value);
        setPostion(event.target.value);
    }
    const fileValidator = (event) => {
        setFormWasTouched(true)
        const fileInput = event.target.files[0]
        setFileIsValid(fileInput.name.match(fileRegex) && fileInput.size <= 5000000)
        setSelectedFile(fileInput)
    }
    let content = (<form onSubmit={submitForm}>
        <div>
            <input type="text" onChange={nameValidator} name="name" placeholder="Your Name" ref={nameRef} />
            {!nameIsValid && <p>Username is not valid</p>}
        </div>
        <div>
            <input type="email" onChange={emailValidator} name="email" placeholder="Email" ref={emailRef} />
            {!emailIsValid && <p>Email is not valid</p>}
        </div>
        <div>
            <input type="string" onChange={phoneValidator} name="phone" placeholder="Phone" ref={phoneRef} />
            {!phoneIsValid && <p>Phone is not valid</p>}
        </div>
        <Radiogroup setRadio={radioValidator} />
        <div>
            <input type="file" name="image" onChange={fileValidator} placeholder="Upload your photo" />
            {!fileIsValid && <p>File is not valid</p>}
        </div>
        <button> Send</button>
    </form>)
    if (formIsSent) {
        content = <p>FORM IS SENT</p>
    }
    return <div>
        <h2>POST REQUEST PART 2</h2>
        <div>
            {content}
        </div>
    </div>
}
export default PostRequestPart;