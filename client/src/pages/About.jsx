import { Shield, Package, Truck, Headphones } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function About() {
  const trustItems = [
    { icon: Shield, title: "Licensed Pharmacy" },
    { icon: Package, title: "Genuine Products Only" },
    { icon: Truck, title: "Cold Chain Delivery" },
    { icon: Headphones, title: "24/7 Pharmacist Support" },
  ]

  return (
    <main className="min-h-screen">
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-primary to-secondary text-white py-32"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold mb-6"
          >
            About PharmaPro
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl"
          >
            Your Health is Our Priority Since 2025
          </motion.p>
        </div>
      </motion.section>

      
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-dark mb-8">Our Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2025, PharmaPro was born from a simple belief: everyone deserves access to genuine medicines and quality wellness products at fair prices delivered with care and trust.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we are one of the fastest-growing licensed online pharmacies, serving thousands of families with 24/7 pharmacist support, temperature-controlled delivery, and 100% authentic products.
            </p>
          </motion.div>

          <motion.img
            src="/images/team.jpg"
            alt="Pharmacy Team"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-16 text-dark"
          >
            Why Thousands Trust Us
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <item.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-bold text-dark">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}