const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 1499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 3,
    name: "Premium Running Shoes",
    price: 1999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 4,
    name: "Modern Backpack",
    price: 999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    price: 3299,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 7,
    name: "Classic Analog Watch",
    price: 2999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 8,
    name: "Laptop Stand",
    price: 799,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 9,
    name: "Wireless Gaming Mouse",
    price: 1299,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 10,
    name: "USB-C Fast Charger",
    price: 899,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 11,
    name: "Power Bank 20000mAh",
    price: 1399,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609592424896-0f4a3a1e4c90?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 12,
    name: "4K Smart Television",
    price: 32999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 13,
    name: "Wireless Earbuds",
    price: 1899,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 14,
    name: "DSLR Camera",
    price: 45999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 15,
    name: "Instant Photo Camera",
    price: 5999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 16,
    name: "Smartphone 5G",
    price: 24999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    trending: true
  },

  {
    id: 17,
    name: "Gaming Laptop",
    price: 74999,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    trending: true
  },
  {
    id: 18,
    name: "Wireless Keyboard",
    price: 1599,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 19,
    name: "27 Inch Monitor",
    price: 18999,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 20,
    name: "USB-C Hub",
    price: 1299,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 21,
    name: "Gaming Headset",
    price: 2999,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 22,
    name: "External SSD 1TB",
    price: 6999,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 23,
    name: "Gaming Mouse Pad",
    price: 699,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 24,
    name: "Laptop Cooling Pad",
    price: 1199,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 25,
    name: "Men's Casual T-Shirt",
    price: 599,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 26,
    name: "Men's Denim Jacket",
    price: 1999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 27,
    name: "Women's Summer Dress",
    price: 1499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 28,
    name: "Women's Handbag",
    price: 2499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 29,
    name: "Classic Sunglasses",
    price: 999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 30,
    name: "Men's Formal Shirt",
    price: 1299,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 31,
    name: "Women's Sneakers",
    price: 2199,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 32,
    name: "Leather Wallet",
    price: 799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 33,
    name: "Modern Coffee Maker",
    price: 4499,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 34,
    name: "Air Fryer",
    price: 5999,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 35,
    name: "Electric Kettle",
    price: 1499,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 36,
    name: "Modern Table Lamp",
    price: 1199,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 37,
    name: "Decorative Wall Clock",
    price: 899,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 38,
    name: "Ceramic Dinner Set",
    price: 2499,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 39,
    name: "Non-Stick Cookware Set",
    price: 3299,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 40,
    name: "Modern Sofa Chair",
    price: 8999,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 41,
    name: "Skincare Gift Set",
    price: 1299,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556229010-aa3d4c5f6b9d?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 42,
    name: "Perfume for Men",
    price: 1799,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 43,
    name: "Perfume for Women",
    price: 1999,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 44,
    name: "Hair Dryer",
    price: 1599,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 45,
    name: "Electric Shaver",
    price: 2299,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 46,
    name: "Makeup Brush Set",
    price: 699,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 47,
    name: "Professional Football",
    price: 899,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 48,
    name: "Basketball",
    price: 799,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 49,
    name: "Yoga Mat",
    price: 699,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 50,
    name: "Dumbbell Set",
    price: 2999,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 51,
    name: "Running Track Jacket",
    price: 1999,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 52,
    name: "Sports Water Bottle",
    price: 599,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 53,
    name: "The Psychology of Money",
    price: 399,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 54,
    name: "Atomic Habits",
    price: 499,
    category: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 55,
    name: "Clean Code",
    price: 799,
    category: "Books",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 56,
    name: "Java Programming Guide",
    price: 699,
    category: "Books",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 57,
    name: "Travel Suitcase",
    price: 3499,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 58,
    name: "Travel Neck Pillow",
    price: 599,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 59,
    name: "Travel Organizer Bag",
    price: 799,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 60,
    name: "Camping Backpack",
    price: 2499,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 61,
    name: "Leather Belt",
    price: 699,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 62,
    name: "Premium Backpack",
    price: 1899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 63,
    name: "Minimalist Wallet",
    price: 599,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 64,
    name: "Metal Keychain",
    price: 299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=600&q=80",
    trending: false
  },

  {
    id: 65,
    name: "Ergonomic Office Chair",
    price: 8999,
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 66,
    name: "Desk Organizer",
    price: 499,
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 67,
    name: "LED Desk Light",
    price: 999,
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    trending: false
  },
  {
    id: 68,
    name: "Premium Notebook",
    price: 349,
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
    trending: false
  }
];

const banners = [
  {
    id: 1,
    title: "Big Electronics Sale",
    subtitle: "Up to 60% OFF",
    description: "Upgrade your gadgets at amazing prices.",
    button: "Shop Electronics",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 2,
    title: "Fashion Festival",
    subtitle: "Flat 50% OFF",
    description: "Trending styles. Amazing prices.",
    button: "Explore Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 3,
    title: "Seller Special Offers",
    subtitle: "Deals Starting ₹499",
    description: "Exclusive offers from our top sellers.",
    button: "View Deals",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=85"
  }
];
export default products;