// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import {
//   FaCamera,
//   FaHeart,
//   FaBoxOpen,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaSun,
//   FaMoon,
//   FaHistory,
// } from "react-icons/fa";

// export default function Profile() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     password: "",
//     photo: "",
//   });
//   const [orders, setOrders] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [activity, setActivity] = useState([]);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const storedActivity = JSON.parse(localStorage.getItem("activity")) || [];
//     const savedMode = localStorage.getItem("darkMode");

//     if (storedUser) setForm(storedUser);
//     setOrders(storedOrders);
//     setWishlist(storedWishlist);
//     setActivity(storedActivity);
//     if (savedMode) setDarkMode(JSON.parse(savedMode));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setForm((prev) => ({ ...prev, photo: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("user", JSON.stringify(form));
//     addActivity("Profile updated successfully");
//     Swal.fire({
//       icon: "success",
//       title: "Profile Saved",
//       text: "Your profile has been updated.",
//       confirmButtonColor: "#10b981", // emerald accent
//       background: darkMode ? "#1f2937" : "#f9fafb",
//       color: darkMode ? "#fff" : "#000",
//     });
//   };

//   const toggleMode = () => {
//     setDarkMode((prev) => {
//       localStorage.setItem("darkMode", JSON.stringify(!prev));
//       return !prev;
//     });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     Swal.fire({
//       icon: "info",
//       title: "Logged Out",
//       text: "You have been logged out successfully.",
//       confirmButtonColor: "#10b981",
//     });
//     window.location.reload();
//   };

//   const addActivity = (msg) => {
//     const newActivity = { id: Date.now(), msg, time: new Date().toLocaleString() };
//     const updated = [newActivity, ...activity];
//     setActivity(updated);
//     localStorage.setItem("activity", JSON.stringify(updated));
//   };

//   return (
//     <div
//       className={`${
//         darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
//       } min-h-screen transition-all`}
//     >
//       {/* Header */}
//       <header className="flex items-center justify-between px-8 py-5 bg-gradient-to-r from-green-700 to-emerald-500 text-white shadow-lg">
//         <h2 className="text-3xl font-bold tracking-tight">My Account</h2>
//         <div className="flex gap-4">
//           <button
//             onClick={toggleMode}
//             className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
//           >
//             {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 px-4 py-2 rounded-lg text-white hover:opacity-90"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto mt-10 p-8 space-y-12">
//         {/* Profile Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Profile Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-6"
//           >
//             <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
//             {["name", "email", "phone"].map((field) => (
//               <div key={field}>
//                 <label className="block text-sm font-semibold capitalize">
//                   {field}
//                 </label>
//                 <input
//                   type={field === "email" ? "email" : "text"}
//                   name={field}
//                   value={form[field]}
//                   onChange={handleChange}
//                   className="mt-2 w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-green-500 bg-transparent"
//                 />
//               </div>
//             ))}

//             <div>
//               <label className="block text-sm font-semibold">Address</label>
//               <textarea
//                 name="address"
//                 value={form.address}
//                 onChange={handleChange}
//                 rows={3}
//                 className="mt-2 w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-green-500 bg-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="mt-2 w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-green-500 bg-transparent"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90"
//             >
//               Save Changes
//             </button>
//           </form>

//           {/* Profile Card */}
//           <div className="flex flex-col items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
//             {form.photo ? (
//               <img
//                 src={form.photo}
//                 alt="Profile"
//                 className="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-lg"
//               />
//             ) : (
//               <div className="w-40 h-40 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-400">
//                 <FaCamera className="text-slate-500 text-3xl" />
//               </div>
//             )}

//             <label className="mt-4 cursor-pointer bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoChange}
//                 className="hidden"
//               />
//               Upload Photo
//             </label>

//             <div className="flex gap-4 mt-6">
//               {form.phone && (
//                 <button
//                   type="button"
//                   onClick={() => window.open(`tel:${form.phone}`, "_self")}
//                   className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition"
//                 >
//                   <FaPhoneAlt /> Call
//                 </button>
//               )}
//               {form.email && (
//                 <button
//                   type="button"
//                   onClick={() => window.open(`mailto:${form.email}`, "_self")}
//                   className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition"
//                 >
//                   <FaEnvelope /> Email
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Orders Section */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <FaBoxOpen /> My Orders
//           </h3>
//           {orders.length === 0 ? (
//             <p className="text-gray-500">No past orders found.</p>

