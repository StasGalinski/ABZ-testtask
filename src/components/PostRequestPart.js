import Radiogroup from "./Radiogroup";
import FormInput from "./FormInput";
import {useState } from "react";
import classes from './PostRequestPart.module.css';
// const emailRegex = //[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g/
// const phoneRegex = /[\+]{0,1}380([0-9]{8})/;
// const nameRegex = /^[A-z0-9 ,.'-]{2,60}$/;
// const fileRegex = /(.jpg|.jpeg)$/;
const PostRequestPart = (props) => {
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        phone: "",
        position_id: "",
        photo: ""
    })
    const inputs = [
        {
            id: 1,
            name: "name",
            placeholder: "Your name",
            label: "Your name",
            type: "text",
            pattern: "^[A-z0-9 ,.'-]{2,60}$",
            required: true,
            errorMessage: "must be 2-60 characters long"
        },
        {
            id: 2,
            name: "email",
            placeholder: "Email",
            label: "Email",
            type: "email",
            pattern: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
            // pattern: "/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g",
            required: true,
            errorMessage: "must be a valid email"
        },
        {
            id: 3,
            name: "phone",
            placeholder: "Phone",
            label: "Phone",
            type: "text",
            pattern: "^[\+]{0,1}380([0-9]{9})$",
            required: true,
            errorMessage: "must be a valid  phone"
        },
        {
            id: 4,
            name: "photo",
            placeholder: "Upload your photo",
            label: "",
            type: "file",
            required: true,
            accept:"image/jpg, image/jpeg",
            errorMessage: "must be jpg or jpg"
        },
    ]
    console.log(inputValues);
    const submitForm = (e)=>{
        e.preventDefault();
    }
    // const nameRef = useRef();
    // const [nameIsValid, setNameIsValid] = useState('true');

    // const phoneRef = useRef();
    // const [phoneIsValid, setPhoneIsValid] = useState('true');

    // const emailRef = useRef();
    // const [emailIsValid, setEmailIsValid] = useState('true');

    // const [selectedFile, setSelectedFile] = useState();
    // const [fileIsValid, setFileIsValid] = useState('true');

    // const [position, setPostion] = useState(undefined);
    // const [positionIsValid, setPositionIsValid] = useState(false)

    // const [formWasTouched, setFormWasTouched] = useState(false);
    // const [formIsSent, setFormIsSent] = useState(false);

    // const submitForm = (event) => {
    //     event.preventDefault();
    //     console.log(props.token)
    //     if (!props.token) {

    //     } else if (nameIsValid && phoneIsValid && emailIsValid && formWasTouched && positionIsValid) {
    //         const formData = new FormData();
    //         console.log(nameRef.current.value, phoneRef.current.value, emailRef.current.value, position)
    //         formData.append("photo", selectedFile);
    //         formData.append("name", nameRef.current.value);
    //         formData.append("email", emailRef.current.value);
    //         formData.append("phone", phoneRef.current.value);
    //         formData.append("position_id", position);
    //         console.log(...formData)
    //         fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
    //             {
    //                 method: "POST",
    //                 body: formData,
    //                 headers: { 'Token': props.token }
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.success) {
    //                     props.removeToken();
    //                     setFormIsSent(true)
    //                     console.log(data);
    //                 } else {
    //                     throw new Error(data.message)
    //                 }
    //             })
    //             .catch(e => {
    //                 console.log('Something went wrong : ', e)
    //             })
    //     } else {
    //         console.log("something went wrong")
    //     }

    // }

    // const nameValidator = () => {
    //     setFormWasTouched(true)
    //     const inputItem = nameRef.current.value;
    //     setNameIsValid(inputItem.match(nameRegex) && inputItem.trim().length > 0)
    // }
    // const emailValidator = () => {
    //     setFormWasTouched(true)
    //     setEmailIsValid(emailRef.current.value.match(emailRegex))
    // }
    // const phoneValidator = () => {
    //     setFormWasTouched(true)
    //     setPhoneIsValid(phoneRef.current.value.match(phoneRegex))
    // }
    // const radioValidator = (event) => {
    //     setFormWasTouched(true)
    //     setPositionIsValid(true)
    //     console.log(event.target.value);
    //     setPostion(event.target.value);
    // }
    // const fileValidator = (event) => {
    //     setFormWasTouched(true)
    //     const fileInput = event.target.files[0]
    //     setFileIsValid(fileInput.name.match(fileRegex) && fileInput.size <= 5000000)
    //     setSelectedFile(fileInput)
    // }
    // let content = (
    //     <form onSubmit={submitForm} className={classes.form}>
    //         <div>
    //             <input
    //                 type="text"
    //                 onChange={nameValidator}
    //                 name="name"
    //                 placeholder="Your Name"
    //                 ref={nameRef}
    //                 className={classes.form__input} />
    //             {!nameIsValid && <p>Username is not valid</p>}
    //         </div>
    //         <div className={classes.input__field}>
    //             <input
    //                 required
    //                 type="email"
    //                 onChange={emailValidator}
    //                 name="email"
    //                 // placeholder="Email" 
    //                 ref={emailRef}
    //                 className={classes.form__input} />
    //             {!emailIsValid && <p>Email is not valid</p>}
    //             <label className={classes.label}>Email</label>
    //         </div>
    //         <div>
    //             <input
    //                 type="string"
    //                 onChange={phoneValidator}
    //                 name="phone"
    //                 placeholder="Phone"
    //                 ref={phoneRef}
    //                 className={classes.form__input} />
    //             <p>+38 (XXX) XXX - XX - XX</p>
    //             {!phoneIsValid && <p>Phone is not valid</p>}
    //         </div>
    //         <Radiogroup setRadio={radioValidator} />
    //         <div>
    //             <input type="file" name="image" onChange={fileValidator} placeholder="Upload your photo" />
    //             {!fileIsValid && <p>File is not valid</p>}
    //         </div>
    //         <button> Send</button>
    //     </form>
    // )
    // if (formIsSent) {
    //     content = <p>FORM IS SENT</p>
    // }
    return (
        <div id="post__request__part" className={classes.container}>
            <h1>Working with POST request</h1>
            <div>
                <form onSubmit={submitForm}>
                {inputs.map(input=>(<FormInput  key={input.id}{...input} onChange={setInputValues}/>))}
                <Radiogroup setRadio={setInputValues}/>
                <button className="button" disabled={!props.token}>Send</button>
                </form>
            </div>
        </div>
    )
}
export default PostRequestPart;