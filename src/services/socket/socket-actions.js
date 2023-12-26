export const JOIN_ROOM = '[JOIN_ROOM] connects a customer to a room';
export const LEAVE_ROOM = '[LEAVE_ROOM] disconnects a customer from a room';
export const LEAVE_ALL_ROOMS = '[LEAVE_ALL_ROOMS] disconnects customer from all rooms';

export const JoinRoomAction = (roomId, action) => {
  const payload = {
    roomId,
    action,
  };
  return (dispatch) => dispatch({
    type: JOIN_ROOM,
    payload,
  });
};
export const StartListeningToRoomAction = () => (dispatch: any) => {};

export const LeaveRoomAction = (roomId) => {
  return (dispatch) => dispatch({
    type: LEAVE_ROOM,
    payload: roomId.toString(),
  });
};

export const LeaveAllRoomsRoomAction = () => (dispatch: any) => {
  return (dispatch) => ({
    type: LEAVE_ALL_ROOMS,
  });
};
