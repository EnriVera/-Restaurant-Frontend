import { v4 as uuidv4 } from "uuid";
// const SUCCESS, INFO, WARNING, DANGER
const notifications = [];

// types
const ADD_NOTIFICATION = "@LOGIN/ADD_NOTIFICATION";
const DELETE_NOTIFICATION = "@LOGIN/DELETE_NOTIFICATION";

// reducer
export default function MessageReducer(state = notifications, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    case DELETE_NOTIFICATION:
      return state.filter(
        (notification) => notification.id !== action.payload
      );
    default:
      return state;
  }
}

// actions
// export const obtenerAllRestaurantAction = (router) => async (dispatch, getState) => {
//   await AxiosR(router)
//     .get(`restaurant/all-restaurant`)
//     .then(({ data }) => {
//       dispatch({
//         type: ALL_RESTAURANT,
//         payload: data.restaurant,
//       });
//     })
//     .catch((e) => {});
// };


export const AddNotification = (notify) => async (dispatch, getState) => {
  dispatch({
    type: ADD_NOTIFICATION,
    payload: {
      id: uuidv4(),
      ...notify,
    }
  });
}

export const DeleteNotification = (notify) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_NOTIFICATION,
    payload: notify
  });
}