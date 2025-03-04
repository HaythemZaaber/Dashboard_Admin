import { useState } from "react";
import ProfilePictureUpload from "../Components/Settings/profilePictureUpload";
import SettingsForm from "../Components/Settings/SettingsForm";
import SearchBar from "../Components/UI/SearchBar";

const Settings = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (file) => {
    setImageFile(file);
  };

  return (
    <div>
      <SearchBar placeholder="Settings" search={false} />

      <div className="p-10 bg-white shadow-xl rounded-lg">
        <span className="border-b-2 border-red-500 font-bold pb-2 text-lg text-red-500">
          Account Setting
        </span>

        <div className="border-b border-[#D9D9D9]">
          <div className=" sm:w-[40vw] md:w-[30vw] xl:w-[20vw] mx-auto my-5 mb-10">
            <ProfilePictureUpload
              label="Your Profile Picture"
              onImageUpload={handleImageUpload}
            />
            {imageFile && (
              <p>
                <span className="font-semibold mr-2 underline leading-5">
                  Image selected:{" "}
                </span>
                <span className="opacity-75 text-xs">{imageFile.name}</span>
              </p>
            )}
          </div>
        </div>

        <SettingsForm />
      </div>
    </div>
  );
};

export default Settings;
