import classes from "./PhotoInput.module.css";
const PhotoInput = (props) => {
    const fileAdd = (e) => {
        props.setPhoto(prev => ({ ...prev, [e.target.name]: e.target.files[0] }));
    }
    return (
        <div className={classes.photo_input}>
            <label className={classes.add_photo_button} htmlFor="photo">Upload</label>
            <input onChange={fileAdd} name="photo" type="file" id="photo" required />
            {!props.photo &&  <div className={classes.description}>Upload your photo</div>}
            {props.photo &&  <div className={`${classes.photo_name} ${classes.description}`}>{props.photo.name}</div>}
            <span className={classes.visible}>Error text</span>
        </div>)
}
export default PhotoInput;