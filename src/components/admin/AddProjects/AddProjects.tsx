/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImagePreviewer from "@/components/ui/CImageUploader/ImagePreviewer";
import CImageUploader from "@/components/ui/CImageUploader";
import { toast } from "sonner";
import { createProject } from "@/services/projectService";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { createProject } from "@/services/projectService";

// interface ProjectData {
//   name: string;
//   bannerImage: string;
//   description: string;
//   multipleDescriptions: string[];
//   liveLink: string;
//   githubLink: string;
//   serverLink: string;
//   technologies: string[];
//   images: string[];
// }

// const AddProjects = (data) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [files, setFiles] = useState<{
//     bannerImage: File | null;
//     images: (File | null)[];
//   }>({
//     bannerImage: null,
//     images: [null],
//   });
//   const [formData, setFormData] = useState<ProjectData>({
//     name: "",
//     bannerImage: "",
//     description: "",
//     multipleDescriptions: [""],
//     liveLink: "",
//     githubLink: "",
//     serverLink: "",
//     technologies: [""],
//     images: [""],
//   });
//   const [error, setError] = useState<string | null>(null);

//   // Cloudinary upload function
//   const uploadToCloudinary = async (file: File): Promise<string> => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append(
//       "upload_preset",
//       process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
//     );
//     formData.append("portfolio-images", "dsc0hliud"); // Your cloud_name

//     try {
//       const response = await createProject(data);

//       if (!response.ok) {
//         throw new Error(
//           `Failed to upload image to Cloudinary: ${response.statusText}`
//         );
//       }
//       const data = await response.json();
//       return data.secure_url; // Return the Cloudinary URL
//     } catch (error) {
//       throw new Error("Cloudinary upload failed: " + (error as Error).message);
//     }
//   };

//   const handleInputChange = (field: keyof ProjectData, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleFileChange =
//     (field: "bannerImage" | "images", index?: number) =>
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       const file = e.target.files?.[0] || null;
//       if (file) {
//         // Validate file size (< 5MB)
//         if (file.size > 5 * 1024 * 1024) {
//           setError("Image size must be less than 5MB");
//           return;
//         }
//         // Validate file type
//         if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
//           setError("Only JPEG, PNG, or WebP images are allowed");
//           return;
//         }
//       }
//       if (field === "bannerImage") {
//         setFiles((prev) => ({ ...prev, bannerImage: file }));
//       } else if (index !== undefined) {
//         const newFiles = [...files.images];
//         newFiles[index] = file;
//         setFiles((prev) => ({ ...prev, images: newFiles }));
//       }
//     };

//   const handleMultipleDescriptionChange = (index: number, value: string) => {
//     const newDescriptions = [...formData.multipleDescriptions];
//     newDescriptions[index] = value;
//     setFormData((prev) => ({
//       ...prev,
//       multipleDescriptions: newDescriptions,
//     }));
//   };

//   const handleTechnologyChange = (index: number, value: string) => {
//     const newTechnologies = [...formData.technologies];
//     newTechnologies[index] = value;
//     setFormData((prev) => ({
//       ...prev,
//       technologies: newTechnologies,
//     }));
//   };

//   const addImageField = () => {
//     setFormData((prev) => ({
//       ...prev,
//       images: [...prev.images, ""],
//     }));
//     setFiles((prev) => ({
//       ...prev,
//       images: [...prev.images, null],
//     }));
//   };

//   const addMultipleDescriptionField = () => {
//     setFormData((prev) => ({
//       ...prev,
//       multipleDescriptions: [...prev.multipleDescriptions, ""],
//     }));
//   };

//   const addTechnologyField = () => {
//     setFormData((prev) => ({
//       ...prev,
//       technologies: [...prev.technologies, ""],
//     }));
//   };

//   const removeImageField = (index: number) => {
//     if (formData.images.length > 1) {
//       const newImages = formData.images.filter((_, i) => i !== index);
//       const newFiles = files.images.filter((_, i) => i !== index);
//       setFormData((prev) => ({
//         ...prev,
//         images: newImages,
//       }));
//       setFiles((prev) => ({
//         ...prev,
//         images: newFiles,
//       }));
//     }
//   };

//   const removeMultipleDescriptionField = (index: number) => {
//     if (formData.multipleDescriptions.length > 1) {
//       const newDescriptions = formData.multipleDescriptions.filter(
//         (_, i) => i !== index
//       );
//       setFormData((prev) => ({
//         ...prev,
//         multipleDescriptions: newDescriptions,
//       }));
//     }
//   };

//   const removeTechnologyField = (index: number) => {
//     if (formData.technologies.length > 1) {
//       const newTechnologies = formData.technologies.filter(
//         (_, i) => i !== index
//       );
//       setFormData((prev) => ({
//         ...prev,
//         technologies: newTechnologies,
//       }));
//     }
//   };

