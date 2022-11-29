import { useEffect, useRef } from "react";


export default function UploadWidget() {
  const CloudinaryRef = useRef();
  console.log('here')
  useEffect =(() => {
    console.log('useeffect hit')
    CloudinaryRef.current = window.cloudinary;
    console.log(CloudinaryRef.current);
  },[])
}
