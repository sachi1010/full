
import React, { useState, useEffect } from 'react';
import './Medical.css';

const Medical = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState();
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/medicines") 
      .then(response => response.json())
      .then(data => setProducts(data)) 
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const filteredproduct = products.filter(product=>
       product.name.toLowerCase().includes(search.toLowerCase())
  );

const handlecart = () => {
  if (!selectedProduct) return;
  const product = products.find(p => p.name === selectedProduct);
  if (!product) return; 
  const existingProduct = cart.find(item => item.name === product.name);
  if (existingProduct) {  
    const updatedCart = cart.map(item => 
      item.name === product.name 
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, quantity }]);
  }
};

const handlesubmit =()=>{
  if(customerName && cart.length > 0){
    alert(`Order submitted for ${customerName}`);
  }
  else{
    alert("fill the product");
  }
}

const handleRemove = (productName) => {
  const updatedCart = cart.filter(item => item.name !== productName);
  setCart(updatedCart);
};

const handlesearch =(e)=>{
         setSearch(e.target.value);
}

const handleproduct =(e)=>{
  setSelectedProduct(e.target.value);
}

const handlequantity =(e)=>{
  setQuantity(e.target.value);
}

const handlecustomer=(e)=>{
  setCustomerName(e.target.value);
}

const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
         <div id="store">
              <h1>Medical Store</h1>
              <form>
                    <label htmlFor="search">Search:</label>
                    <input type="text" placeholder="Search box" onChange={handlesearch} value={search} />
                    <br />
                    <label htmlFor="product">Product:</label><br/>
                    {/* <input type="text" name="product" placeholder="Enter product" onChange={handleproduct}/> */}
                    <select name="product" id="product" value={selectedProduct} onChange={handleproduct }>
                      <option value="" >Select Product</option>
                  
                        {products.map((product)=>(
                          <option key={product} value={product.name}>
                            {product.name}
                          </option>
                        ))}
                       
                    </select>
                    <br />
                    <label htmlFor="quantity">Quantity:</label>
                    <input  type="number" name="quantity" placeholder="Enter quantity" value={quantity} onChange={handlequantity} />
                    <br />
                    <label htmlFor="customer">Customer Name:</label>
                    <input  type="text"  name="customer"   placeholder="Enter customer name" onChange={handlecustomer}  />
              </form>
{/*  */}
                  <div id="btn">
                    <button onClick={handlecart}>Add to Cart</button>
                    <button onClick={handlesubmit}>Submit</button>
                  </div>
      </div>
      {/*  */}
          <div id="cart">
            <h1>cart</h1>
               {cart.length == 0?(
                <p>Cart is empty</p>
               ):(
                <table id='carttable'>
                   <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Customer Name</th>
                      <th>Total Amount</th>
                    </tr>
                   </thead>
                   <tbody>
                    {cart.map((item,index)=>(
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{customerName}</td>
                        <td>
                       {
                         (item.price * item.quantity)
                       }
                        </td>
                        <td>
                      <button onClick={() => handleRemove(item.name)}>Remove</button>
                    </td>
                      </tr>
                    ))}
                   </tbody>
               </table>
               )
               

              }
              <div id="totalAmount">
              <h2>Total Bill Amount is: {totalAmount.toFixed()}</h2>
            </div>
          </div>


{/*  */}

{search && (
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
)}
    


        
       
    </>
  );
};

export default Medical;

