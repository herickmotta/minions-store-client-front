import { API } from "aws-amplify";

class UserService {
  async signUp(userInfo) {
    try {
      const data = await API.post("minions", "/users", { body: userInfo });
      if (data) {
        return data;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default new UserService();
