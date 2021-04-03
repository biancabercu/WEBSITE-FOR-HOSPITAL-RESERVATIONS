const GET_URL = "http://18.219.43.178/get_room/";
/**
 * User type decomposition parameters
 *
 */
export const SECOND_NAME = "second_name";
export const FIRST_NAME = "first_name";
export const DIAGNOSTIC = "diagnostic";
export const ID_DOCTOR = "id_doctor";
export const ID_ROOM = "id_room";

export const getRoom = async (room_id:String) => {
   if (room_id != "" || room_id != null) {
     const composedURL = `${GET_URL}${room_id}`;

    let data = await fetch(composedURL, { method: "GET", mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));

    return await data;
   }
};