//   const validateForm = () => {
//     if (!formData.name.trim()) {
//       setError("Project name is required");
//       return false;
//     }
//     if (!formData.description.trim()) {
//       setError("Project description is required");
//       return false;
//     }
//     if (!files.bannerImage) {
//       setError("Banner image is required");
//       return false;
//     }
//     const urlPattern = /^(https?:\/\/)?[\w.-]+(\.[a-z]{2,})(\/.*)?$/;
//     if (formData.liveLink && !urlPattern.test(formData.liveLink)) {
//       setError("Invalid Live Demo URL");
//       return false;
//     }
//     if (formData.githubLink && !urlPattern.test(formData.githubLink)) {
//       setError("Invalid GitHub Repository URL");
//       return false;
//     }
//     if (formData.serverLink && !urlPattern.test(formData.serverLink)) {
//       setError("Invalid Server URL");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       // Upload banner image to Cloudinary
//       let bannerImageUrl = "";
//       if (files.bannerImage) {
//         bannerImageUrl = await uploadToCloudinary(files.bannerImage);
//       }

//       // Upload additional images to Cloudinary
//       const imageUrls = [];
//       for (const file of files.images) {
//         if (file) {
//           const url = await uploadToCloudinary(file);
//           imageUrls.push(url);
//         }
//       }

//       // Prepare project data
//       const projectData = {
//         ...formData,
//         bannerImage: bannerImageUrl,
//         images: imageUrls.filter((url) => url !== ""),
//         multipleDescriptions: formData.multipleDescriptions.filter(
//           (desc) => desc.trim() !== ""
//         ),
//         technologies: formData.technologies.filter(
//           (tech) => tech.trim() !== ""
//         ),
//       };

//       // Submit to backend using createProject service
//       await createProject(projectData);

//       alert("Project created successfully!");

//       // Reset form
//       setFormData({
//         name: "",
//         bannerImage: "",
//         description: "",
//         multipleDescriptions: [""],
//         liveLink: "",
//         githubLink: "",
//         serverLink: "",
//         technologies: [""],
//         images: [""],
//       });
//       setFiles({
//         bannerImage: null,
//         images: [null],
//       });
//     } catch (error) {
//       console.error("Error creating project:", error);
//       setError("Failed to create project. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8 px-4 max-w-2xl">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-center">
//             Add New Project
//           </CardTitle>
//           <CardDescription className="text-center">
//             Create a new project entry with all the necessary details
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="md:grid grid-cols-2 gap-4 space-y-6 md:space-y-0">
//               {/* Project Name */}
//               <div className="space-y-2">
//                 <Label htmlFor="name">Project Name *</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Enter project name"
//                   value={formData.name}
//                   onChange={(e) => handleInputChange("name", e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Banner Image */}
//               <div className="space-y-2">
//                 <Label htmlFor="bannerImage">Banner Image *</Label>
//                 <Input
//                   id="bannerImage"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange("bannerImage")}
//                   required
//                 />
//                 {files.bannerImage && (
//                   <div>
//                     <p className="text-sm text-gray-500">
//                       Selected: {files.bannerImage.name}
//                     </p>
//                     <img
//                       src={URL.createObjectURL(files.bannerImage)}
//                       alt="Banner Preview"
//                       className="mt-2 h-32 object-cover rounded"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Description */}
//             <div className="space-y-2">
//               <Label htmlFor="description">Description *</Label>
//               <Textarea
//                 id="description"
//                 placeholder="Describe your project..."
//                 value={formData.description}
//                 onChange={(e) =>
//                   handleInputChange("description", e.target.value)
//                 }
//                 rows={4}
//                 required
//               />
//             </div>

//             {/* Additional Descriptions */}
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <Label>Additional Descriptions</Label>
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="sm"
//                   onClick={addMultipleDescriptionField}
//                   className="flex items-center gap-2 bg-transparent"
//                 >
//                   + Add Description
//                 </Button>
//               </div>
//               {formData.multipleDescriptions.map((description, index) => (
//                 <div key={index} className="flex gap-2">
//                   <Textarea
//                     placeholder={`Additional description ${index + 1}`}
//                     value={description}
//                     onChange={(e) =>
//                       handleMultipleDescriptionChange(index, e.target.value)
//                     }
//                     rows={2}
//                     className="flex-1"
//                   />
//                   {formData.multipleDescriptions.length > 1 && (
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       onClick={() => removeMultipleDescriptionField(index)}
//                       className="px-3"
//                     >
//                       ×
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="md:grid grid-cols-2 gap-4 space-y-6 md:space-y-0">
//               {/* Live Link */}
//               <div className="space-y-2">
//                 <Label htmlFor="liveLink">Live Demo URL</Label>
//                 <Input
//                   id="liveLink"
//                   type="url"
//                   placeholder="https://your-project-demo.com"
//                   value={formData.liveLink}
//                   onChange={(e) =>
//                     handleInputChange("liveLink", e.target.value)
//                   }
//                 />
//               </div>

