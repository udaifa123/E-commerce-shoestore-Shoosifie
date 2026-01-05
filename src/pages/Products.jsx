// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOption,setSortOption]=useState("");
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };

//   const filtered = products.filter(
//     (p) =>
//       p.name?.toLowerCase().includes(search.toLowerCase()) &&
//       (category
//         ? p.category.toLowerCase() === category.toLowerCase()
//         : true) &&
//       p.status === true
//   )

//   .sort((a,b)=>{
//      if(sortOption==="price-asc")return a.price-b.price;
//      if(sortOption==="price-desc")return b.price-a.price;
//      if(sortOption==="newwst")return new Date(b.date)-new Date(a.date);
//      return 0;
//   })

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 relative">
//       {/* {cartMessage && (
//         <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-50">
//           </div>
//       )}
//        */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center p-6">
//         <input
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">All Categories</option>
//           <option value="shoes">Shoes</option>
//           <option value="boots">Boots</option>
//           <option value="sneakers">Sneakers</option>

//         </select>

//         <select
//          value={sortOption}
//          onChange={(e)=>setSortOption(e.target.value)}
//          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//          >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price:Low to High</option>
//           <option value="price-desc">Price:High to Low</option>
//           <option value="newest">Newest Arrivals</option>
//         </select>
//       </div>

      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-6 flex-1">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`}>
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-56 object-contain bg-white p-2 rounded-md mb-3 transition-transform hover:scale=105"
//               />
//               <h3 className="font-semibold text-lg text-gray-800 mb-1">
//                 {p.name}
//               </h3>
//               <p className="text-gray-600 mb-1">{p.category}</p>
//               <p className="text-gray-900 font-bold mb-3">${p.price}</p>
//             </Link>
//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-black hover:bg-black-600 text-white py-2 rounded-lg font-semibold transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//         {filtered.length === 0 && (
//           <p className="col-span-full text-center text-gray-500 mt-6">
//             No products found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOption, setSortOption] = useState("");
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
//   const [toast, setToast] = useState({ show: false, message: "" });

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));

//     setToast({ show: true, message: `${product.name} added to cart!` });
//     setTimeout(() => setToast({ show: false, message: "" }), 2500);
//   };

//   const filtered = products
//     .filter(
//       (p) =>
//         p.name?.toLowerCase().includes(search.toLowerCase()) &&
//         (category ? p.category.toLowerCase() === category.toLowerCase() : true) &&
//         p.status === true
//     )
//     .sort((a, b) => {
//       if (sortOption === "price-asc") return a.price - b.price;
//       if (sortOption === "price-desc") return b.price - a.price;
//       if (sortOption === "newest") {
//         const dateA = new Date(a.date || 0);
//         const dateB = new Date(b.date || 0);
//         return dateB - dateA;
//       }
//       return 0;
//     });

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 relative">
  
//       {toast.show && (
//         <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slide-in">
//           {toast.message}
//         </div>
//       )}

      
//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center p-6">
//         <input
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">All Categories</option>
//           <option value="shoes">Shoes</option>
//           <option value="boots">Boots</option>
//           <option value="sneakers">Sneakers</option>
//         </select>

//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="newest">Newest Arrivals</option>
//         </select>
//       </div>

     
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-12">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`} className="flex flex-col flex-1">
//               <div className="relative w-full h-72 bg-white rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center group">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="max-h-64 object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-3 text-center">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-1">{p.name}</h3>
//                 <p className="text-gray-600 mb-1">{p.category}</p>
//                 <p className="text-yellow-600 font-bold mb-3">${p.price}</p>
//               </div>
//             </Link>

//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition mx-3 mb-4"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}

//         {filtered.length === 0 && (
//           <p className="col-span-full text-center text-gray-500 mt-6">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// }







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOption, setSortOption] = useState("");
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
//   const [toast, setToast] = useState({ show: false, message: "" });

  
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);


//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));

//     setToast({ show: true, message: `${product.name} added to cart!` });
//     setTimeout(() => setToast({ show: false, message: "" }), 2500);
//   };

  
//   const filtered = [...products]
//     .filter(
//       (p) =>
//         p.name?.toLowerCase().includes(search.toLowerCase()) &&
//         (category ? p.category.toLowerCase() === category.toLowerCase() : true) &&
//         p.status === true
//     )
//     .sort((a, b) => {
      
