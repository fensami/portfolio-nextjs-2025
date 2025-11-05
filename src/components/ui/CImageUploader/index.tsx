import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../input";
import { cn } from "@/lib/utils";
type TImageUploaderProps = {
  label?: string;
  className?: string;
  imageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<File[] | []>>;
  setImagePreview: Dispatch<SetStateAction<[] | string[]>>;
};

const CImageUploader = ({
  label = "Upload Images",
  className,
  imageFiles,
  setImageFiles,
  setImagePreview,
}: TImageUploaderProps) => {
  // const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  // const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };
  console.log(imageFiles);

  return (
    <div className={cn("flex items-center w-full gap-4", className)}>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label
        htmlFor="image-uploader"
        className="border cursor-pointer h-auto w-auto"
      >
        {label}
      </label>
      {/* <div>
        {imagePreview.map((preview, index) => (
          <Image
            key={index}
            src={preview}
            alt="project image"
            width={500}
            height={500}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CImageUploader;
