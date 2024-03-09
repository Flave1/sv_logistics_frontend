export const UserType = {
  Staff: 1,
  Customer: 2,
  Driver: 3,
  Client: 4,
  SystemAdmin: 5,
};

export function convertObjectToArray(obj) {
  return Object.entries(obj).map(([name, value]) => ({ name, value }));
}