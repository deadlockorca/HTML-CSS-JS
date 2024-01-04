import { API_URL } from "../../AppApi";
import ApiService from "../../services/ApiService";

class AxiosServices {
    async getUser(userID: string) {
      try {
        const userId = userID ? `/${userID}` : '';
        const response = await ApiService.getRequest(API_URL + userId);
        return response.data;
      } catch (error) {
        console.error('Error in getUser', error);
        throw error;
    }
}
    async postUser(user: any){
        try {
            const response = await ApiService.postRequest(API_URL, user);
            return response.data;
        }catch (error) {
            console.error('Error in postUser', error);
            throw error;
        }
    }
    async updateUser(userId: string, user: any){
        try {
            const response = await ApiService.putRequest(API_URL + userId, user);
            return response.data;
        }catch (error) {
            console.error('Error in updateUser', error);
            throw error;
        }
    }
    async deleteUser(id: string){
        try {
            const userId = id ? `/${id}` : '';
            const response = await ApiService.deleteRequest(API_URL + id);
            return response.data;
    }catch (error) {
        console.error('Error in deleteUser', error);
        throw error;
    }
} 
}

const AxiosService = new AxiosServices();
export default AxiosService;