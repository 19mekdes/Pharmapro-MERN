
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const posts = [
  { 
    title: "Top 10 Vitamins for Winter Immunity", 
    date: "Dec 1, 2025", 
    excerpt: "Boost your defense with these essential nutrients...", 
    image: "/images/blog/vitamins.jpg" 
  },
  { 
    title: "How Ashwagandha Reduces Stress", 
    date: "Nov 28, 2025", 
    excerpt: "Ancient herb, modern science the complete guide.", 
    image: "/images/blog/ashwagandha.jpg" 
  },
  { 
    title: "Best Time to Take Vitamin D", 
    date: "Nov 25, 2025", 
    excerpt: "Maximize absorption with these simple tips.", 
    image: "/images/blog/vitamin-d.jpg" 
  },
]

export default function Blog() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-16 text-dark">
          Health & Wellness Blog
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
             
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="p-8">
                <p className="text-accent font-semibold mb-2">{post.date}</p>
                <h3 className="text-2xl font-bold text-dark mb-4">{post.title}</h3>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <a href="#" className="text-primary font-bold hover:underline">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}