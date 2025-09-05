import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/utils/actions/projectsData";

export type Project = {
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
const AllProjectPage = async () => {
  const projects = await getProjects();
  // console.log(projects);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.data.map((project: Project) => (
          <Link
            key={project.id}
            href={`/allProject/${project.id}`} // ✅ navigating with params id
          >
            <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer">
              <div className="relative w-full h-48">
                <Image
                  src={project.bannerImage}
                  alt={project.name}
                  fill
                  objectFit="cover"
                  // className="w-full h-full  absolute"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-gray-400">
                  Created: {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjectPage;
