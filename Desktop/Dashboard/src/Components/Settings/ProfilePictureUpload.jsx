import React, { useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const ProfilePictureUpload = ({ label, onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onImageUpload(file); // Pass the file to the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (event) => {
    event.stopPropagation();
    setImagePreview(null);
    onImageUpload(null);
    document.getElementById("image-upload").value = "";
  };

  return (
    <div className="mb-3">
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        {label}
      </label>
      <div
        style={{
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: imagePreview ? "#f9f9f9" : "#EDF2F6",
        }}
        className="flex justify-center items-center relative"
      >
        {imagePreview ? (
          <>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "250px",
                borderRadius: "4px",
              }}
            />
            <label
              htmlFor="image-upload"
              className="absolute bottom-2 right-2 bg-gray-500/70 bg-opacity-50 text-white p-3 rounded-full cursor-pointer flex flex-col items-center"
            >
              <FaCamera className="w-5 h-5" />
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                multiple
                onChange={(e) => {
                  handleImageChange(e);
                }}
              />
            </label>
            <div
              onClick={handleDeleteImage}
              className="absolute bottom-15 right-2 bg-gray-500/70 bg-opacity-50 text-white p-3 rounded-full cursor-pointer flex flex-col items-center"
            >
              <MdDelete className="w-5 h-5" />
            </div>
          </>
        ) : (
          <label
            htmlFor="image-upload"
            className="text-center flex justify-between flex-col items-center gap-3 cursor-pointer"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-upload"
            />
            <LuImagePlus size={50} className="text-[#666]" />
            <p>Upload your photo</p>
            <p style={{ fontSize: "12px", color: "#666" }}>(Click to upload)</p>
          </label>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureUpload;
