import axios from "axios";
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const fetchAllJobs = async () => {
  const config = {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  };

  try {
    const response = await axios.get(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
      config
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
