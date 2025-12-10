import { Mail, Phone, MapPin } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      value: "+251-980-536-095",
      color: "#5BC199",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@pharmapro.com",
      color: "#4E72D0",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Health Street, Bahirdar City",
      color: "#EF6500",
    },
  ]

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto px-6 text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-black text-[#223645] mb-8"
        >
          Contact PharmaPro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-[#223645]/70 mb-16 max-w-2xl mx-auto"
        >
          Have questions? Our pharmacist team is here 24/7
        </motion.p>

        
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white rounded-3xl p-10 shadow-2xl transition"
            >
              <item.icon
                className="w-16 h-16 mx-auto mb-6"
                style={{ color: item.color }}
              />
              <h3 className="text-2xl font-bold text-[#223645]">{item.title}</h3>
              <p className="text-[#223645]/80 mt-4">{item.value}</p>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-white rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-black text-[#223645] mb-8">Send Message</h2>
          <form className="space-y-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              whileFocus={{ scale: 1.02 }}
              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#5BC199] outline-none"
            />
            <motion.input
              type="email"
              placeholder="Email"
              whileFocus={{ scale: 1.02 }}
              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#5BC199] outline-none"
            />
            <motion.textarea
              rows="6"
              placeholder="Your Message"
              whileFocus={{ scale: 1.02 }}
              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#5BC199] outline-none resize-none"
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#EF6500] hover:bg-[#d65a00] text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}