//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {orders.map((o) => (
//                 <div
//                   key={o.id}
//                   onClick={() =>
//                     Swal.fire({
//                       title: `Order #${o.id}`,
//                       html: `<p>Date: ${o.date}</p><p>Total: ₹${o.total}</p>`,
//                       confirmButtonColor: "#000",
//                     })
//                   }
//                   className="cursor-pointer border rounded-xl p-4 bg-gray-50 dark:bg-gray-700 hover:shadow-md transition"
//                 >
//                   <h4 className="font-semibold">Order #{o.id}</h4>
//                   <p className="text-sm text-gray-500 mb-1">{o.date}</p>
//                   <p className="font-medium">₹{o.total}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  FaCamera,
  FaHeart,
  FaBoxOpen,
  FaPhoneAlt,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaHistory,
  FaUser,
  FaShoppingBag,
  FaCog,
  FaSignOutAlt,
  FaEdit,
  FaMapMarkerAlt,
  FaLock,
  FaBell,
  FaCreditCard,
  FaStar,
  FaShieldAlt,
  FaQuestionCircle,
  FaChevronRight,
} from "react-icons/fa";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    photo: "",
  });
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activity, setActivity] = useState([]);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storedActivity = JSON.parse(localStorage.getItem("activity")) || [];
    const savedMode = localStorage.getItem("darkMode");

    if (storedUser) setForm(storedUser);
    setOrders(storedOrders);
    setWishlist(storedWishlist);
    setActivity(storedActivity);
    if (savedMode) setDarkMode(JSON.parse(savedMode));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    addActivity("Profile updated successfully");
    Swal.fire({
      icon: "success",
      title: "Profile Saved",
      text: "Your profile has been updated.",
      confirmButtonColor: "#2563eb",
      background: darkMode ? "#1e293b" : "#ffffff",
      color: darkMode ? "#fff" : "#000",
    });
  };

  const toggleMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", JSON.stringify(!prev));
      return !prev;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    Swal.fire({
      icon: "info",
      title: "Logged Out",
      text: "You have been logged out successfully.",
      confirmButtonColor: "#2563eb",
    });
    window.location.reload();
  };

  const addActivity = (msg) => {
    const newActivity = { id: Date.now(), msg, time: new Date().toLocaleString() };
    const updated = [newActivity, ...activity];
    setActivity(updated);
    localStorage.setItem("activity", JSON.stringify(updated));
  };

  return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen`}>
      {/* Top Navigation Bar */}
      <nav className={`${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"} border-b sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>
            <div className="hidden md:flex gap-6">
              <button className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} font-medium transition`}>Shop</button>
              <button className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} font-medium transition`}>Categories</button>
              <button className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} font-medium transition`}>Deals</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleMode} className={`${darkMode ? "bg-slate-700 hover:bg-slate-600" : "bg-gray-100 hover:bg-gray-200"} p-2 rounded-lg transition`}>
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button className={`${darkMode ? "bg-slate-700 hover:bg-slate-600" : "bg-gray-100 hover:bg-gray-200"} p-2 rounded-lg transition relative`}>
              <FaBell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className={`lg:col-span-1 ${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6 h-fit`}>
            {/* Profile Summary */}
            <div className="text-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="relative inline-block mb-3">
                {form.photo ? (
                  <img src={form.photo} alt="Profile" className="w-20 h-20 rounded-full object-cover border-4 border-blue-500" />
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full">
                    <FaUser className="text-white text-2xl" />
                  </div>
                )}
                <label className="absolute bottom-0 right-0 cursor-pointer bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700">
                  <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                  <FaCamera size={12} />
                </label>
              </div>
              <h3 className="font-bold text-lg">{form.name || "Guest User"}</h3>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{form.email}</p>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              {[
                { id: "profile", icon: FaUser, label: "Profile" },
                { id: "orders", icon: FaBoxOpen, label: "Orders" },
                { id: "wishlist", icon: FaHeart, label: "Wishlist" },
                { id: "payment", icon: FaCreditCard, label: "Payment Methods" },
                { id: "settings", icon: FaCog, label: "Settings" },
                { id: "security", icon: FaShieldAlt, label: "Security" },
                { id: "help", icon: FaQuestionCircle, label: "Help Center" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "text-gray-300 hover:bg-slate-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            <button onClick={handleLogout} className="w-full mt-6 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition">
              <FaSignOutAlt /> Logout
            </button>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3 space-y-6">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Phone Number</label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`flex-1 px-4 py-3 rounded-lg border ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {form.phone && (
                        <button
                          onClick={() => window.open(`tel:${form.phone}`, "_self")}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition flex items-center gap-2"
                        >
                          <FaPhoneAlt /> Call
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <FaMapMarkerAlt className="inline mr-2" />
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter your complete address"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition">
                  Save Changes
                </button>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">My Orders</h2>
                  <span className={`${darkMode ? "bg-slate-700" : "bg-gray-100"} px-4 py-2 rounded-lg font-medium`}>
                    {orders.length} Orders
                  </span>
                </div>

                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <FaBoxOpen className={`text-6xl mx-auto mb-4 ${darkMode ? "text-gray-600" : "text-gray-300"}`} />
                    <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>No orders yet</p>
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        onClick={() =>
                          Swal.fire({
                            title: `Order #${order.id}`,
                            html: `<p>Date: ${order.date}</p><p>Total: ₹${order.total}</p>`,
                            confirmButtonColor: "#2563eb",
                            background: darkMode ? "#1e293b" : "#ffffff",
                            color: darkMode ? "#fff" : "#000",
                          })
                        }
                        className={`cursor-pointer ${darkMode ? "bg-slate-700 hover:bg-slate-600" : "bg-gray-50 hover:bg-gray-100"} rounded-lg p-4 border ${darkMode ? "border-slate-600" : "border-gray-200"} transition`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-blue-600 text-white p-3 rounded-lg">
                              <FaBoxOpen size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold">Order #{order.id}</h4>
                              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{order.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-blue-600">₹{order.total}</p>
                            <FaChevronRight className={`inline ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">My Wishlist</h2>
                  <span className={`${darkMode ? "bg-slate-700" : "bg-gray-100"} px-4 py-2 rounded-lg font-medium`}>
                    {wishlist.length} Items
                  </span>
                </div>

                {wishlist.length === 0 ? (
                  <div className="text-center py-12">
                    <FaHeart className={`text-6xl mx-auto mb-4 ${darkMode ? "text-gray-600" : "text-gray-300"}`} />
                    <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Your wishlist is empty</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {wishlist.map((item) => (
                      <div key={item.id} className={`${darkMode ? "bg-slate-700" : "bg-gray-50"} rounded-lg p-4`}>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-blue-600 font-bold mt-2">₹{item.price}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Payment Tab */}
            {activeTab === "payment" && (
              <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
                <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
                <div className="space-y-4">
                  <div className={`${darkMode ? "bg-slate-700" : "bg-gray-50"} rounded-lg p-4 border-2 border-blue-600`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FaCreditCard className="text-2xl text-blue-600" />
                        <div>
                          <p className="font-bold">•••• •••• •••• 4242</p>
                          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Expires 12/25</p>
                        </div>
                      </div>
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Primary</span>
                    </div>
                  </div>
                  <button className={`w-full ${darkMode ? "bg-slate-700 hover:bg-slate-600" : "bg-gray-100 hover:bg-gray-200"} text-center py-4 rounded-lg font-medium transition`}>
                    + Add New Payment Method
                  </button>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <div className="space-y-4">
                  <div className={`flex items-center justify-between py-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                    <div className="flex items-center gap-3">
                      <FaBell className="text-xl" />
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Get updates about orders</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className={`flex items-center justify-between py-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                    <div className="flex items-center gap-3">
                      <FaMoon className="text-xl" />
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Switch theme appearance</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={darkMode} onChange={toggleMode} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
                <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
                <div className="space-y-4">
                  <div className={`flex items-center justify-between py-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                    <div className="flex items-center gap-3">
                      <FaShieldAlt className="text-xl text-green-600" />
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Extra security for your account</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={twoFactor} onChange={(e) => setTwoFactor(e.target.checked)} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                    <FaLock className="inline mr-2" /> Change Password
                  </button>
                </div>
              </div>
            )}

            {/* Help Center Tab */}
            {activeTab === "help" && (
              <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
                <h2 className="text-2xl font-bold mb-6">Help Center</h2>
                <div className="space-y-3">
                  {["How to place an order?", "Track my order", "Return & Refund Policy", "Contact Support"].map((item, idx) => (
                    <button
                      key={idx}
                      className={`w-full flex items-center justify-between ${darkMode ? "bg-slate-700 hover:bg-slate-600" : "bg-gray-50 hover:bg-gray-100"} p-4 rounded-lg transition`}
                    >
                      <span className="font-medium">{item}</span>
                      <FaChevronRight />
                    </button>
                  ))}
                </div>

                <div className={`mt-6 ${darkMode ? "bg-blue-900/30" : "bg-blue-50"} border border-blue-600 rounded-lg p-4`}>
                  <h4 className="font-bold mb-2">Need More Help?</h4>
                  <p className={`text-sm mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Our support team is available 24/7
                  </p>
                  <div className="flex gap-3">
                    {form.phone && (
                      <button
                        onClick={() => window.open(`tel:${form.phone}`, "_self")}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2"
                      >
                        <FaPhoneAlt /> Call Support
                      </button>
                    )}
                    {form.email && (
                      <button
                        onClick={() => window.open(`mailto:support@mystore.com`, "_self")}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2"
                      >
                        <FaEnvelope /> Email Us
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Activity Timeline */}
            <div className={`${darkMode ? "bg-slate-800" : "bg-white"} rounded-xl p-6`}>
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {activity.length === 0 ? (
                  <p className={`text-center py-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>No recent activity</p>
                ) : (
                  activity.slice(0, 5).map((a) => (
                    <div key={a.id} className={`flex items-start gap-3 ${darkMode ? "bg-slate-700" : "bg-gray-50"} p-3 rounded-lg`}>
                      <FaHistory className="text-blue-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{a.msg}</p>
                        <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{a.time}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}