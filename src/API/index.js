export const getOrders=()=>{
return fetch('https://dummyjson.com/carts/1')
.then(res => res.json())

}


export const getRevenue=()=>{
  return  fetch('https://dummyjson.com/carts')
.then(res => res.json())

}

export const getInventory = () => {
  return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching inventory:', error);
      throw error; // Rethrow the error to propagate it further
    });
};


export const getCustomers=()=>{
  return fetch('https://dummyjson.com/users')
.then(res => res.json())

}