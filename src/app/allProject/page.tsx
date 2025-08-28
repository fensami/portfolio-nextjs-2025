// import React from "react";

// interface Project {
//   id: string;
//   name: string;
//   bannerImage: string;
//   description: string;
//   liveLink: string;
//   githubLink: string;
//   createdAt: string;
//   updatedAt: string;
//   // images: string[];
// }

// const AllProjectPage = async () => {
//   // Fetching data from your API
//   const res = await fetch("http://localhost:3001/api/projects", {
//     cache: "no-store", // so it fetches fresh data each time
//   });
//   const projects = await res.json();
//   // console.log(projects);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">All Projects</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.data.map((project: any) => (
//           <div
//             key={project.id}
//             className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={project.bannerImage}
//               alt={project.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{project.name}</h2>
//               <p className="text-gray-600 text-sm mt-2 line-clamp-3">
//                 {project.description}
//               </p>

//               <div className="mt-4 flex gap-3">
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
//                 >
//                   Live
//                 </a>
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   className="px-3 py-1 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900"
//                 >
//                   GitHub
//                 </a>
//               </div>

//               <p className="mt-3 text-xs text-gray-400">
//                 Created: {new Date(project.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProjectPage;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AllProjectPage = async () => {
  const res = await fetch("http://localhost:3001/api/projects", {
    cache: "no-store",
  });
  const projects = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.data.map((project: any) => (
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
              {/* <img
                src={project.bannerImage}
                alt={project.name}
                className="w-full h-48 object-cover"
              /> */}
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
