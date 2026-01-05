// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function HomePage() {
// //   const navigate = useNavigate();

// //   const categories = [
// //     {
// //       label: "Men",
// //       image:
// //         "https://static.zara.net/assets/public/6a53/a7dd/57954a98b67f/2045622b9e70/12611420800-000-a1/12611420800-000-a1.jpg?ts=1747991230554&w=552",
// //       link: "/collections/men",
// //     },
// //     {
// //       label: "Women",
// //       image:
// //         "https://static.zara.net/assets/public/7d77/06f4/1fcf4c8796f9/79b965d6ba29/12157610105-p/12157610105-p.jpg?ts=1757662726046&w=830",
// //       link: "/collections/women",
// //     },
// //     {
// //       label: "Kids",
// //       image:
// //         "https://static.zara.net/assets/public/a66d/f539/46b440c38bdc/a0b95d8df8c7/05431773812-p/05431773812-p.jpg?ts=1760688794634&w=830",
// //       link: "/collections/kids",
// //     },
// //   ];

// //   const featuredShoes = [
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers",
// //       name: "Blktop Rider Suede Sneakers",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/01/sv01/fnd/IND/fmt/png/Club Kayzer Cushioning Shoes",
// //       name: "Club Kayzer Cushioning Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312076/06/sv01/fnd/IND/fmt/png/Conduct-Pro Running Shoes",
// //       name: "Conduct Pro Running Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/01/sv01/fnd/IND/fmt/png/Palermo Sneakers",
// //       name: "Palermo Sneakers",
// //     },
// //     {
// //       src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8507bfd1-93ca-43dd-9e34-dd6c30afc7f1/nike-shox-ride-2.jpg",
// //       name: "Nike Shox Ride 2",
// //     },
// //     {
// //       src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/xa3j5pmlqu9lz6y1xbsb/NIKE+SHOX+TL.png",
// //       name: "Nike Shox TL",
// //     },
// //     {
// //       src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9e608f62-74f6-4d2f-a614-c2fc1c529234/NIKE+AIR+MAX+PLUS.png",
// //       name: "Nike Air Max Plus®",
// //     },
// //   ];

// //   const balletShoes = [
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404264/01/sv01/fnd/IND/fmt/png/Speedcat-Pearlized-Women's-Ballet-Shoes",
// //       name: "Speedcat Pearlized Ballet Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/406758/01/sv01/fnd/IND/fmt/png/Speedcat-Suede-Cafe-Women's-Ballet-Shoes",
// //       name: "Speedcat Suede Café Ballet Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/401287/06/sv01/fnd/IND/fmt/png/Speedcat-Suede-Ballet-Women's-Shoes",
// //       name: "Speedcat Suede Ballet Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404395/01/sv01/fnd/IND/fmt/png/PUMA-x-ROS%C3%89-Speedcat-Ballet-Women's-Shoes",
// //       name: "PUMA x ROSÉ Ballet Shoes",
// //     },
// //   ];

// //   return (
// //     <div className="w-screen overflow-hidden bg-gray-50 font-urbanist">
      
// //       <div className="relative h-screen w-full overflow-hidden">
// //         <img
// //           src="https://www.superkicks.in/cdn/shop/files/jordan-desktop.gif?v=1758706564"
// //           alt="Shoes Banner"
// //           className="absolute inset-0 w-screen h-full object-cover brightness-60"
// //         />

// //         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
// //           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-lg">
// //             Step Into Style
// //           </h1>

// //           <p className="text-lg sm:text-xl italic text-gray-200 mb-35">
// //             Discover the latest collections at{" "}
// //             <span className="font-semibold text-white">Shoosfie</span>
// //           </p>

// //           <button
// //             onClick={() => navigate("/products")}
// //             className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition mb-20"
// //           >
// //             Shop Now
// //           </button>
// //         </div>
// //       </div>

// // <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
// //   {categories.map((item, index) => (
// //     <div
// //       key={index}
// //       className="relative group overflow-hidden cursor-pointer rounded-lg shadow-lg"
// //     >
      
