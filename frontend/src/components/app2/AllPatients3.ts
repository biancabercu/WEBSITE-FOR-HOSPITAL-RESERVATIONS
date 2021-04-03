const GET_URL = "http://18.219.43.178/get_patients_by_room/id_0003";
/**
 * User type decomposition parameters
 *
 */
export const SECOND_NAME = "second_name";
export const FIRST_NAME = "first_name";
export const DIAGNOSTIC = "diagnostic";
export const ID_DOCTOR = "id_doctor";
export const ID_ROOM = "id_room";

export const getAllPatients3 = async () => {
  

    let data = await fetch(GET_URL, { method: "GET", mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));

    return await data;
  
};
