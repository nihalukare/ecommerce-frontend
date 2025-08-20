# My Shopping Site

A furniture shopping app that lets users explore products by category and refine their search with multiple filters for a personalized shopping experience. Users can save items to a wishlist, add them to the cart for checkout, manage their addresses, and view their order history—all in one place.

---

## Demo Link

[Live Demo](https://ecommerce-frontend-coral-eight.vercel.app/)

---

## Quick Start

```
git clone https://github.com/nihalukare/ecommerce-frontend.git
cd <your-repo>
npm install
npm run dev
```

---

## Technologies

- Bootstrap
- React JS
- React Router
- Node.js
- Express
- MongoDB

## Demo Video

Watch a walkthrough of all major features of this application - [Video](https://drive.google.com/file/d/15o5c11RDnFLJxm2Pq572KwOJWcYhun6M/view?usp=sharing)

## Features

### Home

- Displays a list of featured categories to browse products.
- Carousel showing the latest deals and offers.
- Dedicated sections for Sale and New Arrivals.

### Products Listing Page

- Displays all products under the selected category.
- Sub-category menu at the top for browsing by sub-category.
- Filters panel on the left for refining products.
- “Add to Cart” and “Add to Wishlist” buttons for each product.
- Product card showing details such as name, price, and discount.

### Product Details Page

- Displays product images and detailed information.
- Shows title, rating, warranty details, price, discount, retail services, and description.
- Option to select product quantity.
- Apparel section showing more recomended products.

### Wishlist Management

- Accessible from the navbar.
- Displays saved products with options to remove them or move to the cart.

### Cart Management

- Accessible from the navbar.
- Displays products added to the cart with options to remove or move them to the wishlist.
- Order details section showing selected products, quantity, and price.
- Order summary with the total price.
- Address list to choose a delivery address.
- “Place Order” button to confirm purchase.

### User Profile

- Manage user details, addresses, and order history.
- Address list with edit and delete options.

### Order History Page

- Displays all orders placed by the user.
- Shows details for each order, including order ID, date and time, products, individual prices, total amount, and shipping address with customer name and contact details.

## API Reference

### POST /api/products

Get all products<br />
Sample Response:

```
{ data: { products: [ {_id, productName, category, subCategory, rating, actualPrice, discount, discountedPrice, warranty,  imageUrl, description, },.... ] } }
```

### GET /api/products/:productId

Get product by Id<br />
Sample Response:

```
{ data: { product:  {_id, productName, category, subCategory, rating, actualPrice, discount, discountedPrice, warranty,  imageUrl, description, } } }
```

### GET /api/categories

Get all product categories
Sample Response:

```
{ data: { categories: [ { _id, categoryName, subCategory },.... ] } }
```

### GET /api/categories/:categoryId

Get a category by id
Sample Response:

```
{ data: { category: [ { _id, categoryName, subCategory: [ { _id, subCategoryName, products },.... ] },.... ] } }
```

### GET /api/subCategory/:subCategoryId

Get subCategory by its Id.
Sample Response:

```
{ data: { subCategory: { _id, subCategoryName, products: [ { _id, productName, category, subCategory, rating, actualPrice, discount, discountedPrice, warranty, imageUrl, description},.... ] } } }
```

### GET /api/products/subCategory/:subCategoryName

Get products by subCategory
Sample Response:

```
{ message, data: { products: [ { _id, productName, category, subCategory, rating, actualPrice, discount, discountedPrice, warranty, imageUrl, description },.... ] } }
```

### POST /api/addresses

Create a new address
Sample Response:

```
{ message: Address Added successfully., address: { _id, country, fullName, mobileNumber, pincode, flatOrHouse, areaOrStreet, landmark, townOrCity, state, isDefaultAddress }, }
```

### GET /api/addresses

Get all addresses
Sample response:

```
{ message:, data: [ { _id, country, fullName, mobileNumber, pincode, flatOrHouse, areaOrStreet, landmark, townOrCity, state, isDefaultAddress },....] }
```

### DELETE /api/addresses/:addressId

Delete a address by its Id
Sample Response:

```
{ message: Address deleted successfully., data: deletedAddress, }
```

### GET /api/addresses/:addressId

Get address by its Id
Sample Response:

```
{ message:, data: { _id, country, fullName, mobileNumber, pincode, flatOrHouse, areaOrStreet, landmark, townOrCity, state, isDefaultAddress } }
```

### POST /api/orders

Create a new order
Sample Response:

```
{ message, savedOrder: { _id, products, address, createdAt, updatedAt } }
```

### GET /api/orders

Get all placed orders
Sample Response:

```
{ message, orders: [ { _id, products,  address, createdAt, updatedAt } ] }
```

### PUT /api/addresses/:addressId

Update address by addressId
Sample Response:

```
{ message, updatedAddress: { _id, country, fullName, mobileNumber, pincode, flatOrHouse, areaOrStreet, landmark, townOrCity, state, isDefaultAddress } }
```

## Contact

For bugs or feature requests, please reach out to nihalukare959@gmail.com
