import React, { useState, useEffect } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Portal = () => {
  const comp = useRef(null);
  const [data, setData] = useState("");
  const [val, setVal] = useState("Upload image to predict");
  const [filename, setFilename] = useState("No file Uploaded");
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const history = useNavigate();

  // Function to handle navigation back to detection page
  const handleBackToDetection = () => {
    history('/attendance'); // Navigate to detection page
  };

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3001/upload", formData);

      if (response.data.message) {
        setVal(response.data.message);
      } else {
        // Update val based on the detection result
        // Assuming your detection result has a structure like { detection_results: [...] }
        setVal(response.data.detection_results ? "Classes detected!" : "No classes detected!");
      }

      setSnackbarSeverity("success");
      setSnackbarMessage("Data updated successfully");
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Error uploading file");
      setOpenSnackbar(true);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFilename(file.name);

    // Create a preview for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };


  return (
    <>
      <Navbar />
      <div className="relative" ref={comp}>
        {/* // style={{ height: '61vh' }} */}
        <div
          id="intro-slider"
          className="h-screen p-10 bg-l_orange  absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight">
          {/* style={{ height: '61vh' }} */}

          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl transform scale-200" id="title-1">
              Tracking
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-2">
              attendance
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-3">
              made
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-4">
              easy.
            </h1>
          </div>
        </div>
        <div className="h-screen flex justify-center items-center relative">
          <div
            id="bg_img"
            className="absolute inset-0 bg-gray-950">
            {/* style={{ height: '60vh' }} */}

          </div>
          <div className="hero min-h-screen" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" text-white max-w-md">
                <h1  className=" mb-5 text-5xl font-spaceGrotesk">Hello there</h1>
                <p className="mb-5">Welcome to the Attendance Portal. If you're a new user,<br/>Sign in to get started!</p>
                <button className="font-black text-white btn btn-wide mt-5 transition-all duration-300 hover:text-d_orange hover:border-d_orange">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mlh" className=" bg-d_grey mt-8 mb-10">
        <div className="mockup-window border bg-base-300">
          <div className="text-5xl flex justify-center px-4 py-16 bg-base-200">Machine Learning model for Face detection</div>
        </div>

        <div className="flex items-center justify-center mt-[-20] h-screen ">
          <div className=" card w-120 ml-10 glass">
            <figure>
              <form onSubmit={handleSubmit}>
                <div className="flex items-start justify-center bg-grey-lighter mb-5 mt-[5rem]">
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                    {imagePreview && <img src={imagePreview} alt="Preview" className="w-full mb-2" />}
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input type="file" name="file" className="hidden" onChange={(e) => { setFile(e.target.files[0]); handleFileUpload(e) }} />
                  </label>
                </div>
              </form>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-black text-white lg:text-xl">Upload the image file to detect.</h2>
              <h3 className=" text-white  ">The uploaded Image will be checked for<br/> Attendance marking</h3>
              <div className="flex items-center justify-center">
                <button className="font-black btn btn-wide mt-5 transition-all duration-300 hover:text-d_orange hover:border-d_orange" type="submit">
                  Predict
                </button>
              </div>
            </div>
          </div>

          <div className=" dropdown ml-10 items-center mt-[-22rem]">
            <div tabIndex={0} role="button" className="btn btn-warning m-1">Check Status</div>
            <ul tabIndex={0} className="font-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <span className="text-white">File Uploaded : {filename}</span>
              </li>
              <li>
                <span className="text-transparent bg-clip-text  text-white">
                  Detected Image is : {val}
                </span>
              </li>
            </ul>
          </div>
        </div>


        {/* <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar> */}
        <div>
          <button className=" btn btn-block" onClick={handleBackToDetection}>Attendance Log ➡️</button> {/* Button to navigate back to detection page */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portal;
