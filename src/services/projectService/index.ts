// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";

// import { cookies } from "next/headers";

// export const getProjects = async () => {
//     try {

//         // const res = await fetch("https://portfolio-database-five.vercel.app/api/projects", {
//         const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             cache: "no-store",
//             // next: { revalidate: 10 }
//         });
//         // console.log(res);

//         const projectsData = await res.json();
//         // console.log("projectsData", projectsData);

//         return projectsData;
//     } catch (error) {
//         console.error("Error fetching projects:", error);
//         throw error;
//     }
// };


// export const getProjectById = async (id: any) => {
//     try {
//         if (!id) throw new Error("Project ID is required");

//         const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             cache: "no-store", // disables caching (fresh data every time)
//         });

//         if (!res.ok) {
//             throw new Error(`Failed to fetch project with ID ${id}: ${res.statusText}`);
//         }

//         const projectData = await res.json();
//         return projectData;
//     } catch (error) {
//         console.error("Error fetching project:", error);
//         throw error;
//     }
// };


// // export const updateProject = async (id, updatedData) => {
// //     try {
// //         if (!id) throw new Error("Project ID is required");

// //         const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
// //             method: "PUT", // ✅ use PUT to update
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify(updatedData), // ✅ send updated data
// //         });

// //         if (!res.ok) {
// //             throw new Error(`Failed to update project with ID ${id}: ${res.statusText}`);
// //         }

// //         const updatedProject = await res.json();
// //         return updatedProject;
// //     } catch (error) {
// //         console.error("Error updating project:", error);
// //         throw error;
// //     }
// // };

// export interface ProjectData {
//     name: string;
//     description: string;
//     multipleDescriptions: string[];
//     liveLink: string;
//     githubLink: string;
//     serverLink: string;
//     technologies: string[];
//     images: string[];
// }

// export const createProject = async (data: any) => {
//     try {
//         const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
//             method: "POST",
//             headers: {
//                 Authorization: (await cookies()).get("accessToken")!.value,
//             },
//             body: data,
//         });

//         if (!res.ok) {
//             throw new Error(`Failed to create project: ${res.status} ${res.statusText}`);
//         }

//         return res.json();
//     } catch (error) {
//         console.error("Error creating project:", error);
//         throw error;
//     }
// };
// // ✅ New function for POST
// // export const createProject = async (projectData: any) => {
// //     try {
// //         if (!process.env.BACKEND_URL) {
// //             throw new Error("BACKEND_URL is not defined in environment variables");
// //         }

// //         const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify(projectData),
// //         });

// //         if (!res.ok) {
// //             throw new Error(`Failed to create project. Status: ${res.status}`);
// //         }

// //         return await res.json();
// //     } catch (error) {
// //         console.error("Error creating project:", error);
// //         throw error;
// //     }
// // };