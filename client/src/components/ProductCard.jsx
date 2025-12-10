import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.img
        src={
          product.image || "https://via.placeholder.com/300x300?text=Supplement"
        }
        alt={product.name}
        className="w-full h-64 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600">{product.category}</p>

        <div className="flex justify-between items-center mt-4">
          <motion.span
            className="text-3xl font-bold text-primary"
            whileHover={{ scale: 1.1, color: "#16a34a" }} // hover color green
            transition={{ duration: 0.3 }}
          >
            ₹{product.price}
          </motion.span>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to={`/product/${product._id}`}
              className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors"
            >
              <ShoppingCart size={20} /> View
            </Link>
          </motion.div>
        </div>

        {product.prescription && (
          <motion.span
            className="inline-block mt-3 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Prescription Required
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
