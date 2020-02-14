import axios from 'axios';
import md5 from 'md5';
import consts from '../config/consts';


const generateHash = () => {
  return md5(`${consts.ts}${consts.privateKey}${consts.publicKey}`);
};

class Service {
  constructor() {
    this.consts = consts;
  }

  async store(path, data) {
    try {
      const response = await axios
        .post(`${this.consts.apiUrl}${path}?hash=${generateHash()}`, data);
      return ({
        data: response.data,
        ok: true,
        status: response.data.status,
      });
    }
    catch (error) {
      return ({
        ok: false,
        message: error.response.data.message || 'Route not found',
      });
    }
  }

  async show(path, params) {
    try {
      return await axios.get(`${this.consts.apiUrl}${path}?ts=${consts.ts}&apikey=${consts.publicKey}&hash=${generateHash()}${params.name ? `&nameStartsWith=${params.name}` : ''}`);
    } catch (error) {
      return ({
        ok: false,
        message: error || 'Route not found',
      });
    }
  }
}

export default Service;
