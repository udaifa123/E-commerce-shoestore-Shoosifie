// import React, { useEffect, useState } from "react";
// import { getOrders } from "../services/api";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);

//     if (storedUser) {
//       getOrders()
//         .then((res) => {
//           const userOrders = res.data.filter((o) => o.userId === storedUser.id);
//           setOrders(userOrders);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, []);

//   if (!user) return <p className="p-6 text-center text-gray-700">Login to view your orders.</p>;
//   if (orders.length === 0) return <p className="p-6 text-center text-gray-700">No orders yet.</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
//       <div className="space-y-4">
//         {orders.map((order) => (
//           <div key={order.id} className="border p-4 rounded">
//             <p className="text-gray-600 text-sm">{new Date(order.date).toLocaleString()}</p>
//             <ul className="mt-2 space-y-1">
//               {order.items.map((item) => (
//                 <li key={item.id}>{item.name} x {item.quantity || 1} - ${item.price}</li>
//               ))}
//             </ul>
//             <p className="font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [loading,setLoading]=useState(true);
//   const[error,setError]=useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     if (user) {
//       setLoading(false);
//       return;
//     }

//       setLoading(true);
//       axios
//         .get(`http://localhost:5000/orders?userId=${user.id}`)
//         .then((res) =>{
//         setOrders(res.data || []);
//         setLoading(false);
// })

//       .catch((err) => {
//        console.error("Error fetching orders:", err);
//        setError("Failed to fetch orders.");
//        setLoading(false);
//       });
    
//   }, [user]);

//   if (!user)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-gray-600 text-lg">Please login to view your orders.</p>
//       </div>
//     );
//   if(loading)
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <p className="text-gray-600 text-lg">Loading orders...</p>
//       </div>
//   );

//   if(error)
//     return(
//         <div className="flex justify-center items-center min-h-screen">
//           <p className="text-red-500 text-lg">{error}</p>
//           </div>
//     );

//     return(
//       <div className="p-6 min-h-screen bg-gray-50">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">My Orders</h2>
    

//       {orders.length === 0 ? (
//         <p className="text-gray-600">No orders found.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-white border rounded-xl shadow p-4 hover:shadow-lg transition"
//             >
//               <p className="text-gray-800 font-semibold mb-2">
//                 Order Date: {new Date(order.date).toLocaleDateString()}
//               </p>
//               <ul className="mb-3 text-gray-700">
//                 {order.items.map((item, i) => (
//                   <li key={i}>
//                     {item.name} – ${Number(item.price).toFixed(2)}
//                   </li>
//                 ))}
//               </ul>
//               <p className="font-bold text-gray-900">
//                 Total: ${Number(order.total).toFixed(2)}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchOrders = async () => {
//       console.log("User:",user);
//       if (!user) {
//         setLoading(false); 
//         return;
//       }

//       try {
//         setLoading(true);
//         const res = await axios.get(`http://localhost:5000/orders?userId=${user.id}`);
//         console.log("Orders response:",res.data)
//         setOrders(res.data || []);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError("Failed to fetch orders.");
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchOrders();
//   }, [user]);

//   const cancelOrder = async (orderId) => {
//     try {
//       await axios.patch(`http://localhost:5000/orders/${orderId}`, { status: "Cancelled" });
      
//       const res = await axios.get(`http://localhost:5000/orders?userId=${user.id}`);
//       setOrders(res.data || []);
//     } catch (err) {
//       console.error("Cancel error:", err);
//       alert("Failed to cancel order");
//     }
//   };                                                

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-gray-600 text-lg">Please login to view your orders.</p>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-gray-600 text-lg">Loading orders...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 min-h-screen bg-gray-50">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">My Orders</h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600">No orders found.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div key={order.id} className="bg-white p-4 rounded shadow">
//               <p className="font-semibold mb-2">
//                 Order Date: {new Date(order.date).toLocaleString()}
//               </p>

//               {order.items?.map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 mb-2">
//                   <img
//                     src={item.image || "https://via.placeholder.com/80"}
//                     alt={item.name}
//                     className="w-16 h-16 rounded"
//                   />
//                   <div>
//                     <p>{item.name}</p>
//                     <p>₹{item.price}</p>
//                   </div>
//                 </div>
//               ))}