// //       <img
// //         src={item.image}
// //         alt={item.label}
// //         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //       />

      
// //       <div
// //         className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center 
// //                    opacity-0 group-hover:opacity-100 transition duration-300"
// //       >
// //         <h2 className="text-3xl font-bold text-white mb-6">
// //           {item.label}
// //         </h2>

      
// //         <button
// //           onClick={() => navigate(item.link)}
// //           className="
// //             px-8 py-3 rounded-full font-semibold
// //             text-white border-2 border-white
// //             bg-transparent
// //             hover:bg-white/20
// //             transition duration-300
// //           "
// //         >
// //           Shop Now
// //         </button>
// //       </div>
// //     </div>
// //   ))}
// // </div>

      
// //       <div>
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           className="w-full"
// //           src="https://www.peltzshoes.com/cdn/shop/videos/c/vp/70334af3a86b409c886524945719c1cb/70334af3a86b409c886524945719c1cb.HD-720p-4.5Mbps-54545918.mp4?v=0"
// //         ></video>
// //       </div>

    
// // <div className="max-w-7xl mx-auto px-4 py-12 relative">
// //   <h2 className="text-3xl font-bold mb-6">Featured Shoes</h2>

// //   <div className="relative overflow-hidden">

// //     <div
// //       id="featured-carousel"
// //       className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar py-3"
// //     >
// //       {featuredShoes.map((shoe, index) => (
// //         <div
// //           key={index}
// //           className="min-w-[260px] bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] 
// //                      hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition cursor-pointer"
// //         >
// //           <img
// //             src={shoe.src}
// //             alt={shoe.name}
// //             className="w-full h-64 object-contain rounded-lg hover:scale-105 transition duration-300"
// //           />
// //           <p className="mt-4 text-center text-lg font-semibold">
// //             {shoe.name}
// //           </p>
// //         </div>
// //       ))}
// //     </div>


// //     <button
// //       onClick={() => {
// //         document.getElementById("featured-carousel").scrollBy({
// //           left: -350,
// //           behavior: "smooth",
// //         });
// //       }}
// //       className="
// //         absolute top-1/2 left-2 -translate-y-1/2 
// //         bg-white/80 backdrop-blur-sm 
// //         shadow-md hover:shadow-lg 
// //         p-3 rounded-full 
// //         hover:bg-white transition z-10
// //       "
// //     >
// //       <span className="text-xl font-bold">‹</span>
// //     </button>

  
// //     <button
// //       onClick={() => {
// //         document.getElementById("featured-carousel").scrollBy({
// //           left: 350,
// //           behavior: "smooth",
// //         });
// //       }}
// //       className="
// //         absolute top-1/2 right-2 -translate-y-1/2 
// //         bg-white/80 backdrop-blur-sm 
// //         shadow-md hover:shadow-lg 
// //         p-3 rounded-full 
// //         hover:bg-white transition z-10
// //       "
// //     >
// //       <span className="text-xl font-bold">›</span>
// //     </button>
// //   </div>
// // </div>


      
// //       <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
// //         <img
// //           src="https://www.superkicks.in/cdn/shop/files/collab-room-Desk-_1.gif?v=1756813063"
// //           alt=""
// //           className="w-full h-[550px] object-cover"
// //         />

// //         <img
// //           src="https://www.rotterdamsballonnenbedrijf.nl/blog/images/schoenenwinkels-rotterdam-centrum.jpg"
// //           alt=""
// //           className="w-full h-[550px]"
// //         />
// //       </div>

    
// //       <div>
// //         <img
// //           src="https://neemans.com/cdn/shop/files/Desktop_-_Product_in_Focus.jpg?v=1759919229&width=1920"
// //           alt=""
// //         />
// //       </div>

    
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-8 py-8">
// //         <video autoPlay loop muted className="w-full h-140 object-cover shadow"
// //           src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ucoyx3xwlruy59q8rzlck4co.mp4#t=0.1"
// //         ></video>

// //         <video autoPlay loop muted className="w-full h-140 object-cover shadow"
// //           src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_xv890i8eq4qh1da3mqqxo63s.mp4#t=0.1"
// //         ></video>

// //         <video autoPlay loop muted className="w-full h-140 object-cover shadow"
// //           src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ycfi8g82tzgh7yg3eafalw59.mp4#t=0.1"
// //         ></video>

// //         <video autoPlay loop muted className="w-full h-140 object-cover shadow"
// //           src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_nmt37oi0y17amgoyiql7lcoj.mp4#t=0.1"
// //         ></video>

// //         <video autoPlay loop muted className="w-full h-140 object-cover shadow"
// //           src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ule9g54xcx5vx203i328p55q.mp4#t=0.1"
// //         ></video>
// //       </div>

    
// //       <div className="max-w-7xl mx-auto px-4 py-12">
// //         <h2 className="text-3xl font-bold mb-8">Ballet Collection</h2>

