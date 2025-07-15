import React, { useState, useEffect } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Sports', 'Home'];

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true);
      // Mock data
      const mockProducts: Product[] = [
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 99.99,
          image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4.5,
          category: 'Electronics',
          description: 'High-quality wireless headphones with noise cancellation'
        },
        {
          id: 2,
          name: 'Smart Watch',
          price: 199.99,
          image: 'https://images.pexels.com/photos/1466258/pexels-photo-1466258.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4.3,
          category: 'Electronics',
          description: 'Advanced smartwatch with fitness tracking'
        },
        {
          id: 3,
          name: 'Running Shoes',
          price: 79.99,
          image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4.7,
          category: 'Sports',
          description: 'Comfortable running shoes for all terrains'
        },
        // Add more mock products...
      ];
      
      setTimeout(() => {
        setProducts(mockProducts);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-xl mb-6">
            Discover amazing products at unbeatable prices
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <div className="flex space-x-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Home;