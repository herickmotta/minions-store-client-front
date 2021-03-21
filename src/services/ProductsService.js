import { API } from "aws-amplify";

class ProductsService {
  async getAll() {
    try {
      const data = await API.get("minions", "/products");
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
