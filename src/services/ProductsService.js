import api from "../config/api";

class ProductsService {
  async getAll() {
    try {
      const { data } = await api.get("/products");
      if (data) {
        return data.products;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default new ProductsService();
