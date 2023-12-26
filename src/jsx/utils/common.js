export function formatDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  const options: any = { day: 'numeric', month: 'short', year: 'numeric' };
  return inputDate.toLocaleDateString('en-US', options);
}
