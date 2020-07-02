export default (expenses) => {
  return expenses.reduce((total, { amount }) => total + amount, 0);
};
