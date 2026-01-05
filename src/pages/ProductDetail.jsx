// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [related, setRelated] = useState([]);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedImage, setSelectedImage] = useState("");
//   const [isFav, setIsFav] = useState(false);

//   // 🟢 Load main product
//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/products/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         setSelectedImage(res.data.image);
//         const favs = JSON.parse(localStorage.getItem("favorites")) || [];
//         setIsFav(favs.some((item) => item.id === res.data.id));
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   // 🟢 Load related products (same category)
//   useEffect(() => {
//     if (product) {
//       axios
//         .get(`http://localhost:5000/products?category=${product.category}`)
//         .then((res) => setRelated(res.data.filter((p) => p.id !== product.id)))
//         .catch((err) => console.error(err));
//     }
//   }, [product]);

//   // ❤️ Toggle Favorite
//   const toggleFavorite = () => {
//     const favs = JSON.parse(localStorage.getItem("favorites")) || [];
//     const exists = favs.find((item) => item.id === product.id);
//     const updated = exists
//       ? favs.filter((item) => item.id !== product.id)
//       : [...favs, product];

//     localStorage.setItem("favorites", JSON.stringify(updated));
//     setIsFav(!isFav);

//     Swal.fire({
//       icon: exists ? "info" : "success",
//       title: exists ? "Removed from Wishlist" : "Added to Wishlist",
//       text: `${product.name} ${exists ? "removed" : "added"} from your favorites.`,
//       timer: 1200,
//       showConfirmButton: false,
//     });
//   };

//   // 🛒 Add to Cart
//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       Swal.fire({
//         icon: "warning",
//         title: "Select Size",
//         text: "Please choose a size before adding to cart!",
//       });
//       return;
//     }

//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user || !user.email) {
//       Swal.fire({
//         icon: "info",
//         title: "Login Required",
//         text: "Please log in to continue shopping.",
//       }).then(() => navigate("/login"));
//       return;
//     }

//     const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
//     const userKey = user.email;
//     const userCart = allCarts[userKey] || [];

//     const existing = userCart.find(
//       (i) => i.id === product.id && i.size === selectedSize
//     );

//     if (existing) existing.quantity += 1;
//     else userCart.push({ ...product, size: selectedSize, quantity: 1 });

//     allCarts[userKey] = userCart;
//     localStorage.setItem("cart", JSON.stringify(allCarts));

//     Swal.fire({
//       icon: "success",
//       title: "Added to Cart",
//       text: `${product.name} (Size: ${selectedSize}) added to your cart!`,
//       timer: 1200,
//       showConfirmButton: false,
//     });
//   };

//   if (!product)
//     return <p className="text-center mt-10 font-urbanist">Loading...</p>;

//   const sizes = ["5.5", "6", "7", "8", "9", "10", "11"];

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-6 font-urbanist">
//       <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* ✅ Product Image Section */}
//         <div className="flex flex-col items-center relative group">
//           <button
//             onClick={toggleFavorite}
//             className="absolute top-4 right-4 text-2xl z-10"
//           >
//             {isFav ? (
//               <FaHeart className="text-red-500 hover:scale-110 transition-transform" />
//             ) : (
//               <FaRegHeart className="text-gray-400 hover:scale-110 transition-transform" />
//             )}
//           </button>

//           {/* Variants */}
//           <div className="flex gap-3 mb-4 justify-center">
//             {product.variants?.map((variant, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(variant.image)}
//                 className={`border rounded-lg p-1 hover:border-black transition ${
//                   selectedImage === variant.image
//                     ? "border-black"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={variant.image}
//                   alt={variant.color}
//                   className="w-12 h-12 object-cover rounded"
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg overflow-hidden group relative">
//             <img
//               src={selectedImage}
//               alt={product.name}
//               className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </div>

//         {/* ✅ Product Details Section */}
//         <div>
//           <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
//           <div className="flex items-center gap-2 mb-3">
//             {[...Array(5)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 className={
//                   i < (product.rating || 4)
//                     ? "text-yellow-400"
//                     : "text-gray-300"
//                 }
//               />
//             ))}
//             <span className="text-sm text-gray-500">
//               ({product.reviews?.length || 12} reviews)
//             </span>
//           </div>

