import axios from "axios";

export const getData = async () => {
    try {
        const response = await axios.get('https://cloud.codesupply.co/endpoint/react/data.json');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