//               {/* GitHub Link */}
//               <div className="space-y-2">
//                 <Label htmlFor="githubLink">GitHub Repository URL</Label>
//                 <Input
//                   id="githubLink"
//                   type="url"
//                   placeholder="https://github.com/username/repository"
//                   value={formData.githubLink}
//                   onChange={(e) =>
//                     handleInputChange("githubLink", e.target.value)
//                   }
//                 />
//               </div>
//             </div>

//             {/* Server Link */}
//             <div className="space-y-2">
//               <Label htmlFor="serverLink">Server URL</Label>
//               <Input
//                 id="serverLink"
//                 type="url"
//                 placeholder="https://your-server.com"
//                 value={formData.serverLink}
//                 onChange={(e) =>
//                   handleInputChange("serverLink", e.target.value)
//                 }
//               />
//             </div>

//             {/* Technologies */}
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <Label>Technologies Used</Label>
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="sm"
//                   onClick={addTechnologyField}
//                   className="flex items-center gap-2 bg-transparent"
//                 >
//                   + Add Technology
//                 </Button>
//               </div>
//               {formData.technologies.map((technology, index) => (
//                 <div key={index} className="flex gap-2">
//                   <Input
//                     type="text"
//                     placeholder={`Technology ${
//                       index + 1
//                     } (e.g., React, Node.js)`}
//                     value={technology}
//                     onChange={(e) =>
//                       handleTechnologyChange(index, e.target.value)
//                     }
//                     className="flex-1"
//                   />
//                   {formData.technologies.length > 1 && (
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       onClick={() => removeTechnologyField(index)}
//                       className="px-3"
//                     >
//                       ×
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Additional Images */}
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <Label>Additional Images</Label>
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="sm"
//                   onClick={addImageField}
//                   className="flex items-center gap-2 bg-transparent"
//                 >
//                   + Add Image
//                 </Button>
//               </div>
//               {formData.images.map((_, index) => (
//                 <div key={index} className="flex gap-2">
//                   <Input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange("images", index)}
//                     className="flex-1"
//                   />
//                   {files.images[index] && (
//                     <div>
//                       <p className="text-sm text-gray-500">
//                         Selected: {files.images[index]?.name}
//                       </p>
//                       <img
//                         src={URL.createObjectURL(files.images[index]!)}
//                         alt={`Image ${index + 1} Preview`}
//                         className="mt-2 h-32 object-cover rounded"
//                       />
//                     </div>
//                   )}
//                   {formData.images.length > 1 && (
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       onClick={() => removeImageField(index)}
//                       className="px-3"
//                     >
//                       ×
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Submit Button */}
//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading ? "Creating Project..." : "Create Project"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AddProjects;

// ("use client");

const AddProjects = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // Multiple Descriptions
    const multipleDescriptions = data?.multipleDescriptions
      .split(",")
      .map((description: string) => description.trim())
      .filter((description: string) => description !== "");
    // Technologies
    const technologies = data?.technologies
      .split(",")
      .map((technologies: string) => technologies.trim())
      .filter((technologies: string) => technologies !== "");
    // Modified Data
    const modifiedData = {
      ...data,
      multipleDescriptions: multipleDescriptions,
      technologies: technologies,
    };
    console.log("all data", modifiedData);

    try {
      const formData = new FormData();

      formData.append("data", JSON.stringify(modifiedData));
      imageFiles.forEach((file) => {
        formData.append("images", file); // 👈 append each file correctly
      });
      console.log(formData);

      // formData.append("images", file);

      const res = await createProject(formData);

      console.log(res);

      if (res.success) {
        toast.success(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl mx-auto p-5 my-5">
      <div className="flex flex-col items-center justify-center space-x-4 mb-5">
        {/* <Logo /> */}
        <h2>Logo</h2>

        <div>
          <h1 className="text-xl font-semibold">Create Project</h1>
          <p className="font-extralight text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImagePreview={setImagePreview}
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                // label="Upload Logo"
              />
            ) : (
              <CImageUploader
                imageFiles={imageFiles}
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                className="flex"
              />
            )} */}
            {/* <FormField
              control={form.control}
              name="bannerImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>bannerImage </FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="multipleDescriptions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>multipleDescriptions </FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>liveLink</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>githubLink</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serverLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>serverLink</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>technologies</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="socialMediaLinks.twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="socialMediaLinks.instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 items-center">
            <div className="col-span-4 md:col-span-3">
              <FormField
                control={form.control}
                name="servicesOffered"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Offered</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-36"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <CImageUploader
              imageFiles={imageFiles}
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              className="flex"
            />
            <ImagePreviewer
              setImagePreview={setImagePreview}
              setImageFiles={setImageFiles}
              imagePreview={imagePreview}
              // label="Upload Logo"
            />
            {/* {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                className="mt-8"
              />
            ) : (
              <div className="mt-8">
                <NMImageUploader
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label="Upload Logo"
                />
              </div>
            )} */}
          </div>

          <Button type="submit" className="mt-5 w-full">
            {isSubmitting ? "Creating...." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProjects;
