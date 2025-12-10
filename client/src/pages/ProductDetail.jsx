
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <>
      
      <main className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          <img src={product.image || "https://via.placeholder.com/600"} alt={product.name} className="rounded-2xl shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-dark mb-6">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">₹{product.price}</p>
            {product.prescription && (
              <div className="bg-red-100 text-red-700 px-6 py-3 rounded-lg inline-block mb-6">
                Prescription Required — Upload prescription at checkout
              </div>
            )}
            <p className="text-lg text-gray-700 mb-8">{product.description || "High-quality wellness product from trusted brands."}</p>
            <button className="bg-primary text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      
    </>
  )
}