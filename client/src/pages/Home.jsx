import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 8)))
      .catch((err) => console.error("Failed to fetch products:", err))
  }, [])

  return (
    <>
      <main>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-cover bg-center bg-no-repeat h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
                              url('/images/pharmacy-hero.jpg')`,
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your Trusted Pharmacy <br /> & Wellness Partner
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl mb-10 opacity-90"
            >
              Vitamins,Supplements, Medicines and 24/7 Support
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-10 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all"
              >
                Shop Now
              </motion.a>
              <motion.a
                href="/prescription-upload"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-10 py-5 rounded-xl text-xl font-bold border-2 border-accent hover:bg-orange-600 transition-all"
              >
                Order Medicines
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        
        <section className="py-24 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
                  Prevention is Better Than Cure
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
                  Build strong immunity and protect your family with our preventive healthcare
                  range. From daily vitamins to seasonal flu protection we’ve got you covered.
                </p>
                <motion.a
                  href="/shop"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-accent text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-orange-600 shadow-xl"
                >
                  Explore Preventive Care
                </motion.a>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  "/images/prevention1.jpg",
                  "/images/prevention2.jpg",
                  "/images/prevention3.jpg",
                  "/images/prevention4.jpg",
                ].map((src, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, preventiony: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                    whileHover={{ y: -10 }}
                  >
                    <img
                      src={src}
                      alt={`Wellness ${idx + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Best Sellers</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our most loved products chosen by thousands of happy customers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <motion.div
                    key={product._id || index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="transition-all duration-300"
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))
              ) : (
                [...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg animate-pulse overflow-hidden"
                  >
                    <div className="bg-gray-300 h-64"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}