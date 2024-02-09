import { JOIN_ROOM, LEAVE_ALL_ROOMS, LEAVE_ROOM } from '../../../services/socket/socket-actions';

const initialState = {
  rooms: [],
  errorMessage: '',
  successMessage: '',
  showLoading: false,
};

export function SocketReducer(state = initialState, action) {
  if (action.type === JOIN_ROOM) {    
    const isDuplicate = state.rooms.some((room) => room.roomId === action.payload.roomId);
    if (!isDuplicate) {
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };
    }
  }
  
  if (action.type === LEAVE_ROOM) {
    const updatedRooms = state.rooms.filter((room) => room.roomId !== action.payload);
    return {
      ...state,
      rooms: updatedRooms,
    };
  }

  if (action.type === LEAVE_ALL_ROOMS) {
    return {
      ...state,
      rooms: [],
    };
  }

  return state;
}
