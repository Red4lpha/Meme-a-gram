import { useEffect, useRef, useState } from "react";
import { useNavigate} from 'react-router-dom';
import './Create.css';

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })
  const [nameData, setNameData] = useState("");
  const [imageData, setImageData] = useState("");
  const [formSaved, setFormSaved] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const navigate = useNavigate();

  //? For the Cloudinary widget api
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const uploadNewImage = async () => {
    try {
      await fetch('/api/memes/create', {
          method: 'POST',
          body: JSON.stringify({
            "name": nameData,
            "image": imageData,
          }),
          headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log('Success:', res);
        return true;
      })
    } catch (err) {
      console.error('Error:', err);
      return false
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setNameData(value);
  }
  
  const handleSave = () => {
    if (nameData === '' || imageData === ''){
      //TODO add toast error message
      console.log('Error: incomplete form field(s)');
    }
    else {
      if (uploadNewImage()) {
        setFormSaved(true);
      }
    }
  }
  useEffect (() => {
    if (formSaved) navigate('/');
  },[formSaved])

  useEffect (() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "dx88gqakr",
      uploadPreset: "bxrhkkhj"
    }, (err, res) => {
      if (res.event === 'success'){
        const image = res.info.url;
        setImageData(image);
        setIsImageUploaded(true);
        console.log('------------------');
      }
      if(err){
        console.log('error uploading to cloudinary');
        console.log(err);
      } 
    })
  },[]);
  return (
    <section className="create-container">
      <h1>Create your own meme!</h1>
      <div className="form-name">
        <label className="label-name" htmlFor="name">Meme Name: </label>
        <input type="text" id="name" value={nameData} onChange={handleChange} />
      </div>
      { isImageUploaded ? (
        <div className="upload-btn-container">
          <button className="upload-btn btn btn-disabled" disabled>Upload Image</button>
          <span className="upload-text">Image Uploaded</span>
        </div>
      ): (
        <div className="upload-btn-container">
          <button className="upload-btn btn" onClick={() => widgetRef.current.open()}>Upload Image</button>
        </div>
      )}
      {nameData === "" || imageData === "" ? (
        <button className="save-btn btn btn-disabled" onClick={handleSave} disabled >SAVE</button>
      ): (
        <button className="save-btn btn" onClick={handleSave}>SAVE</button>
      )}  
    </section>
    
  )
}

export default Create