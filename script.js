const products = [
  {
    title: "Wireless Headphones",
    description: "Noise-cancelling over-ear.",
    year: 2024,
    price: 199.99,
    image: "https://example.com/images/headphones.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "10%"
    },
    quantity: 50
  },
  {
    title: "Smartphone",
    description: "Latest model with 128GB storage and 5G connectivity.",
    year: 2022,
    price: 899.99,
    image: "https://example.com/images/smartphone.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 20
  },
  {
    title: "Gaming Laptop",
    description: "High-performance laptop with RTX 3060 GPU and 16GB RAM.",
    year: 2024,
    price: 1299.99,
    image: "https://example.com/images/laptop.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "15%"
    },
    quantity: 10
  },
  {
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys.",
    year: 2021,
    price: 89.99,
    image: "https://example.com/images/keyboard.jpg",
    isDiscounted: false,
    isRefurbished: false,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 100
  },
  {
    title: "Smartwatch",
    description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
    year: 2022,
    price: 249.99,
    image: "https://example.com/images/smartwatch.jpg",
    isDiscounted: true,
    isRefurbished: true,
    discount: {
      discountAvailable: "5%"
    },
    quantity: 30
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with 20W output and 12-hour battery life.",
    year: 2024,
    price: 49.99,
    image: "https://example.com/images/speaker.jpg",
    isDiscounted: false,
    isRefurbished: false,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 200
  },
  {
    title: "4K Monitor",
    description: "Ultra HD monitor with 144Hz refresh rate and HDR support.",
    year: 2024,
    price: 399.99,
    image: "https://example.com/images/monitor.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "20%"
    },
    quantity: 25
  },
  {
    title: "Fitness Tracker",
    description: "Lightweight tracker with step count, calorie burn, and sleep monitoring.",
    year: 2021,
    price: 69.99,
    image: "https://example.com/images/fitness-tracker.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 150
  },
  {
    title: "Drone",
    description: "Camera drone with 4K video and 30-minute flight time.",
    year: 2024,
    price: 999.99,
    image: "https://example.com/images/drone.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "25%"
    },
    quantity: 15
  },
  {
    title: "Electric Scooter",
    description: "Foldable scooter with a top speed of 25 mph and 30-mile range.",
    year: 2022,
    price: 499.99,
    image: "https://example.com/images/scooter.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 40
  }
];

// 1. Console Log All Products (Title, Price)
console.log('All products with title and price:');
products.forEach((product, index) => console.log(` - ${index + 1}. ${product.title}. ${product.price}`));


// 2. Filter Products with Long Descriptions
//Write a function that filters out all products whose description is less than 30 characters long.
console.log('Products with long descriptions:');
const less30 = products.filter(product => product.description.length >= 30);
less30.forEach((product, index) => console.log(` - ${index + 1}. ${product.title}`));

// 3. Filter Products by Price Range
//Write a function that filters out all products that are in the price range $200 - $400.
console.log('Producst with more than 15% discount:');
const priceRange = products.filter(product => product.price >= 200 && product.price <= 400);
priceRange.forEach((product, index) => console.log(` - ${index + 1}. ${product.title}, $${product.price}`));

// 4. Filter Discounted Products
//Write a function that filters only the products where isDiscounted is true.
console.log('Discounted products:');
const discountedTrue = products.filter(product => product.isDiscounted === true);
discountedTrue.forEach((product, index) => console.log(` - ${index + 1}. ${product.title}`));


// 5. Filter Products with 15% or More Discount
//Write a function that filters all the products where the discountAvailable property inside discount is 15% or more.
//Hint: You’ll need to convert the string (e.g., "15%") into a number using parseFloat().
console.log('Products with 15% or more discount:');
const filterProductsByDiscount = products.filter((product) =>  parseInt(product.discount.discountAvailable) >= 15 );
filterProductsByDiscount.forEach((product, index) => {console.log(` - ${index + 1}. ${product.title}, ${product.discount.discountAvailable}`);
})


// 6. Filter New Products
//Write a function that filters all products that have a year equal to 2024.
console.log('New products 2024:');
const year2024 = products.filter(product => product.year >= 2024);
year2024.forEach((item, index) => console.log(` - ${index + 1}. ${item.title}: ${item.year}`));
