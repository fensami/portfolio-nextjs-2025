// import { getCurrentUser } from "@/utils/actions/loginUser";
// import Image from "next/image";
// import React from "react";

// interface ProjectPageProps {
//   params: { id: string };
// }

// const ProjectPage = async ({ params }: ProjectPageProps) => {
//   const currentUser = await getCurrentUser();

//   const res = await fetch(`http://localhost:3001/api/projects/${params.id}`, {
//     cache: "no-store",
//   });
//   const project = await res.json();
//   console.log(project);

//   // Check if your API returns { data: {...} } or just the project object
//   const p = project.data || project;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold">{p.name}</h1>
//       <div className="relative w-full h-64">
//         <Image
//           src={p.bannerImage}
//           alt={p.name}
//           fill
//           className="w-full h-full object-cover rounded-xl mt-4"
//         />
//       </div>
//       {/* <img
//         src={p.bannerImage}
//         alt={p.name}
//         className="w-full h-64 object-cover rounded-xl mt-4"
//       /> */}
//       <p className="mt-6 text-gray-700">{p.description}</p>
//       <div>
//         {project.data.multipleDescriptions &&
//           project.data.multipleDescriptions.length > 0 && (
//             <ul>
//               {project.data.multipleDescriptions.map(
//                 (desc: string, index: number) => (
//                   <li key={index}>. {desc}</li>
//                 )
//               )}
//             </ul>
//           )}
//       </div>
//       <div className="mt-6 flex gap-3">
//         <a
//           href={p.liveLink}
//           target="_blank"
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Live
//         </a>
//         <a
//           href={p.githubLink}
//           target="_blank"
//           className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
//         >
//           GitHub
//         </a>
//         {currentUser?.role === "ADMIN" && (
//           <a
//             href={`/admin/updateProject/${p.id}`}
//             target="_blank"
//             className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
//           >
//             Update
//           </a>
//         )}
//         {/* <a
//           href={`/admin/updateProject/${p.id}`}
//           target="_blank"
//           className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
//         >
//           Update
//         </a> */}
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;

import { getCurrentUser } from "@/utils/actions/loginUser";
import Image from "next/image";
import React from "react";

interface ProjectPageProps {
  params: Promise<{ id: string }>; // Updated type
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params; // Await the params to get the id
  const currentUser = await getCurrentUser();

  const res = await fetch(`${process.env.BACKEND_URL}/api/projects/${id}`, {
    cache: "no-store",
  });
  const project = await res.json();
  // console.log(project);

  // Check if your API returns { data: {...} } or just the project object
  const p = project.data || project;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{p.name}</h1>
      <div className="relative w-full h-64">
        <Image
          src={p.bannerImage}
          alt={p.name}
          fill
          className="w-full h-full object-cover rounded-xl mt-4"
        />
      </div>
      <p className="mt-6 text-gray-700">{p.description}</p>
      <div>
        {project.data?.multipleDescriptions &&
          project.data.multipleDescriptions.length > 0 && (
            <ul>
              {project.data.multipleDescriptions.map(
                (desc: string, index: number) => (
                  <li key={index}>. {desc}</li>
                )
              )}
            </ul>
          )}
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href={p.liveLink}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Live
        </a>
        <a
          href={p.githubLink}
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        >
          GitHub
        </a>
        {currentUser?.role === "ADMIN" && (
          <a
            href={`/admin/updateProject/${p.id}`}
            target="_blank"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            Update
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
