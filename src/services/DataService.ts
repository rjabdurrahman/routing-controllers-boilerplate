import { Service } from 'typedi';
import axios from 'axios';

@Service()
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  async getUsers() {
    const response = await axios.get(`${this.apiUrl}/users`);
    return response.data;
  }

  async getUserById(userId: number) {
    const response = await axios.get(`${this.apiUrl}/users/${userId}`);
    return response.data;
  }
}