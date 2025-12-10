import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('all')

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products:", err))
  }, [])

  
  const categories = [
    { key: 'all', label: 'All Products', image: '/images/categories/all.jpg' },
    { key: 'Vitamins', label: 'Vitamins', image: '/images/categories/vitamins.jpg' },
    { key: 'Supplements', label: 'Supplements', image: '/images/categories/supplements.jpg' },
    { key: 'Herbal', label: 'Herbal', image: '/images/categories/herbal.jpg' },
    { key: 'Sports Nutrition', label: 'Sports Nutrition', image: '/images/categories/sports.jpg' },
    { key: 'Medicines', label: 'Medicines', image: '/images/categories/medicines.jpg' },

    { key: 'all', label: 'All Products', image: '/images/categories/all.jpg' },
    { key: 'Vitamins', label: 'Vitamins', image: '/images/categories/vitamins.jpg' },
    { key: 'Supplements', label: 'Supplements', image: '/images/categories/supplements.jpg' },
    { key: 'Herbal', label: 'Herbal', image: '/images/categories/herbal.jpg' },
    { key: 'Sports Nutrition', label: 'Sports Nutrition', image: '/images/categories/sports.jpg' },
    { key: 'Medicines', label: 'Medicines', image: '/images/categories/medicines.jpg' },

    { key: 'all', label: 'All Products', image: '/images/categories/all.jpg' },
    { key: 'Vitamins', label: 'Vitamins', image: '/images/categories/vitamins.jpg' },
    { key: 'Supplements', label: 'Supplements', image: '/images/categories/supplements.jpg' },
    { key: 'Herbal', label: 'Herbal', image: '/images/categories/herbal.jpg' },
    { key: 'Sports Nutrition', label: 'Sports Nutrition', image: '/images/categories/sports.jpg' },
    { key: 'Medicines', label: 'Medicines', image: '/images/categories/medicines.jpg' },
  ]

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-dark"
        >
          All Products
        </motion.h1>

        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center px-6 py-4 rounded-xl shadow-md transition w-40
                ${category === cat.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-dark hover:bg-primary hover:text-white'}
              `}
            >
              <motion.img
                src={cat.image}
                alt={cat.label}
                className="w-20 h-20 object-cover rounded-full mb-3 border-2 border-gray-300"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
              <span className="font-semibold">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products
            .filter(p => category === 'all' || p.category === category)
            .map((product, index) => (
              <motion.div
                key={product._id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="transition-all duration-300"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </div>
      </div>
    </main>
  )
}