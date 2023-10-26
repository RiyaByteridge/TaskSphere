import axios from "axios";
import { useEffect} from "react";

export const  useAxios = ()=>{


  //fetching the data
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const response = JSON.stringify(res);
        console.log(response);
      } catch (err) {
        console.log("Error Encountered");
      }
    };
    getData();
  }, []);

}