//               <p className="font-bold">Total: ₹{order.total}</p>

//               {order.status !== "Cancelled" ? (
//                 <button
//                   onClick={() => cancelOrder(order.id)}
//                   className="bg-red-600 text-white px-2 py-1 rounded mt-2"
//                 >
//                   Cancel Order
//                 </button>
//               ) : (
//                 <span className="text-red-500 font-semibold">Cancelled</span>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState({ text: "", type: "" });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

//     if (!storedUser || !storedUser.id) {
//       setError("Please login to view your orders.");
//       setLoading(false);
//       return;
//     }

//     const userOrders = storedOrders.filter((order) => order.userId === storedUser.id);
//     setUser(storedUser);
//     setOrders(userOrders);
//     setLoading(false);
//   }, []);

//   const handleCancelOrder = (orderId) => {
//     const updatedOrders = orders.map((order) =>
//       order.id === orderId ? { ...order, status: "Cancelled" } : order
//     );

//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//     setMessage({ text: "Order cancelled successfully!", type: "success" });

//     setTimeout(() => setMessage({ text: "", type: "" }), 3000);
//   };

//   const handleClearOrder = (orderId) => {
//     const updatedOrders = orders.filter((order) => order.id !== orderId);
//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//     setMessage({ text: "Cancelled order cleared!", type: "success" });

//     setTimeout(() => setMessage({ text: "", type: "" }), 3000);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "text-yellow-600";
//       case "Shipping":
//         return "text-blue-600";
//       case "Delivered":
//         return "text-green-600";
//       case "Cancelled":
//         return "text-red-600";
//       default:
//         return "text-gray-600";
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading orders...</p>;
//   if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h2 className="text-3xl font-bold text-center mb-8">My Orders</h2>

//       {message.text && (
//         <div
//           className={`mb-6 text-center py-2 px-4 rounded ${
//             message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//           } transition duration-300`}
//         >
//           {message.text}
//         </div>
//       )}

//       {orders.length === 0 ? (
//         <p className="text-center text-gray-500">No orders found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
//             >
          
//               <div className="p-4 border-b space-y-2">
//                 {order.items.map((item, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-16 h-16 object-cover rounded border"
//                       onError={(e) => (e.target.src = "/fallback.jpg")}
//                     />
//                     <div>
//                       <p className="font-medium text-gray-800">{item.name}</p>
//                       <p className="text-sm text-gray-500">Size: {item.size || "N/A"}</p>
//                       <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
//                       <p className="text-sm text-gray-500">Price: ${item.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

              
//               <div className="px-4 py-3 flex-1 flex flex-col justify-between">
//                 <div>
//                   <p className="text-sm text-gray-500">Order ID: {order.id}</p>
//                   <p className="text-sm text-gray-500">
//                     Placed on: {new Date(order.date).toLocaleDateString()}{" "}
//                     {new Date(order.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//                   </p>

                  
//                   <div className="mt-2">
//                     {/* <p className={`font-semibold ${getStatusColor(order.status || "Pending")}`}>
//                       Status: {order.status || "Pending"}
//                     </p> */}

//                     <div className="mt-2 flex items-center gap-2">
//                       <div className={`h-2 w-1/3 rounded ${order.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}></div>
//                       <div className={`h-2 w-1/3 rounded ${order.status === "Shipping" || order.status === "Delivered" ? "bg-yellow-500" : "bg-gray-300"}`}></div>
//                       <div className={`h-2 w-1/3 rounded ${order.status === "Delivered" ? "bg-green-500" : "bg-gray-300"}`}></div>
//                     </div>

//                     <div className="flex justify-between text-xs text-gray-500 mt-1">
//                       <span>Pending</span>
//                       <span>Shipping</span>
//                       <span>Delivered</span>
//                     </div>
//                   </div>

//                   <p className="text-sm font-medium text-gray-700 mt-2">
//                     Total: ${order.total ? order.total.toFixed(2) : "0.00"}
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   {order.status === "Cancelled" ? (
//                     <button
//                       onClick={() => handleClearOrder(order.id)}
//                       className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
//                     >
//                       Clear Cancelled Order
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleCancelOrder(order.id)}
//                       className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
//                     >
//                       Cancel Order
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }













