"use client";
import sendMail from "@/components/utilities/sendMail";
import client, { createReview } from "@/sanity/sanity-utils";
import { Avatar, Backdrop, Button, CircularProgress, Rating, TextField } from "@mui/material";
import React, { useState } from "react";

const AddReview = () => {
  const [isImage, setIsImage] = useState(false);
  const [isSubmited, setIsSubmit] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [open , setOpen] = useState(false)
  const [imageAsset, setImageAsset] = useState("");
  const [formState, setFormState] = useState({
    userName: "",
    message: "",
    email: "",
    rating: 5,
  });
  const handleChange = (event) => {
    setFormState((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const uploadImage = (e) => {
    setOpen(true)
    const { type, name } = e.target.files[0];
    
    client.assets
      .upload("image", e.target.files[0], { contentType: type, filename: name })
      .then((doc) => {
        setImageAsset(doc);
        setIsImage(true);
        setOpen(false)
        
      })
      .catch((err) => console.log(err));
      
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!imageAsset){ 
      setErrorMessage('please select image')
      setTimeout(() => {
        setErrorMessage('')
      }, 3000);
      return
  }
    setOpen(true)
    // document
    const doc = {
      ...formState,
      rating : Number(formState.rating),
      _type: "review",
      published : false,
      userImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset?._id,
        },
      }
    }
    const result = await createReview(doc)
    const mail = await sendMail(formState, setFormState)
    setOpen(false)
    setIsSubmit(true)
    
    };
   
  

  return (
    <div className="  justify-between flex flex-col gap-3 lg:gap-5 mb-8 px-4 md:px-30 lg:px-40 xl:px-60">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="font-bold text-2xl my-8">
        <h4 className="theme-line flex flex-col gap-2">Add Review</h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center "
      >
        <div className="user-image flex gap-4 items-center">
          <Avatar
            alt="Remy Sharp"
            src={imageAsset?.url}
            sx={{ width: 70, height: 70 }}
          />
          <div className="input relative flex flex-col justify-center items-center bg-gray-400 px-8 h-1/2 py-2 rounded-xl text-white">
            <p>{isImage ? "Change Image" : "Upload Image"}</p>
            <input
              onChange={uploadImage}
              className="absolute opacity-0 w-full h-full "
              type="file"
              name="image"
              id="image"
            />
          </div>
        </div>
        <Rating
          name="rating"
          value={formState.rating}
          onChange={handleChange}
          size="large"
        />

        <TextField
          type="name"
          required
          name="userName"
          value={formState.userName}
          onChange={handleChange}
          id="name"
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          name="email"
          value={formState.email}
          onChange={handleChange}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          required
          name="message"
          value={formState.message}
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        {errorMessage && 
        <div className="error font-semibold text-red-600 capitalize">
          <p>{errorMessage}</p>
        </div>
          
        }
        <div className="submit">
          {isSubmited ?
          <button
          type="submit"
          disabled
          className="bg-gray-400 px-6 py-3 text-white font-semibold outline-none shadow-lg rounded-xl"
        >
          Thx for your review
        </button>
          : 
          <button
            type="submit"
            className="bg-theme px-6 py-3 text-white font-semibold outline-none shadow-lg rounded-xl"
          >
            Submit
          </button>
          }
        </div>
      </form>
    </div>
  );
};

export default AddReview;
