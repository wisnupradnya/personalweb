// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "E-Commerce Frontend",
//     desc: "Responsive UI for online store",
//     image: "/web1.png",
//   },
//   {
//     title: "Interior Design Website",
//     desc: "Clean layout for design studio",
//     image: "/web2.png",
//   },
//   {
//     title: "Navigation System UI",
//     desc: "User-friendly navigation flow",
//     image: "/web3.png",
//   },
//   {
//     title: "Landing Page Frontend",
//     desc: "Modern marketing landing page",
//     image: "/web4.png",
//   },
//   {
//     title: "Store Management System",
//     desc: "Dashboard & data management UI",
//     image: "/web5.png",
//   },
//   {
//     title: "Modern Web Interface",
//     desc: "Minimal & scalable frontend",
//     image: "/web6.png",
//   },
// ];

// export default function Portfolio() {
//   return (
//     <section className="bg-white px-6 py-24 lg:px-48">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mb-16"
//       >
//         <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
//           Portfolio
//         </h2>
//         <p className="mt-4 text-gray-500 max-w-xl">
//           Selected frontend projects focused on clarity, usability, and clean
//           implementation.
//         </p>
//       </motion.div>

//       {/* Projects */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {projects.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.05 }}
//             viewport={{ once: true }}
//             className="group"
//           >
//             {/* Image */}
//             <div className="overflow-hidden rounded-2xl border border-gray-200">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={1200}
//                 height={800}
//                 className=" lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Text */}
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {item.title}
//               </h3>
//               <p className="mt-1 text-gray-500 text-sm">{item.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