import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  FaTrash,
  FaBox,
  FaShippingFast,
  FaTruck,
  FaCheckCircle,
  FaTimesCircle,
  FaBoxOpen,
  FaClock,
  FaCalendarAlt,
  FaReceipt,
  FaFilter,
  FaShoppingBag,
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateLocalStorage = (updated) => {
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Cancel Order?",
      text: "Are you sure you want to cancel this order? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel Order",
      cancelButtonText: "Keep Order",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = orders.map((o) =>
          o.id === orderId ? { ...o, status: "Cancelled" } : o
        );
        updateLocalStorage(updated);
        Swal.fire({
          title: "Order Cancelled",
          text: "Your order has been successfully cancelled.",
          icon: "success",
          confirmButtonColor: "#059669",
        });
      }
    });
  };

  const handleClearCancelled = () => {
    const cancelledOrders = orders.filter((o) => o.status === "Cancelled");

    if (cancelledOrders.length === 0) {
      return Swal.fire({
        title: "Nothing to Clear",
        text: "You don't have any cancelled orders.",
        icon: "info",
        confirmButtonColor: "#3b82f6",
      });
    }

    Swal.fire({
      title: "Clear Cancelled Orders?",
      text: `This will permanently remove ${cancelledOrders.length} cancelled order(s) from your history.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Clear All",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = orders.filter((o) => o.status !== "Cancelled");
        updateLocalStorage(updated);
        Swal.fire({
          title: "Cleared Successfully",
          text: "All cancelled orders have been removed.",
          icon: "success",
          confirmButtonColor: "#059669",
        });
      }
    });
  };

  const steps = [
    { label: "Order Placed", icon: <FaCheckCircle /> },
    { label: "Packed", icon: <FaBox /> },
    { label: "Shipped", icon: <FaShippingFast /> },
    { label: "Out for Delivery", icon: <FaTruck /> },
    { label: "Delivered", icon: <FaCheckCircle /> },
  ];

  const getStepIndex = (status) => {
    if (status === "Pending") return 0;
    if (status === "Packed") return 1;
    if (status === "Shipped") return 2;
    if (status === "Out for Delivery") return 3;
    if (status === "Delivered") return 4;
    return 0;
  };

  const getDeliveryText = (status, date) => {
    if (status === "Delivered") return `Delivered on ${date || "Expected date"}`;
    if (status === "Out for Delivery") return "Out for delivery today";
    if (status === "Shipped") return `In transit - Expected by ${date || "3-5 days"}`;
    if (status === "Packed") return `Packed - Expected by ${date || "3-5 days"}`;
    if (status === "Cancelled") return "Order has been cancelled";
    return `Order placed - Expected by ${date || "3-5 days"}`;
  };

  const getStatusCounts = () => {
    return {
      all: orders.length,
      active: orders.filter(o => o.status !== "Cancelled" && o.status !== "Delivered").length,
      delivered: orders.filter(o => o.status === "Delivered").length,
      cancelled: orders.filter(o => o.status === "Cancelled").length,
    };
  };

  const filteredOrders = filter === "All" 
    ? orders 
    : filter === "Active"
    ? orders.filter(o => o.status !== "Cancelled" && o.status !== "Delivered")
    : orders.filter(o => o.status === filter);

  const statusCounts = getStatusCounts();
  const totalSpent = orders.reduce((sum, o) => sum + Number(o.total || 0), 0);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (orders.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaBoxOpen className="text-6xl text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">No Orders Yet</h2>
          <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaShoppingBag className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
                <p className="text-gray-600 text-sm mt-1">
                  Track and manage your purchases
                </p>
              </div>
            </div>

            {orders.some((o) => o.status === "Cancelled") && (
              <button
                onClick={handleClearCancelled}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                <FaTrash /> Clear Cancelled Orders
              </button>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaBox className="text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{statusCounts.all}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FaClock className="text-yellow-600" />
              </div>
              <p className="text-sm font-medium text-gray-600">Active</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{statusCounts.active}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FaCheckCircle className="text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-600">Delivered</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{statusCounts.delivered}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">₹</span>
              </div>
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{totalSpent.toLocaleString()}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8 border border-gray-200">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FaFilter />
              <span>Filter:</span>
            </div>
            {["All", "Active", "Delivered", "Cancelled"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  filter === status
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  filter === status ? "bg-white/20" : "bg-gray-200"
                }`}>
                  {status === "All" ? statusCounts.all :
                   status === "Active" ? statusCounts.active :
                   status === "Delivered" ? statusCounts.delivered :
                   statusCounts.cancelled}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Order List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => {
            const currentStep = getStepIndex(order.status);
            const isExpanded = expandedOrder === order.id;

            return (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Order Summary */}
                <div className="p-5 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <FaCalendarAlt className="text-xs" />
                        Placed on {new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                      <p className="text-2xl font-bold text-gray-900">₹{order.total}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={() => toggleOrderDetails(order.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                    >
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      {isExpanded ? "Hide Details" : "View Details"}
                    </button>
                    {order.status !== "Cancelled" && order.status !== "Delivered" && (
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                      >
                        <FaTimesCircle /> Cancel Order
                      </button>
                    )}
                  </div>
                </div>

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="bg-gray-50">
                    {/* Items */}
                    <div className="p-5 border-b border-gray-200">
                      <h4 className="text-md font-bold text-gray-900 mb-4">Order Items</h4>
                      <div className="space-y-3">
                        {order.items?.map((item, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center bg-white rounded-lg p-4 border border-gray-200"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                              />
                              <div>
                                <p className="text-gray-900 font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                  Quantity: {item.quantity} × ₹{item.price}
                                </p>
                              </div>
                            </div>
                            <p className="text-lg font-bold text-gray-900">
                              ₹{item.price * item.quantity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shipping Progress */}
                    {order.status !== "Cancelled" && (
                      <div className="p-5 border-b border-gray-200 bg-white">
                        <h4 className="text-md font-bold text-gray-900 mb-4">Shipping Status</h4>
                        <div className="relative">
                          {steps.map((step, i) => (
                            <div key={i} className="flex items-start mb-6 last:mb-0 relative">
                              <div className="flex-shrink-0 relative z-10">
                                <div
                                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                                    i <= currentStep
                                      ? "bg-green-600 border-green-600 text-white"
                                      : "bg-white border-gray-300 text-gray-400"
                                  }`}
                                >
                                  {step.icon}
                                </div>
                              </div>
                              {i < steps.length - 1 && (
                                <div
                                  className={`absolute left-5 top-10 w-0.5 h-full ${
                                    i < currentStep ? "bg-green-600" : "bg-gray-300"
                                  }`}
                                ></div>
                              )}
                              <div className="ml-4 flex-1">
                                <p
                                  className={`font-semibold ${
                                    i <= currentStep ? "text-gray-900" : "text-gray-500"
                                  }`}
                                >
                                  {step.label}
                                </p>
                                {i === currentStep && (
                                  <p className="text-sm text-gray-600 mt-1">
                                    {getDeliveryText(order.status, order.deliveryDate)}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Delivery Information */}
                    <div className="p-5 bg-white">
                      <h4 className="text-md font-bold text-gray-900 mb-4">Delivery Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <FaUser className="text-gray-500 mt-1" />
                          <div>
                            <p className="text-sm font-semibold text-gray-700">Customer Name</p>
                            <p className="text-sm text-gray-600">{order.customerName || "Guest User"}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaMapMarkerAlt className="text-gray-500 mt-1" />
                          <div>
                            <p className="text-sm font-semibold text-gray-700">Delivery Address</p>
                            <p className="text-sm text-gray-600">{order.address || "Address not available"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cancelled Status */}
                {order.status === "Cancelled" && !isExpanded && (
                  <div className="px-5 py-3 bg-red-50 border-t border-red-100">
                    <div className="flex items-center gap-2 text-red-600">
                      <FaTimesCircle />
                      <p className="text-sm font-medium">This order has been cancelled</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State for Filtered Results */}
        {filteredOrders.length === 0 && orders.length > 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBoxOpen className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No {filter} Orders</h3>
            <p className="text-gray-600">Try selecting a different filter to view your orders</p>
          </div>
        )}
      </div>
    </div>
  );
}