// //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
// //           {balletShoes.map((shoe, index) => (
// //             <div key={index} className="flex flex-col items-center">
// //               <img
// //                 src={shoe.src}
// //                 alt={shoe.name}
// //                 className="w-64 h-64 object-contain rounded-lg shadow-md hover:scale-105 transition"
// //               />
// //               <p className="mt-2 text-center text-lg font-medium">{shoe.name}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
      
// //       <div className="flex justify-center py-10">
// //         <button
// //           onClick={() => navigate("/products")}
// //           className="bg-gradient-to-r from-black to-indigo-500 text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition"
// //         >
// //           View All Products
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }







// // import React from "react";
// // import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// // export default function HomePage() {
// //   const categories = [
// //     {
// //       label: "Men",
// //       image:
// //         "https://static.zara.net/assets/public/6a53/a7dd/57954a98b67f/2045622b9e70/12611420800-000-a1/12611420800-000-a1.jpg?ts=1747991230554&w=552",
// //       link: "/collections/men",
// //     },
// //     {
// //       label: "Women",
// //       image:
// //         "https://static.zara.net/assets/public/7d77/06f4/1fcf4c8796f9/79b965d6ba29/12157610105-p/12157610105-p.jpg?ts=1757662726046&w=830",
// //       link: "/collections/women",
// //     },
// //     {
// //       label: "Kids",
// //       image:
// //         "https://static.zara.net/assets/public/a66d/f539/46b440c38bdc/a0b95d8df8c7/05431773812-p/05431773812-p.jpg?ts=1760688794634&w=830",
// //       link: "/collections/kids",
// //     },
// //   ];

// //   const featuredShoes = [
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers",
// //       name: "Blktop Rider Suede Sneakers",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/01/sv01/fnd/IND/fmt/png/Club Kayzer Cushioning Shoes",
// //       name: "Club Kayzer Cushioning Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312076/06/sv01/fnd/IND/fmt/png/Conduct-Pro Running Shoes",
// //       name: "Conduct Pro Running Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/01/sv01/fnd/IND/fmt/png/Palermo Sneakers",
// //       name: "Palermo Sneakers",
// //     },
// //     {
// //       src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8507bfd1-93ca-43dd-9e34-dd6c30afc7f1/nike-shox-ride-2.jpg",
// //       name: "Nike Shox Ride 2",
// //     },
// //     {
// //       src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/xa3j5pmlqu9lz6y1xbsb/NIKE+SHOX+TL.png",
// //       name: "Nike Shox TL",
// //     },
// //     {
// //       src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9e608f62-74f6-4d2f-a614-c2fc1c529234/NIKE+AIR+MAX+PLUS.png",
// //       name: "Nike Air Max Plus®",
// //     },
// //   ];

// //   const balletShoes = [
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404264/01/sv01/fnd/IND/fmt/png/Speedcat-Pearlized-Women's-Ballet-Shoes",
// //       name: "Speedcat Pearlized Ballet Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/406758/01/sv01/fnd/IND/fmt/png/Speedcat-Suede-Cafe-Women's-Ballet-Shoes",
// //       name: "Speedcat Suede Café Ballet Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/401287/06/sv01/fnd/IND/fmt/png/Speedcat-Suede-Ballet-Women's-Shoes",
// //       name: "Speedcat Suede Ballet Shoes",
// //     },
// //     {
// //       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404395/01/sv01/fnd/IND/fmt/png/PUMA-x-ROS%C3%89-Speedcat-Ballet-Women's-Shoes",
// //       name: "PUMA x ROSÉ Ballet Shoes",
// //     },
// //   ];

// //   const navigate = (path) => {
// //     window.location.href = path;
// //   };

// //   return (
// //     <div className="w-full bg-white">
// //       {/* Hero Section */}
// //       <div className="relative h-screen w-full overflow-hidden">
// //         <img
// //           src="https://www.superkicks.in/cdn/shop/files/jordan-desktop.gif?v=1758706564"
// //           alt="Shoes Banner"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-black/30"></div>

