// "use server"

// import { TSkillData } from "@/lib/types";

// export const createSkill = async (data: TSkillData) => {
//     try {

//         // const res = await fetch("https://portfolio-database-five.vercel.app/api/projects", {
//         const res = await fetch(`${process.env.BACKEND_URL}/skill`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             cache: "no-store",
//             body: JSON.stringify(data)
//             // next: { revalidate: 10 }
//         });
//         // console.log(res);
//         if (!res.ok) throw new Error(`Failed to create skill: ${res.status}`);
//         const skillsData = await res.json();
//         console.log("skilldatacreatre", skillsData);

//         return skillsData;
//     } catch (error) {
//         console.error("Error fetching projects:", error);
//         throw error;
//     }
// };



// export const getSkills = async () => {
//     try {

//         // const res = await fetch("https://portfolio-database-five.vercel.app/api/projects", {
//         const res = await fetch(`${process.env.BACKEND_URL}/skill`, {
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