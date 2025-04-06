
import React, { useState, useEffect } from 'react';
import './Medical.css';

const Medical = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/medicines") // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setProducts(data)) // Set the products array
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const filteredproduct = products.filter(product=>
       product.name.toLowerCase().includes(search.toLowerCase())
  );
 
const handlecart =()=>{
   const addproduct = cart.find(products =>(products.name === selectedProduct));
   if(addproduct){
    const newcart = [...cart, { ...addproduct, quantity: addproduct.quantity +
      1}];
      setCart(newcart);
   }
}

const handlesubmit =()=>{
  if(customerName && cart.length > 0){
    alert(`Order submitted for ${customerName}!`);
  }
  else{
    alert("fill the product");
  }
}

const handlesearch =(e)=>{
         setSearch(e.target.value);
}

const handleproduct =(e)=>{
  setSelectedProduct(e.target.value);
}

  return (
    <>
      <div id="store">
        <h1>Medical Store</h1>
        <form>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            placeholder="Search box"
            onChange={handlesearch}
            value={search}
          />
          <br />
          <label htmlFor="product">Product:</label>
          <input
            type="text"
            name="product"
            placeholder="Enter product"
           onChange={handleproduct}
          />
          <br />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
           
          />
          <br />
          <label htmlFor="customer">Customer Name:</label>
          <input
            type="text"
            name="customer"
            placeholder="Enter customer name"
           
          />
        </form>

        <div id="btn">
          <button onClick={handlecart}>Add to Cart</button>
          <button >Remove from Cart</button>
          <button onClick={handlesubmit}>Submit</button>
        </div>
      </div>

      <div id="details">
        <h1>Product List</h1>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredproduct.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.stock > 0 ? (
    <span style={{ color: "green" }}>In Stock</span>
  ) : (
    <span style={{ color: "red" }}>Out of Stock</span>
  )}
</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    


        
       
    </>
  );
};

export default Medical;


// import React, { useState, useEffect } from 'react';
// import './Medical.css';

// const Medical = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [search, setSearch] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState("");

//   // Fetch products from API on component mount
//   useEffect(() => {
//     fetch("http://localhost:5000/medicines") // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => setProducts(data)) // Set the products array
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

//   // Filter products based on search input
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Add product to the cart
//   const handleAddToCart = () => {
//     const productToAdd = products.find(p => p.name === selectedProduct);
//     if (productToAdd) {
//       const newCart = [...cart, { ...productToAdd, quantity }];
//       setCart(newCart);
//     }
//   };

//   // Remove product from the cart
//   const handleRemoveFromCart = (productName) => {
//     const newCart = cart.filter(item => item.name !== productName);
//     setCart(newCart);
//   };

//   // Handle form changes
//   const handleSearchChange = (event) => setSearch(event.target.value);
//   const handleProductChange = (event) => setSelectedProduct(event.target.value);
//   const handleQuantityChange = (event) => setQuantity(parseInt(event.target.value) || 1);
//   const handleCustomerChange = (event) => setCustomerName(event.target.value);

//   // Handle Submit Order
//   const handleSubmitOrder = () => {
//     if (customerName && cart.length > 0) {
//       alert(`Order submitted for ${customerName}!`);
//       // Here you can send the cart and customer data to your backend for processing
//     } else {
//       alert("Please fill in customer name and add products to cart.");
//     }
//   };

//   return (
//     <div>
//       <div id="store">
//         <h1>Medical Store</h1>
//         <form>
//           <label htmlFor="search">Search:</label>
//           <input
//             type="text"
//             id="search"
//             value={search}
//             onChange={handleSearchChange}
//             placeholder="Search products"
//           />
//           <br />

//           <label htmlFor="product">Product:</label>
//           <select
//             id="product"
//             value={selectedProduct}
//             onChange={handleProductChange}
//           >
//             <option value="">Select Product</option>
//             {filteredProducts.map((product) => (
//               <option key={product.id} value={product.name}>
//                 {product.name}
//               </option>
//             ))}
//           </select>
//           <br />

//           <label htmlFor="quantity">Quantity:</label>
//           <input
//             type="number"
//             id="quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//             min="1"
//             placeholder="Enter quantity"
//           />
//           <br />

//           <label htmlFor="customer">Customer Name:</label>
//           <input
//             type="text"
//             id="customer"
//             value={customerName}
//             onChange={handleCustomerChange}
//             placeholder="Enter customer name"
//           />
//         </form>

//         <div id="btn">
//           <button type="button" onClick={handleAddToCart}>Add to Cart</button>
//           <button type="button" onClick={handleSubmitOrder}>Submit Order</button>
//         </div>
//       </div>

//       <div id="cart">
//         <h1>Cart</h1>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.quantity}</td>
//                   <td>{item.price * item.quantity}</td>
//                   <td>
//                     <button onClick={() => handleRemoveFromCart(item.name)}>Remove</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

    //   <div id="details">
    //     <h1>Product List</h1>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Product Name</th>
    //           <th>Product Quantity</th>
    //           <th>Product Price</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {filteredProducts.map((product) => (
    //           <tr key={product.id}>
    //             <td>{product.name}</td>
    //             <td>{product.quantity}</td>
    //             <td>{product.price}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
//   );
// };

// export default Medical;