//       const priceA = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
//       const priceB = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;

//       if (sortOption === "price-asc") return priceA - priceB;
//       if (sortOption === "price-desc") return priceB - priceA;

//       if (sortOption === "newest") {
//         const dateA = new Date(a.date || 0);
//         const dateB = new Date(b.date || 0);
//         return dateB - dateA;
//       }
//       return 0;
//     });

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 relative">
      
//       {toast.show && (
//         <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slide-in">
//           {toast.message}
//         </div>
//       )}


//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center p-6">
//         <input
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         />

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">All Categories</option>
//           <option value="shoes">Shoes</option>
//           <option value="boots">Boots</option>
//           <option value="sneakers">Sneakers</option>
//         </select>

//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="newest">Newest Arrivals</option>
//         </select>
//       </div>

      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-12">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`} className="flex flex-col flex-1">
//               <div className="relative w-full h-72 bg-white rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center group">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="max-h-64 object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-3 text-center">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-1">{p.name}</h3>
//                 <p className="text-gray-600 mb-1">{p.category}</p>
//                 <p className="text-yellow-600 font-bold mb-3">${p.price}</p>
//               </div>
//             </Link>

//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition mx-3 mb-4"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}

//         {filtered.length === 0 && (
//           <p className="col-span-full text-center text-gray-500 mt-6">
//             No products found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { 
  FaHeart, 
  FaRegHeart, 
  FaShoppingCart, 
  FaEye, 
  FaStar,
  FaTimes,
  FaFilter,
  FaSearch,
  FaThLarge,
  FaThList
} from "react-icons/fa";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState(() => {
    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    const user = JSON.parse(localStorage.getItem("user"));
    return (user && allCarts[user.email]) || [];
  });

  const [hovered, setHovered] = useState(null);
  const [quickView, setQuickView] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data || []);
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  const categories = Array.from(
    new Set(products.map((p) => (p.category || "Uncategorized").toLowerCase()))
  );

  const formatCurrency = (v) => {
    const n = Number(v) || 0;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);
  };

  const getNumericPrice = (p) => {
    if (!p) return 0;
    const raw = p.price ?? 0;
    const parsed = parseFloat(String(raw).replace(/[^0-9.]/g, ""));
    return isNaN(parsed) ? 0 : parsed;
  };

  const getDiscountedPrice = (p) => {
    const price = getNumericPrice(p);
    const discount = Number(p.discount) || 0;
    if (!discount || discount <= 0) return price;
    return Math.round(price * (1 - discount / 100));
  };

  const toggleFavorite = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const exists = favorites.find((item) => item.id === product.id);
    const updated = exists
      ? favorites.filter((item) => item.id !== product.id)
      : [...favorites, product];

    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);

    Swal.fire({
      icon: exists ? "info" : "success",
      title: exists ? "Removed from Wishlist" : "Added to Wishlist",
      timer: 1200,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });
  };

  const addToCart = (product, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.email) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to add items to your cart.",
        icon: "info",
        confirmButtonColor: "#2563eb",
      });
      return;
    }

    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    const userCart = allCarts[user.email] || [];

    const existing = userCart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      userCart.push({ ...product, quantity: 1 });
    }

    allCarts[user.email] = userCart;
    localStorage.setItem("cart", JSON.stringify(allCarts));
    setCart(userCart);

    Swal.fire({
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      confirmButtonColor: "#2563eb",
      timer: 1800,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });
  };

  const filtered = [...products]
    .filter((p) =>
      String(p.name || "")
        .toLowerCase()
        .includes(String(search || "").toLowerCase())
    )
    .filter((p) =>
      category ? String(p.category || "").toLowerCase() === category.toLowerCase() : true
    )
    .filter((p) => p.status === undefined || p.status === true)
    .sort((a, b) => {
      const priceA = getNumericPrice(a);
      const priceB = getNumericPrice(b);

      if (sortOption === "price-asc") return priceA - priceB;
      if (sortOption === "price-desc") return priceB - priceA;
      if (sortOption === "newest") {
        const dateA = new Date(a.date || 0);
        const dateB = new Date(b.date || 0);
        return dateB - dateA;
      }
      return 0;
    });

  const openQuickView = (p, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setQuickView(p);
  };

  const closeQuickView = () => setQuickView(null);

  const isFavorite = (productId) => {
    return favorites.some((fav) => fav.id === productId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header / Filter Bar */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Search for products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3 items-center w-full md:w-auto">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex-1 md:flex-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="flex-1 md:flex-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>

              {/* View Toggle */}
              <div className="hidden md:flex gap-2 border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <FaThLarge />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <FaThList />
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 text-sm text-gray-600">
            Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg aspect-square mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-6`}>
            {filtered.map((p) => {
              const price = getNumericPrice(p);
              const discounted = getDiscountedPrice(p);
              const hasDiscount = Number(p.discount) > 0;
              const isHovered = hovered === p.id;
              const displayImage = isHovered && p.image2 ? p.image2 : p.image;

              return (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image Container */}
                  <div className="relative bg-gray-50 overflow-hidden aspect-square">
                    <img
                      src={displayImage}
                      alt={p.name}
                      className="w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {hasDiscount && (
                        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          -{Number(p.discount)}%
                        </span>
                      )}
                      {p.isNew && (
                        <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => toggleFavorite(p, e)}
                      className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      {isFavorite(p.id) ? (
                        <FaHeart className="text-red-500 text-lg" />
                      ) : (
                        <FaRegHeart className="text-gray-600 text-lg" />
                      )}
                    </button>

                    {/* Quick View & Add to Cart - Appears on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => addToCart(p, e)}
                          className="flex-1 bg-white hover:bg-blue-600 hover:text-white text-gray-900 font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaShoppingCart /> Add
                        </button>
                        <button
                          onClick={(e) => openQuickView(p, e)}
                          className="bg-white hover:bg-gray-900 hover:text-white text-gray-900 font-semibold px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                        >
                          <FaEye />
                        </button>
                      </div>
                    </div>

                    {/* Rating Badge */}
                    {p.rating && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaStar className="text-yellow-400" />
                        <span>{p.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      {p.category}
                    </p>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                      {hasDiscount ? (
                        <>
                          <span className="text-lg font-bold text-gray-900">
                            {formatCurrency(discounted)}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            {formatCurrency(price)}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">
                          {formatCurrency(price)}
                        </span>
                      )}
                    </div>

                    {/* Rating Stars */}
                    {p.rating && (
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-xs ${i < Math.floor(p.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                          ({p.reviews?.length || 0})
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* No products */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-600 mb-2">No products found</p>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={closeQuickView}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-auto">
              {/* Left: Image */}
              <div className="lg:w-1/2 p-8 bg-gray-50 flex items-center justify-center">
                <img
                  src={quickView.image2 || quickView.image}
                  alt={quickView.name}
                  className="w-full max-h-[400px] object-contain"
                />
              </div>

              {/* Right: Details */}
              <div className="lg:w-1/2 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                      {quickView.category}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {quickView.name}
                    </h2>
                  </div>
                  <button
                    onClick={closeQuickView}
                    className="text-gray-400 hover:text-gray-600 transition p-2"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Rating */}
                {quickView.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < Math.floor(quickView.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {quickView.rating} ({quickView.reviews?.length || 0} reviews)
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                  {Number(quickView.discount) > 0 ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">
                        {formatCurrency(getDiscountedPrice(quickView))}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {formatCurrency(getNumericPrice(quickView))}
                      </span>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{Number(quickView.discount)}%
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(getNumericPrice(quickView))}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {quickView.description ||
                    quickView.shortDescription ||
                    "Premium quality product with excellent features and durability."}
                </p>

                {/* Sizes */}
                {quickView.sizes && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Select Size
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {quickView.sizes.map((s) => (
                        <button
                          key={s}
                          className="border-2 border-gray-300 hover:border-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Colors */}
                {quickView.colors && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Select Color
                    </h4>
                    <div className="flex gap-3">
                      {quickView.colors.map((c) => (
                        <button
                          key={c}
                          title={c}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-600 transition hover:scale-110"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      addToCart(quickView);
                      closeQuickView();
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <Link
                    to={`/product/${quickView.id}`}
                    onClick={closeQuickView}
                    className="px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-blue-600 font-semibold transition flex items-center justify-center"
                  >
                    View Details
                  </Link>
                </div>

                {/* Features */}
                <div className="mt-6 pt-6 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-600">✓</span>
                    <span>Free delivery above ₹999</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-600">✓</span>
                    <span>15 days easy return</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-600">✓</span>
                    <span>100% authentic products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}