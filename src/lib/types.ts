// Shared types for the application
interface User {
    name: string;
    email: string;
}
export interface UserData {
    password: string;
    user: User;
}



export type RegisterResponse = {
    password: string
    user: {
        name: string
        email: string
    }
}
/*==== Project Type ====*/
export type TProject = {
    id: string;
    name: string;
    data: object;
    bannerImage: string;
    description: string;
    multipleDescriptions: string[]; // ✅ explicitly typed array
    liveLink: string;
    githubLink: string;
    serverLink: string;
    technologies: string[]; // ✅ array of strings
    createdAt: string; // ISO date string from backend
    updatedAt: string;
    images: string[]; // assuming these are URLs
};

export type TSkillData = {
    name: string
    logoImage: string
}