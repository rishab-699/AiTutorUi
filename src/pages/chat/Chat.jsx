import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Prompt from '../../components/prompt/Prompt'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import Tesseract from "tesseract.js";

export default function Chat() {
  const [capture, setCapture] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [ocrResult, setOcrResult] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const enableCamera = async()=>{
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  }
  const processImage = () => {
    if (!capturedImage) return;

    setIsProcessing(true);
    Tesseract.recognize(capturedImage, "eng", {
      logger: (info) => console.log(info), // Logs progress
    })
      .then(({ data: { text } }) => {
        setOcrResult(text);
        console.log(text);
        setIsProcessing(false);
      })
      .catch((err) => {
        console.error("OCR Error:", err);
        setIsProcessing(false);
      });
  };

  useEffect(()=>{
    console.log(capture);
    if(capture){
      enableCamera();
    }
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  },[capture]);
  const closeBtn = ()=>{
    setCapture(false);
    
  }

  const captureImage = async() => {
    console.log("capture")
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the image as a data URL
      const dataUrl = canvas.toDataURL("image/png");
      await setCapturedImage(dataUrl);

    }
     processImage()
    console.log(capturedImage);
    console.log(ocrResult);
  };

  return (
    <div className='Chat'>
      <Sidebar/>
      <div className="ChatWindow">
        {capturedImage !==null && 
        <p>{ocrResult}</p>
        }
        {capture && 
        <div className="cameraAction">
          <button className='closeButton' onClick={()=>closeBtn()}>
            <CloseIcon className='closeIcon'/>
          </button>
          <div className="cameraPreview">
          <video ref={videoRef} autoPlay playsInline style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}/>
          </div>
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <button className='CaptureBtn' onClick={()=>captureImage()}> <CameraAltIcon className='cameraIcon'/></button>
          
        </div>
        }
        
      
        <Prompt setCapture={setCapture}/>
      </div>
    </div>
  )
}
