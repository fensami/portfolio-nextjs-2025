"use server";

export const getProjects = async () => {
    try {

        // const res = await fetch("https://portfolio-database-five.vercel.app/api/projects", {
        const res = await fetch(`${process.env.BACKEND_URL}/api/projects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
            // next: { revalidate: 10 }
        });
        // console.log(res);

        const projectsData = await res.json();
        // console.log("projectsData", projectsData);

        return projectsData;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};