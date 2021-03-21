import axios from "axios";

class AddressService {
  async getFromCep(cep) {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data) {
        return data;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default new AddressService();
