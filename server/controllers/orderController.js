import Order from "../models/Order.js"


export const createOrder = async (req, res) => {
  const order = new Order(req.body)
  const createdOrder = await order.save()
  res.status(201).json(createdOrder)
}


export const getOrders = async (req, res) => {
  const orders = await Order.find({}).populate("products.product")
  res.json(orders)
}