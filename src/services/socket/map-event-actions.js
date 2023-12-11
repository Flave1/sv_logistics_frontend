import { getAllStaff } from "../../store/actions";

export const eventActions: any = [
  {
    action: onConnect,
    event: "connect",
    dispatchAble: false,
  },
  {
    action: onDisconnect,
    event: "disconnect",
    dispatchAble: false,
  },
  {
    action: getAllStaff,
    event: "get_all_staff_event",
    dispatchAble: true,
  },
];

function onConnect() {
  console.log("Socket is connected");
}

function onDisconnect() {
  console.log("Socket is disconnected");
}
