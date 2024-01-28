export const UserType = {
  Staff: 1,
  Customer: 2,
  Driver: 3,
  Client: 4,
};

export const OrderStatus = {
  All: -1,
  Pending: 0,
  CheckedOut: 1,
  OrderAccepted: 2,
  Packaged: 3,
  Delivered: 4,
  Cancelled: 5,
  Rejected: 6,
};

export function convertObjectToArray(obj) {
  return Object.entries(obj).map(([name, value]) => ({ name, value }));
}