// //         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
// //           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in">
// //             Step Into Style
// //           </h1>
// //           <p className="text-xl md:text-2xl mb-12 font-light tracking-wide">
// //             Discover the latest collections at{" "}
// //             <span className="font-semibold">Shoosfie</span>
// //           </p>
// //           <button
// //             onClick={() => navigate("/products")}
// //             className="group bg-white text-black px-10 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
// //           >
// //             Shop Now
// //             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Categories Section */}
// //       <div className="max-w-7xl mx-auto py-20 px-6">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {categories.map((item, index) => (
// //             <div
// //               key={index}
// //               className="relative group overflow-hidden aspect-[3/4] cursor-pointer"
// //             >
// //               <img
// //                 src={item.image}
// //                 alt={item.label}
// //                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
// //               <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// //                 <h2 className="text-4xl font-bold text-white mb-4">
// //                   {item.label}
// //                 </h2>
// //                 <button
// //                   onClick={() => navigate(item.link)}
// //                   className="bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
// //                 >
// //                   Shop {item.label}
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Video Section */}
// //       <div className="w-full">
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           className="w-full h-auto"
// //           src="https://www.peltzshoes.com/cdn/shop/videos/c/vp/70334af3a86b409c886524945719c1cb/70334af3a86b409c886524945719c1cb.HD-720p-4.5Mbps-54545918.mp4?v=0"
// //         ></video>
// //       </div>

// //       {/* Featured Shoes Section */}
// //       <div className="max-w-7xl mx-auto px-6 py-20">
// //         <div className="flex justify-between items-center mb-10">
// //           <h2 className="text-4xl font-bold text-gray-900">Featured Shoes</h2>
// //           <button
// //             onClick={() => navigate("/products")}
// //             className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition flex items-center gap-1"
// //           >
// //             View All <ArrowRight className="w-4 h-4" />
// //           </button>
// //         </div>

// //         <div className="relative">
// //           <div
// //             id="featured-carousel"
// //             className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
// //           >
// //             {featuredShoes.map((shoe, index) => (
// //               <div
// //                 key={index}
// //                 className="min-w-[280px] bg-white group cursor-pointer"
// //               >
// //                 <div className="relative overflow-hidden bg-gray-50 mb-4">
// //                   <img
// //                     src={shoe.src}
// //                     alt={shoe.name}
// //                     className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                 </div>
// //                 <h3 className="text-base font-medium text-gray-900 px-2">
// //                   {shoe.name}
// //                 </h3>
// //               </div>
// //             ))}
// //           </div>

// //           <button
// //             onClick={() => {
// //               document.getElementById("featured-carousel").scrollBy({
// //                 left: -350,
// //                 behavior: "smooth",
// //               });
// //             }}
// //             className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
// //           >
// //             <ChevronLeft className="w-6 h-6" />
// //           </button>

// //           <button
// //             onClick={() => {
// //               document.getElementById("featured-carousel").scrollBy({
// //                 left: 350,
// //                 behavior: "smooth",
// //               });
// //             }}
// //             className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
// //           >
// //             <ChevronRight className="w-6 h-6" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Dual Image Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-2">
// //         <img
// //           src="https://www.superkicks.in/cdn/shop/files/collab-room-Desk-_1.gif?v=1756813063"
// //           alt="Collection"
// //           className="w-full h-[600px] object-cover"
// //         />
// //         <img
// //           src="https://www.rotterdamsballonnenbedrijf.nl/blog/images/schoenenwinkels-rotterdam-centrum.jpg"
// //           alt="Store"
// //           className="w-full h-[600px] object-cover"
// //         />
// //       </div>

// //       {/* Full Width Banner */}
// //       <div className="w-full">
// //         <img
// //           src="https://neemans.com/cdn/shop/files/Desktop_-_Product_in_Focus.jpg?v=1759919229&width=1920"
// //           alt="Product Focus"
// //           className="w-full h-auto"
// //         />
// //       </div>

// //       {/* Video Grid Section */}
// //       <div className="max-w-7xl mx-auto px-6 py-20">
// //         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="w-full h-full object-cover aspect-[9/16]"
// //             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ucoyx3xwlruy59q8rzlck4co.mp4#t=0.1"
// //           ></video>
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="w-full h-full object-cover aspect-[9/16]"
// //             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_xv890i8eq4qh1da3mqqxo63s.mp4#t=0.1"
// //           ></video>
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="w-full h-full object-cover aspect-[9/16]"
// //             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ycfi8g82tzgh7yg3eafalw59.mp4#t=0.1"
// //           ></video>
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="w-full h-full object-cover aspect-[9/16]"
// //             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_nmt37oi0y17amgoyiql7lcoj.mp4#t=0.1"
// //           ></video>
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="w-full h-full object-cover aspect-[9/16]"
// //             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ule9g54xcx5vx203i328p55q.mp4#t=0.1"
// //           ></video>
// //         </div>
// //       </div>

