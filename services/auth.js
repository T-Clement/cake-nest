import apiAxios from "../libs/axios";

export async function fetchUser() {

    // console.log(get.cookie("X-XSRF-TOKEN"));

    try {

        const response = await apiAxios.get("/api/user");
        
        // console.log("response fetchUser");
        // console.log(response);
        const user = response.data;
        return user;  
        
    } catch (error){
        return null;  // no user
    }
  }