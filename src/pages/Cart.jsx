// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { createOrder } from "../services/api";

// export default function Cart() {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const handleRemove = (id) => {
//     const newCart = cart.filter((item) => item.id !== id);
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };

//   const handleQuantityChange = (id, qty) => {
//     const newCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity: qty } : item
//     );
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
// 0
//   );
//   const handleCheckout = async () => {
//     if (!user) return alert("Login to checkout!");

//     const order = {
//       userId: user.id,
//       items: cart,
//       total: totalPrice,
//       date: new Date().toISOString(),
//     };

//     try {
//       await createOrder(order);
//       alert("Order confirmed!");
//       localStorage.removeItem("cart");
//       setCart([]);
//       navigate("/orders");
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       alert("Checkout failed!");
//     }
//   };

//   if (cart.length === 0)
//     return(
//   <div className="min-h-screen w-screen flex items-center justify-center bg-gray-10">
//    <p className=" text-lg text-gray-700 mb-90">Your cart is currently empty.</p>
//    <img src="https://static.vecteezy.com/system/resources/previews/046/334/025/original/shopping-cart-silhouette-shopping-cart-logo-shopping-cart-black-icon-vector.jpg" alt=""
//    className="w-70 h-70 object-contain mb-70"
//    />
//    </div>
//     );

//   return (
//     <div className="min-h-screen w-screen p-4 flex justify-center b-gray-50 ">
//       <div className="w-full max-w-3xl">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>
//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex justify-between items-center border p-4 rounded bg-white shadow-sm"
//           >
//             <div>
//               <h3 className="font-bold">{item.name}</h3>
//               <p>${item.price}</p>
//               <input
//                 type="number"
//                 min={1}
//                 value={item.quantity || 1}
//                 onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
//                 className="border p-1 rounded w-16 mt-1"
//               />
//             </div>
//             <button
//               onClick={() => handleRemove(item.id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 flex justify-between items-center">
//         <span className="font-bold text-xl">Total: {totalPrice.toFixed(2)}</span>
//         <button
//           onClick={handleCheckout}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser(u);

    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    if (u && u.email && allCarts[u.email]) {
      setCart(allCarts[u.email]);
    }
  }, []);

  const updateStorage = (updated) => {
    if (!user || !user.email) return;
    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    allCarts[user.email] = updated;
    localStorage.setItem("cart", JSON.stringify(allCarts));
  };

  const handleQuantity = (id, size, qty) => {
    const updated = cart.map((i) =>
      i.id === id && i.size === size
        ? { ...i, quantity: Math.max(1, qty) }
        : i
    );
    setCart(updated);
    updateStorage(updated);
  };

  const handleRemove = (id, size) => {
    const updated = cart.filter((i) => !(i.id === id && i.size === size));
    setCart(updated);
    updateStorage(updated);
  };

  const subtotal = cart.reduce(
    (sum, i) => sum + Number(i.price) * (i.quantity || 1),
    0
  );
  const tax = subtotal * 0.1;
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + tax + shipping;

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="text-center max-w-lg px-8">
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-30"></div>
            <div className="relative inline-flex items-center justify-center w-48 h-48 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Your Cart is Empty</h1>
          <p className="text-white/80 mb-12 text-lg leading-relaxed">
            Start exploring our amazing products and add your favorites to the cart
          </p>
          <button
            onClick={() => navigate("/products")}
            className="group inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full text-sm font-semibold hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105"
          >
            Start Shopping
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)'}}>
      {/* Modern Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Shopping Cart</h1>
              <p className="text-gray-500 text-sm">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
            </div>
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
                >
                  <div className="flex gap-6">
                    <div className="relative flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                          <p className="text-2xl font-bold text-gray-900 mb-1">₹{item.price}</p>
                          <p className="text-sm text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full">
                            Size: <span className="font-semibold text-gray-700">{item.size}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id, item.size)}
                          className="p-2.5 text-gray-400 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-200"
                          title="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-600">Quantity:</span>
                          <div className="inline-flex items-center border-2 border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                            <button
                              onClick={() =>
                                handleQuantity(item.id, item.size, (item.quantity || 1) - 1)
                              }
                              disabled={(item.quantity || 1) <= 1}
                              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold text-lg"
                            >
                              −
                            </button>
                            <span className="w-14 h-10 flex items-center justify-center font-semibold text-gray-900 border-x-2 border-gray-200 bg-gray-50">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantity(item.id, item.size, (item.quantity || 1) + 1)
                              }
                              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors font-bold text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 mb-1">Item Total</p>
                          <p className="text-2xl font-bold text-purple-600">
                            ₹{(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 sticky top-6 text-white">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/90">
                  <span className="text-lg">Subtotal</span>
                  <span className="text-lg font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/90">
                  <span className="text-lg">Tax (10%)</span>
                  <span className="text-lg font-semibold">₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/90">
                  <span className="text-lg">Shipping</span>
                  <span className="text-lg font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-300 font-bold">FREE</span>
                    ) : (
                      `₹${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {subtotal < 1000 && subtotal > 0 && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mt-4 border border-white/30">
                    <p className="text-sm text-white">
                      🎉 Add ₹{(1000 - subtotal).toFixed(2)} more for FREE shipping!
                    </p>
                  </div>
                )}
                
                <div className="border-t border-white/30 pt-5 mt-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xl font-medium">Total Amount</span>
                    <span className="text-4xl font-bold">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-white text-purple-600 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 group mb-4"
              >
                Proceed to Checkout
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <div className="space-y-3 mt-6 pt-6 border-t border-white/30">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-white/90">Secure 256-bit SSL encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-white/90">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span className="text-sm text-white/90">Free returns on all orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}