// //       {/* Ballet Collection Section */}
// //       <div className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
// //         <h2 className="text-4xl font-bold mb-12 text-gray-900">Ballet Collection</h2>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //           {balletShoes.map((shoe, index) => (
// //             <div key={index} className="group cursor-pointer">
// //               <div className="bg-white mb-4 overflow-hidden">
// //                 <img
// //                   src={shoe.src}
// //                   alt={shoe.name}
// //                   className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>
// //               <h3 className="text-sm font-medium text-gray-900 text-center">
// //                 {shoe.name}
// //               </h3>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <div className="bg-black text-white py-20 text-center">
// //         <h2 className="text-4xl font-bold mb-6">Explore Our Complete Collection</h2>
// //         <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
// //           Discover thousands of styles from the world's best brands
// //         </p>
// //         <button
// //           onClick={() => navigate("/products")}
// //           className="bg-white text-black px-10 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
// //         >
// //           View All Products
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react";

// export default function HomePage() {
//   const [currentHeroImage, setCurrentHeroImage] = React.useState(0);

//   const heroImages = [
//     "https://www.westside.com/cdn/shop/files/Curvy-Web_f26a5ea5-df10-4cfb-926b-0df86e5c14c9.jpg?v=1764920204",
//     "https://www.westside.com/cdn/shop/files/Woman-Tops-Web.jpg?v=1763707878",
//     "https://www.westside.com/cdn/shop/files/Web-GlamKids.jpg?v=1764922820",
//     "https://www.westside.com/cdn/shop/files/Web-Bottoms_1.jpg?v=1762496974",
//     "https://www.westside.com/cdn/shop/files/TEEN-KIDS-GLAM-WEB.jpg?v=1764922645"
//   ];

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = [
//     {
//       label: "Men",
//       image:
//         "https://static.zara.net/assets/public/6a53/a7dd/57954a98b67f/2045622b9e70/12611420800-000-a1/12611420800-000-a1.jpg?ts=1747991230554&w=552",
//       link: "/collections/men",
//     },
//     {
//       label: "Women",
//       image:
//         "https://static.zara.net/assets/public/7d77/06f4/1fcf4c8796f9/79b965d6ba29/12157610105-p/12157610105-p.jpg?ts=1757662726046&w=830",
//       link: "/collections/women",
//     },
//     {
//       label: "Kids",
//       image:
//         "https://static.zara.net/assets/public/a66d/f539/46b440c38bdc/a0b95d8df8c7/05431773812-p/05431773812-p.jpg?ts=1760688794634&w=830",
//       link: "/collections/kids",
//     },
//   ];

//   const featuredShoes = [
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers",
//       name: "Blktop Rider Suede Sneakers",
//       price: "₹8,999",
//       rating: 4.5,
//       reviews: 127,
//     },
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/01/sv01/fnd/IND/fmt/png/Club Kayzer Cushioning Shoes",
//       name: "Club Kayzer Cushioning Shoes",
//       price: "₹6,499",
//       rating: 4.8,
//       reviews: 203,
//     },
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312076/06/sv01/fnd/IND/fmt/png/Conduct-Pro Running Shoes",
//       name: "Conduct Pro Running Shoes",
//       price: "₹7,299",
//       rating: 4.6,
//       reviews: 89,
//     },
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/01/sv01/fnd/IND/fmt/png/Palermo Sneakers",
//       name: "Palermo Sneakers",
//       price: "₹9,999",
//       rating: 4.9,
//       reviews: 412,
//     },
//     {
//       src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8507bfd1-93ca-43dd-9e34-dd6c30afc7f1/nike-shox-ride-2.jpg",
//       name: "Nike Shox Ride 2",
//       price: "₹12,995",
//       rating: 4.7,
//       reviews: 156,
//     },
//     {
//       src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/xa3j5pmlqu9lz6y1xbsb/NIKE+SHOX+TL.png",
//       name: "Nike Shox TL",
//       price: "₹13,995",
//       rating: 4.8,
//       reviews: 234,
//     },
//     {
//       src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9e608f62-74f6-4d2f-a614-c2fc1c529234/NIKE+AIR+MAX+PLUS.png",
//       name: "Nike Air Max Plus®",
//       price: "₹14,995",
//       rating: 4.9,
//       reviews: 567,
//     },
//   ];

//   const balletShoes = [
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404264/01/sv01/fnd/IND/fmt/png/Speedcat-Pearlized-Women's-Ballet-Shoes",
//       name: "Speedcat Pearlized Ballet Shoes",
//       price: "₹7,999",
//       rating: 4.6,
//       reviews: 94,
//     },
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/406758/01/sv01/fnd/IND/fmt/png/Speedcat-Suede-Cafe-Women's-Ballet-Shoes",
//       name: "Speedcat Suede Café Ballet Shoes",
//       price: "₹8,499",
//       rating: 4.7,
//       reviews: 132,
//     },
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/401287/06/sv01/fnd/IND/fmt/png/Speedcat-Suede-Ballet-Women's-Shoes",
//       name: "Speedcat Suede Ballet Shoes",
//       price: "₹7,499",
//       rating: 4.5,
//       reviews: 78,
//     },
//     {
//       src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404395/01/sv01/fnd/IND/fmt/png/PUMA-x-ROS%C3%89-Speedcat-Ballet-Women's-Shoes",
//       name: "PUMA x ROSÉ Ballet Shoes",
//       price: "₹9,999",
//       rating: 4.9,
//       reviews: 256,
//     },
//   ];

//   const navigate = (path) => {
//     window.location.href = path;
//   };

//   return (
//     <div className="w-full bg-white">
//       {/* Hero Section */}
//       <div className="relative h-screen w-full overflow-hidden bg-gray-100">
//         {heroImages.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Hero ${index + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === currentHeroImage ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-20">
//             {/* Step Into Style */}
//           </h1>
//           <p className="text-lg md:text-xl mb-50 font-light max-w-2xl">
//             {/* Discover premium footwear from the world's leading brands */}
//           </p>
//           <button
//             onClick={() => navigate("/products")}
//             className="group bg-white text-black px-8 py-3 text-base font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
//           >
//             Shop Now
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>

//         {/* Indicator Dots */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentHeroImage(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === currentHeroImage
//                   ? "bg-white w-8"
//                   : "bg-white/50 hover:bg-white/75"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="max-w-7xl mx-auto py-16 px-6">
//         <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Shop by Category</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {categories.map((item, index) => (
//             <div
//               key={index}
//               className="relative group overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.label}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <h3 className="text-3xl font-bold text-white mb-3">
//                   {item.label}
//                 </h3>
//                 <button
//                   onClick={() => navigate(item.link)}
//                   className="bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
//                 >
//                   Explore Collection
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="w-full">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-auto"
//           src="https://www.peltzshoes.com/cdn/shop/videos/c/vp/70334af3a86b409c886524945719c1cb/70334af3a86b409c886524945719c1cb.HD-720p-4.5Mbps-54545918.mp4?v=0"
//         ></video>
//       </div>

//       {/* Featured Shoes Section */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-4xl font-bold text-gray-900">Featured Shoes</h2>
//           <button
//             onClick={() => navigate("/products")}
//             className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition flex items-center gap-1"
//           >
//             View All <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="relative">
//           <div
//             id="featured-carousel"
//             className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {featuredShoes.map((shoe, index) => (
//               <div
//                 key={index}
//                 className="min-w-[280px] bg-white group cursor-pointer border border-gray-200 hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="relative overflow-hidden bg-gray-50">
//                   <img
//                     src={shoe.src}
//                     alt={shoe.name}
//                     className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-sm font-medium text-gray-900 mb-2">
//                     {shoe.name}
//                   </h3>
//                   <div className="flex items-center gap-1 mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-4 h-4 ${
//                           i < Math.floor(shoe.rating)
//                             ? "fill-yellow-400 text-yellow-400"
//                             : i < shoe.rating
//                             ? "fill-yellow-400 text-yellow-400"
//                             : "fill-gray-200 text-gray-200"
//                         }`}
//                       />
//                     ))}
//                     <span className="text-xs text-gray-600 ml-1">
//                       ({shoe.reviews})
//                     </span>
//                   </div>
//                   <p className="text-lg font-bold text-gray-900">{shoe.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => {
//               document.getElementById("featured-carousel").scrollBy({
//                 left: -350,
//                 behavior: "smooth",
//               });
//             }}
//             className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={() => {
//               document.getElementById("featured-carousel").scrollBy({
//                 left: 350,
//                 behavior: "smooth",
//               });
//             }}
//             className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Dual Image Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <img
//           src="https://www.superkicks.in/cdn/shop/files/collab-room-Desk-_1.gif?v=1756813063"
//           alt="Collection"
//           className="w-full h-[600px] object-cover"
//         />
//         <img
//           src="https://www.rotterdamsballonnenbedrijf.nl/blog/images/schoenenwinkels-rotterdam-centrum.jpg"
//           alt="Store"
//           className="w-full h-[600px] object-cover"
//         />
//       </div>

//       {/* Full Width Banner */}
//       <div className="w-full">
//         <img
//           src="https://neemans.com/cdn/shop/files/Desktop_-_Product_in_Focus.jpg?v=1759919229&width=1920"
//           alt="Product Focus"
//           className="w-full h-auto"
//         />
//       </div>

//       {/* Video Grid Section */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover aspect-[9/16]"
//             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ucoyx3xwlruy59q8rzlck4co.mp4#t=0.1"
//           ></video>
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover aspect-[9/16]"
//             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_xv890i8eq4qh1da3mqqxo63s.mp4#t=0.1"
//           ></video>
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover aspect-[9/16]"
//             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ycfi8g82tzgh7yg3eafalw59.mp4#t=0.1"
//           ></video>
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover aspect-[9/16]"
//             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_nmt37oi0y17amgoyiql7lcoj.mp4#t=0.1"
//           ></video>
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover aspect-[9/16]"
//             src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ule9g54xcx5vx203i328p55q.mp4#t=0.1"
//           ></video>
//         </div>
//       </div>

//       {/* Ballet Collection Section */}
//       <div className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
//         <h2 className="text-4xl font-bold mb-12 text-gray-900">Ballet Collection</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {balletShoes.map((shoe, index) => (
//             <div key={index} className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
//               <div className="bg-white overflow-hidden">
//                 <img
//                   src={shoe.src}
//                   alt={shoe.name}
//                   className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-sm font-medium text-gray-900 mb-2">
//                   {shoe.name}
//                 </h3>
//                 <div className="flex items-center gap-1 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < Math.floor(shoe.rating)
//                           ? "fill-yellow-400 text-yellow-400"
//                           : i < shoe.rating
//                           ? "fill-yellow-400 text-yellow-400"
//                           : "fill-gray-200 text-gray-200"
//                       }`}
//                     />
//                   ))}
//                   <span className="text-xs text-gray-600 ml-1">
//                     ({shoe.reviews})
//                   </span>
//                 </div>
//                 <p className="text-lg font-bold text-gray-900">{shoe.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-black text-white py-20 text-center">
//         <h2 className="text-4xl font-bold mb-6">Explore Our Complete Collection</h2>
//         <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
//           Discover thousands of styles from the world's best brands
//         </p>
//         <button
//           onClick={() => navigate("/products")}
//           className="bg-white text-black px-10 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
//         >
//           View All Products
//         </button>
//       </div>
//     </div>
//   );
// }







import React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [currentHeroImage, setCurrentHeroImage] = React.useState(0);

  const heroImages = [
    "https://www.westside.com/cdn/shop/files/Curvy-Web_f26a5ea5-df10-4cfb-926b-0df86e5c14c9.jpg?v=1764920204",
    "https://www.westside.com/cdn/shop/files/Woman-Tops-Web.jpg?v=1763707878",
    "https://www.westside.com/cdn/shop/files/Web-GlamKids.jpg?v=1764922820",
    "https://www.westside.com/cdn/shop/files/Web-Bottoms_1.jpg?v=1762496974",
    "https://www.westside.com/cdn/shop/files/TEEN-KIDS-GLAM-WEB.jpg?v=1764922645"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      label: "Men",
      image:
        "https://static.zara.net/assets/public/6a53/a7dd/57954a98b67f/2045622b9e70/12611420800-000-a1/12611420800-000-a1.jpg?ts=1747991230554&w=552",
      link: "/collections/men",
    },
    {
      label: "Women",
      image:
        "https://static.zara.net/assets/public/7d77/06f4/1fcf4c8796f9/79b965d6ba29/12157610105-p/12157610105-p.jpg?ts=1757662726046&w=830",
      link: "/collections/women",
    },
    {
      label: "Kids",
      image:
        "https://static.zara.net/assets/public/a66d/f539/46b440c38bdc/a0b95d8df8c7/05431773812-p/05431773812-p.jpg?ts=1760688794634&w=830",
      link: "/collections/kids",
    },
  ];

  const featuredShoes = [
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers",
      name: "Blktop Rider Suede Sneakers",
      price: "₹8,999",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/01/sv01/fnd/IND/fmt/png/Club Kayzer Cushioning Shoes",
      name: "Club Kayzer Cushioning Shoes",
      price: "₹6,499",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312076/06/sv01/fnd/IND/fmt/png/Conduct-Pro Running Shoes",
      name: "Conduct Pro Running Shoes",
      price: "₹7,299",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/01/sv01/fnd/IND/fmt/png/Palermo Sneakers",
      name: "Palermo Sneakers",
      price: "₹9,999",
    },
    {
      src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8507bfd1-93ca-43dd-9e34-dd6c30afc7f1/nike-shox-ride-2.jpg",
      name: "Nike Shox Ride 2",
      price: "₹12,995",
    },
    {
      src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/xa3j5pmlqu9lz6y1xbsb/NIKE+SHOX+TL.png",
      name: "Nike Shox TL",
      price: "₹13,995",
    },
    {
      src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9e608f62-74f6-4d2f-a614-c2fc1c529234/NIKE+AIR+MAX+PLUS.png",
      name: "Nike Air Max Plus®",
      price: "₹14,995",
    },
  ];

  const balletShoes = [
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404264/01/sv01/fnd/IND/fmt/png/Speedcat-Pearlized-Women's-Ballet-Shoes",
      name: "Speedcat Pearlized Ballet Shoes",
      price: "₹7,999",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/406758/01/sv01/fnd/IND/fmt/png/Speedcat-Suede-Cafe-Women's-Ballet-Shoes",
      name: "Speedcat Suede Café Ballet Shoes",
      price: "₹8,499",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/401287/06/sv01/fnd/IND/fmt/png/Speedcat-Suede-Ballet-Women's-Shoes",
      name: "Speedcat Suede Ballet Shoes",
      price: "₹7,499",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404395/01/sv01/fnd/IND/fmt/png/PUMA-x-ROS%C3%89-Speedcat-Ballet-Women's-Shoes",
      name: "PUMA x ROSÉ Ballet Shoes",
      price: "₹9,999",
    },
  ];

  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-gray-100">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentHeroImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-20">
            {/* Step Into Style */}
          </h1>
          <p className="text-lg md:text-xl mb-50 font-light max-w-2xl">
            {/* Discover premium footwear from the world's leading brands */}
          </p>
          <button
            onClick={() => navigate("/products")}
            className="group bg-white text-black px-8 py-3 text-base font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentHeroImage
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {item.label}
                </h3>
                <button
                  onClick={() => navigate(item.link)}
                  className="bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
          src="https://www.peltzshoes.com/cdn/shop/videos/c/vp/70334af3a86b409c886524945719c1cb/70334af3a86b409c886524945719c1cb.HD-720p-4.5Mbps-54545918.mp4?v=0"
        ></video>
      </div>

      {/* Featured Shoes Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Featured Shoes</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition flex items-center gap-1"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <div
            id="featured-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredShoes.map((shoe, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white group cursor-pointer border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={shoe.src}
                    alt={shoe.name}
                    className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {shoe.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">{shoe.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              document.getElementById("featured-carousel").scrollBy({
                left: -350,
                behavior: "smooth",
              });
            }}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              document.getElementById("featured-carousel").scrollBy({
                left: 350,
                behavior: "smooth",
              });
            }}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Dual Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="https://www.superkicks.in/cdn/shop/files/collab-room-Desk-_1.gif?v=1756813063"
          alt="Collection"
          className="w-full h-[600px] object-cover"
        />
        <img
          src="https://www.rotterdamsballonnenbedrijf.nl/blog/images/schoenenwinkels-rotterdam-centrum.jpg"
          alt="Store"
          className="w-full h-[600px] object-cover"
        />
      </div>

      {/* Full Width Banner */}
      <div className="w-full">
        <img
          src="https://neemans.com/cdn/shop/files/Desktop_-_Product_in_Focus.jpg?v=1759919229&width=1920"
          alt="Product Focus"
          className="w-full h-auto"
        />
      </div>

      {/* Video Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover aspect-[9/16]"
            src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ucoyx3xwlruy59q8rzlck4co.mp4#t=0.1"
          ></video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover aspect-[9/16]"
            src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_xv890i8eq4qh1da3mqqxo63s.mp4#t=0.1"
          ></video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover aspect-[9/16]"
            src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ycfi8g82tzgh7yg3eafalw59.mp4#t=0.1"
          ></video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover aspect-[9/16]"
            src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_nmt37oi0y17amgoyiql7lcoj.mp4#t=0.1"
          ></video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover aspect-[9/16]"
            src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ule9g54xcx5vx203i328p55q.mp4#t=0.1"
          ></video>
        </div>
      </div>

      {/* Ballet Collection Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Ballet Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {balletShoes.map((shoe, index) => (
            <div key={index} className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white overflow-hidden">
                <img
                  src={shoe.src}
                  alt={shoe.name}
                  className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {shoe.name}
                </h3>
                <p className="text-lg font-bold text-gray-900">{shoe.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Explore Our Complete Collection</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Discover thousands of styles from the world's best brands
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-white text-black px-10 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          View All Products
        </button>
      </div>
    </div>
  );
}