import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const getUserData = async () => {
    try {
        let token = await Cookies.get("token");
        if (!token) {
            console.log("No token found");
            return null;
        }

        let decodedData = jwtDecode(token);
        return decodedData;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
};

export default getUserData;
