// "use client";

// import type React from "react";
// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { getProjectById } from "@/services/projectService";
// import Image from "next/image";
// // import { useRouter } from "next/router";

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

// const UpdateProject = () => {
//   const params = useParams();
//   const id = params.id as string;
//   const router = useRouter();

//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoadingData, setIsLoadingData] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentData, setCurrentData] = useState<ProjectData>({
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

//   useEffect(() => {
//     const fetchProjectData = async () => {
//       if (!id) {
//         setError("Project ID is missing");
//         setIsLoadingData(false);
//         return;
//       }

//       try {
//         setIsLoadingData(true);
//         setError(null);

//         // ✅ getProjectById already returns JSON data
//         const projectData = await getProjectById(id);
//         console.log("kaku data", projectData);

//         const fetchedData: ProjectData = {
//           name: projectData.data.name || "",
//           bannerImage: projectData.data.bannerImage || "",
//           description: projectData.data.description || "",
//           multipleDescriptions:
//             projectData.data.multipleDescriptions?.length > 0
//               ? projectData.data.multipleDescriptions
//               : [""],
//           liveLink: projectData.data.liveLink || "",
//           githubLink: projectData.data.githubLink || "",
//           serverLink: projectData.data.serverLink || "",
//           technologies:
//             projectData.data.technologies?.length > 0
//               ? projectData.data.technologies
//               : [""],
//           images:
//             projectData.data.images?.length > 0
//               ? projectData.data.images
//               : [""],
//         };

//         setCurrentData(fetchedData);
//         setFormData(fetchedData); // Initialize formData with fetched data
//       } catch (err) {
//         console.error("Error fetching project:", err);
//         setError("Failed to load project data");
//       } finally {
//         setIsLoadingData(false);
//       }
//     };

//     fetchProjectData();
//   }, [id, setIsLoadingData]);

