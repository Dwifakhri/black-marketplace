import Product from "../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll({ raw: true });

    return res
      .status(200)
      .json({ data: response, message: "Successfully get products" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  console.log(req.body);
  const { name, description, price, discount, imageUrl } = req.body;

  if (!name || !description || !price) {
    return res
      .status(400)
      .json({ message: "Name, description, and price are required" });
  }

  const exist = await Product.findOne({ where: { name: name } });
  if (exist) {
    return res.status(400).json({ message: "Name is already exist" });
  }

  try {
    const total = price - (discount / 100) * price;
    const product = await Product.create({
      name,
      description,
      price,
      discount,
      totalPrice: total,
      imageUrl,
    });

    return res.status(201).json({
      data: product.get(),
      message: "Success add product",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
