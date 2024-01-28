export function formatDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return inputDate.toLocaleDateString('en-US', options);
}

export function formatDateTime(inputDateString) {
  const inputDate = new Date(inputDateString);

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
    hour12: true // Use 12-hour clock format
  };

  return inputDate.toLocaleDateString('en-US', options);
}

export function GenerateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