//           <p className="text-gray-700 mb-2">{product.category}</p>
//           <p className="text-xl font-semibold mb-2">₹{product.price}</p>
//           <p className="text-gray-500 text-sm mb-4">
//             Incl. of taxes (also includes all applicable duties)
//           </p>
//           <p className="text-gray-700 mb-6">{product.description}</p>

//           {/* Size Selector */}
//           <div className="mb-5">
//             <p className="font-semibold mb-2">Select Size:</p>
//             <div className="flex gap-2 flex-wrap">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-lg font-semibold transition-colors ${
//                     selectedSize === size
//                       ? "bg-black text-white border-black"
//                       : "bg-white text-black border-gray-300 hover:border-black"
//                   }`}
//                 >
//                   UK {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* ✅ Related Products Section */}
//       {related.length > 0 && (
//         <div className="max-w-6xl mx-auto mt-16">
//           <h3 className="text-2xl font-semibold mb-6">You Might Also Like</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => navigate(`/product/${item.id}`)}
//                 className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
//               >
//                 {/* Image same feel as main */}
//                 <div className="bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="object-contain w-4/5 h-4/5 transition-transform duration-300 ease-in-out group-hover:scale-110"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="p-4 text-center">
//                   <h4 className="font-semibold text-gray-800 truncate mb-1">
//                     {item.name}
//                   </h4>
//                   <p className="text-gray-600 font-medium">₹{item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { 
  FaHeart, 
  FaRegHeart, 
  FaStar, 
  FaShoppingCart, 
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaRuler,
  FaShareAlt,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaCheck,
  FaSearchPlus,
  FaMapMarkerAlt,
  FaTimes,
  FaAward,
  FaThumbsUp,
  FaClock,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isFav, setIsFav] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [showShare, setShowShare] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [pincode, setPincode] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.image);
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFav(favs.some((item) => item.id === res.data.id));
      })
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    if (product) {
      axios
        .get(`http://localhost:5000/products?category=${product.category}`)
        .then((res) => setRelated(res.data.filter((p) => p.id !== product.id)))
        .catch((err) => console.error(err));
    }
  }, [product]);

  const handleMouseMove = (e) => {
    if (!showZoom) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favs.find((item) => item.id === product.id);
    const updated = exists
      ? favs.filter((item) => item.id !== product.id)
      : [...favs, product];

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);

    Swal.fire({
      icon: exists ? "info" : "success",
      title: exists ? "Removed from Wishlist" : "Added to Wishlist",
      text: `${product.name} ${exists ? "removed" : "added"} from your favorites.`,
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      Swal.fire({
        icon: "warning",
        title: "Select Size",
        text: "Please choose a size before adding to cart!",
      });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.email) {
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "Please log in to continue shopping.",
      }).then(() => navigate("/login"));
      return;
    }

    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    const userKey = user.email;
    const userCart = allCarts[userKey] || [];

    const existing = userCart.find(
      (i) => i.id === product.id && i.size === selectedSize
    );

    if (existing) existing.quantity += quantity;
    else userCart.push({ ...product, size: selectedSize, quantity });

    allCarts[userKey] = userCart;
    localStorage.setItem("cart", JSON.stringify(allCarts));

    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${product.name} (Size: ${selectedSize}) added to your cart!`,
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => navigate("/cart"), 1300);
  };

  const checkDelivery = () => {
    if (pincode.length === 6) {
      setDeliveryInfo({
        available: true,
        date: "Tomorrow, Nov 24",
        time: "10 AM - 2 PM"
      });
      Swal.fire({
        icon: "success",
        title: "Delivery Available!",
        text: `Delivery by Tomorrow, Nov 24`,
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Pincode",
        text: "Please enter a valid 6-digit pincode",
      });
    }
  };

  if (!product)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading product...</p>
        </div>
      </div>
    );

  const sizes = ["5.5", "6", "7", "8", "9", "10", "11"];
  const discount = Math.round(((product.originalPrice || product.price * 1.4) - product.price) / (product.originalPrice || product.price * 1.4) * 100);

  const faqs = [
    { q: "What is the return policy?", a: "Easy 15-day return and exchange policy. No questions asked!" },
    { q: "Is this product authentic?", a: "Yes! We sell 100% authentic products with brand warranty." },
    { q: "How long does delivery take?", a: "Standard delivery takes 3-5 business days. Express delivery available." },
    { q: "What payment methods are accepted?", a: "We accept credit/debit cards, UPI, net banking, and cash on delivery." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate("/")} className="hover:text-blue-600 transition">Home</button>
            <span>/</span>
            <button onClick={() => navigate("/products")} className="hover:text-blue-600 transition">{product.category}</button>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image with Zoom */}
            <div 
              className="relative bg-gray-50 rounded-lg overflow-hidden border border-gray-200 group cursor-crosshair"
              onMouseEnter={() => setShowZoom(true)}
              onMouseLeave={() => setShowZoom(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="aspect-square relative">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                  }}
                />
                
                {/* Zoom Indicator */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <FaSearchPlus className="text-blue-600" />
                  <span className="text-sm font-medium">Hover to zoom</span>
                </div>
              </div>
              
              {/* Wishlist Button */}
              <button
                onClick={toggleFavorite}
                className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-all z-10"
              >
                {isFav ? (
                  <FaHeart className="text-red-500 text-xl animate-pulse" />
                ) : (
                  <FaRegHeart className="text-gray-600 text-xl" />
                )}
              </button>

              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {discount}% OFF
                </div>
              )}

              {/* Stock Status */}
              <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg flex items-center gap-2">
                <FaCheck /> In Stock
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedImage(product.image)}
                onMouseEnter={() => setHoveredImage(product.image)}
                onMouseLeave={() => setHoveredImage(null)}
                className={`relative flex-shrink-0 w-24 h-24 border-2 rounded-lg overflow-hidden transition-all ${
                  selectedImage === product.image ? "border-blue-600 shadow-lg scale-105" : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img src={product.image} alt="Main" className="w-full h-full object-contain p-2" />
                {hoveredImage === product.image && (
                  <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                    <FaSearchPlus className="text-blue-600" />
                  </div>
                )}
              </button>
              {product.variants?.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(variant.image)}
                  onMouseEnter={() => setHoveredImage(variant.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`relative flex-shrink-0 w-24 h-24 border-2 rounded-lg overflow-hidden transition-all ${
                    selectedImage === variant.image ? "border-blue-600 shadow-lg scale-105" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img src={variant.image} alt={variant.color} className="w-full h-full object-contain p-2" />
                  {hoveredImage === variant.image && (
                    <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                      <FaSearchPlus className="text-blue-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                <FaAward className="text-blue-600 text-2xl mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900">Authentic</p>
                <p className="text-xs text-gray-600">100% Original</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <FaShieldAlt className="text-green-600 text-2xl mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900">Secure</p>
                <p className="text-xs text-gray-600">Safe Payment</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                <FaThumbsUp className="text-purple-600 text-2xl mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-900">Quality</p>
                <p className="text-xs text-gray-600">Best Materials</p>
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900 flex-1">{product.name}</h1>
                <button 
                  onClick={() => setShowShare(!showShare)}
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition"
                >
                  <FaShareAlt className="text-gray-700" />
                </button>
              </div>
              <p className="text-gray-600 font-medium">{product.category}</p>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 pb-4 border-b">
              <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md">
                <span className="font-bold">{product.rating || 4.5}</span>
                <FaStar size={14} />
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviews?.length || 128} reviews)
              </span>
              <span className="text-sm text-green-600 font-medium">• 89% recommended</span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                {discount > 0 && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.originalPrice || Math.round(product.price * 1.4)}
                    </span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes • Free Shipping</p>
            </div>

            {/* Color Options */}
            {product.variants && product.variants.length > 0 && (
              <div className="pb-4 border-b">
                <h3 className="font-semibold text-gray-900 mb-3">Select Color</h3>
                <div className="flex gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(variant.image)}
                      className={`relative w-20 h-20 border-3 rounded-xl overflow-hidden transition-all hover:scale-105 ${
                        selectedImage === variant.image ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-300"
                      }`}
                    >
                      <img src={variant.image} alt={variant.color} className="w-full h-full object-cover" />
                      {selectedImage === variant.image && (
                        <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                          <div className="bg-blue-600 text-white rounded-full p-1">
                            <FaCheck size={12} />
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="pb-4 border-b">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Select Size</h3>
                <button className="text-sm text-blue-600 hover:underline flex items-center gap-1 font-medium">
                  <FaRuler size={12} /> Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded-lg font-semibold transition-all hover:scale-105 ${
                      selectedSize === size
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    UK {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="pb-4 border-b">
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-bold text-xl transition"
                >
                  -
                </button>
                <span className="w-16 text-center font-bold text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-bold text-xl transition"
                >
                  +
                </button>
                <span className="text-sm text-gray-600">(₹{quantity * product.price} total)</span>
              </div>
            </div>

            {/* Delivery Check */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> Check Delivery
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  maxLength={6}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={checkDelivery}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                >
                  Check
                </button>
              </div>
              {deliveryInfo && (
                <div className="mt-3 flex items-center gap-2 text-sm text-green-600 font-medium">
                  <FaClock /> Delivery by {deliveryInfo.date}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 sticky bottom-4 bg-white pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
              >
                <FaShoppingCart size={20} /> Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Buy Now
              </button>
            </div>

            {/* Share Modal */}
            {showShare && (
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg">Share this product</h4>
                  <button onClick={() => setShowShare(false)}>
                    <FaTimes className="text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition flex flex-col items-center gap-2">
                    <FaFacebook size={24} />
                    <span className="text-xs">Facebook</span>
                  </button>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg transition flex flex-col items-center gap-2">
                    <FaTwitter size={24} />
                    <span className="text-xs">Twitter</span>
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition flex flex-col items-center gap-2">
                    <FaWhatsapp size={24} />
                    <span className="text-xs">WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

            {/* Delivery Info Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t">
              <div className="text-center">
                <FaTruck className="text-green-600 text-2xl mx-auto mb-2" />
                <p className="text-xs font-semibold">Free Delivery</p>
                <p className="text-xs text-gray-600">Above ₹999</p>
              </div>
              <div className="text-center">
                <FaUndo className="text-blue-600 text-2xl mx-auto mb-2" />
                <p className="text-xs font-semibold">Easy Returns</p>
                <p className="text-xs text-gray-600">15 Days</p>
              </div>
              <div className="text-center">
                <FaShieldAlt className="text-purple-600 text-2xl mx-auto mb-2" />
                <p className="text-xs font-semibold">Secure</p>
                <p className="text-xs text-gray-600">100% Safe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-6 overflow-x-auto">
              {["details", "specifications", "reviews", "faq"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-4 font-semibold capitalize transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "text-blue-600 border-b-3 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="py-6">
            {activeTab === "details" && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4">Product Details</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-bold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Premium quality materials for durability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Comfortable fit for all-day wear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Breathable design with superior ventilation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck className="text-green-600 mt-1" />
                      <span>Easy to clean and maintain</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Specifications</h3>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  {[
                    { label: "Brand", value: product.brand || "Premium Brand" },
                    { label: "Category", value: product.category },
                    { label: "Material", value: "High-quality synthetic/fabric blend" },
                    { label: "Weight", value: "350g (approx)" },
                    { label: "Care Instructions", value: "Machine washable" },
                    { label: "Warranty", value: "6 months manufacturer warranty" },
                    { label: "Country of Origin", value: "India" },
                  ].map((spec, idx) => (
                    <div key={idx} className={`flex justify-between py-4 px-6 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  {[
                    { name: "Rajesh Kumar", rating: 5, comment: "Excellent product! Worth every penny. Highly recommended.", date: "2 days ago", verified: true },
                    { name: "Priya Sharma", rating: 4, comment: "Good quality, fits perfectly. Fast delivery too!", date: "1 week ago", verified: true },
                    { name: "Amit Patel", rating: 5, comment: "Best purchase I've made this year! Amazing quality.", date: "2 weeks ago", verified: true },
                    { name: "Sneha Reddy", rating: 4, comment: "Nice product. Slightly expensive but worth it.", date: "3 weeks ago", verified: false },
                  ].map((review, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{review.name}</p>
                              {review.verified && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                  ✓ Verified
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                              size={14}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {related.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="cursor-pointer group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden aspect-square mb-3 border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-gray-900 truncate mb-1">{item.name}</h4>
                  <p className="text-gray-900 font-bold">₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}