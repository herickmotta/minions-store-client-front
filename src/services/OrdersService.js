import { API } from "aws-amplify";

class OrdersService {
  async postOrder(cart, userSub) {
    try {
      const data = await API.post("minions", `/users/${userSub}/orders`, {
        body: cart,
      });
      if (data) {
        return data;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  async getOrdersByUserSub(userSub) {
    try {
      const data = await API.get("minions", `/users/${userSub}/orders`);
      if (data) {
        return data;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default new OrdersService();