//   const handleInputChange = (field: keyof ProjectData, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleImageChange = (index: number, value: string) => {
//     const newImages = [...formData.images];
//     newImages[index] = value;
//     setFormData((prev) => ({
//       ...prev,
//       images: newImages,
//     }));
//   };

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
//       setFormData((prev) => ({
//         ...prev,
//         images: newImages,
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

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!id) {
//       setError("Project ID is missing");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       const projectData: Partial<ProjectData> = {};

//       if (formData.name.trim() !== "") projectData.name = formData.name;
//       if (formData.bannerImage.trim() !== "")
//         projectData.bannerImage = formData.bannerImage;
//       if (formData.description.trim() !== "")
//         projectData.description = formData.description;
//       if (formData.liveLink.trim() !== "")
//         projectData.liveLink = formData.liveLink;
//       if (formData.githubLink.trim() !== "")
//         projectData.githubLink = formData.githubLink;
//       if (formData.serverLink.trim() !== "")
//         projectData.serverLink = formData.serverLink;

//       const filteredImages = formData.images.filter((img) => img.trim() !== "");
//       if (filteredImages.length > 0) projectData.images = filteredImages;

//       const filteredMultipleDescriptions = formData.multipleDescriptions.filter(
//         (desc) => desc.trim() !== ""
//       );
//       if (filteredMultipleDescriptions.length > 0)
//         projectData.multipleDescriptions = filteredMultipleDescriptions;

//       const filteredTechnologies = formData.technologies.filter(
//         (tech) => tech.trim() !== ""
//       );
//       if (filteredTechnologies.length > 0)
//         projectData.technologies = filteredTechnologies;

//       if (Object.keys(projectData).length === 0) {
//         setError("Please fill in at least one field to update");
//         setIsLoading(false);
//         return;
//       }

//       // const updatedProject = await updateProject(id, projectData);

//       // ✅ Normalize response so arrays never break your UI
//       const normalizedProject = {
//         name: updatedProject?.name || "",
//         bannerImage: updatedProject?.bannerImage || "",
//         description: updatedProject?.description || "",
//         liveLink: updatedProject?.liveLink || "",
//         githubLink: updatedProject?.githubLink || "",
//         serverLink: updatedProject?.serverLink || "",
//         multipleDescriptions:
//           updatedProject?.multipleDescriptions?.length > 0
//             ? updatedProject.multipleDescriptions
//             : [""],
//         technologies:
//           updatedProject?.technologies?.length > 0
//             ? updatedProject.technologies
//             : [""],
//         images:
//           updatedProject?.images?.length > 0 ? updatedProject.images : [""],
//       };

//       setCurrentData(normalizedProject);
//       alert("✅ Project updated successfully!");
//       router.push(`/allProject/${id}`);
//     } catch (error) {
//       console.error("Error updating project:", error);
//       setError("Failed to update project. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!id) {
//     return (
//       <div className="container mx-auto py-8 px-4 max-w-2xl">
//         <Card>
//           <CardContent className="py-8">
//             <p className="text-center text-red-500">
//               Error: Project ID is missing. Please provide a valid project ID.
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   if (isLoadingData) {
//     return (
//       <div className="container mx-auto py-8 px-4 max-w-2xl">
//         <Card>
//           <CardContent className="flex items-center justify-center py-8">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-400 mx-auto mb-4"></div>
//               <p>Loading project data...</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-8 px-4 max-w-2xl">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-center">
//             Update Project (ID: {id})
//           </CardTitle>
//           <CardDescription className="text-center">
//             Update the project entry with all the necessary details. Leave
//             fields empty to keep current values.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="md:grid grid-cols-2 gap-4 space-y-4">
//               {/* Project Name */}
//               <div className="mb-2 space-y-2">
//                 <Label htmlFor="name">Project Name</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder={currentData.name || "Enter project name"}
//                   value={formData.name}
//                   onChange={(e) => handleInputChange("name", e.target.value)}
//                 />
//               </div>

//               {/* Banner Image */}
//               <div className="space-y-2">
//                 <Label htmlFor="bannerImage">Banner Image URL</Label>
//                 {/* <Input
//                   id="bannerImage"
//                   type="file"
//                   onChange={(e) => {
//                     const files = e.target.files?.[0] || null;
//                     handleInputChange("bannerImage", files as any); // pass file instead of string
//                   }}
//                 /> */}
//                 <Input
//                   id="bannerImage"
//                   type="url"
//                   placeholder={
//                     currentData.bannerImage || "https://example.com/banner.jpg"
//                   }
//                   value={formData.bannerImage}
//                   onChange={(e) =>
//                     handleInputChange("bannerImage", e.target.value)
//                   }
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <div className="space-y-2">
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 placeholder={
//                   currentData.description || "Describe your project..."
//                 }
//                 value={formData.description}
//                 onChange={(e) =>
//                   handleInputChange("description", e.target.value)
//                 }
//                 rows={4}
//               />
//             </div>

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
//                     placeholder={
//                       currentData.multipleDescriptions[index] ||
//                       `Additional description ${index + 1}`
//                     }
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

//             <div className="md:grid grid-cols-2 gap-4 space-y-4">
//               {/* Live Link */}
//               <div className="space-y-2">
//                 <Label htmlFor="liveLink">Live Demo URL</Label>
//                 <Input
//                   id="liveLink"
//                   type="url"
//                   placeholder={
//                     currentData.liveLink || "https://your-project-demo.com"
//                   }
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
//                   placeholder={
//                     currentData.githubLink ||
//                     "https://github.com/username/repository"
//                   }
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
//                 placeholder={
//                   currentData.serverLink || "https://your-server.com"
//                 }
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
//                     placeholder={
//                       currentData.technologies[index] ||
//                       `Technology ${index + 1} (e.g., React, Node.js)`
//                     }
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

//               {formData.images.map((image, index) => (
//                 <div key={index} className="flex  gap-2">
//                   <Input
//                     type="url"
//                     placeholder={
//                       currentData.images[index] || `Image ${index + 1} URL`
//                     }
//                     value={image}
//                     onChange={(e) => handleImageChange(index, e.target.value)}
//                     className="flex-1"
//                   />
//                   <Image src={image} alt="image" width={220} height={120} />
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

//             {/* Form Actions */}
//             <div className="flex gap-4">
//               <Button type="submit" className="w-full" disabled={isLoading}>
//                 {isLoading ? "Updating Project..." : "Update Project"}
//               </Button>
//               {/* <Button
//                 type="button"
//                 variant="outline"
//                 className="w-full"
//                 onClick={handleReset}
//                 disabled={isLoading}
//               >
//                 Reset
//               </Button> */}
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UpdateProject;
