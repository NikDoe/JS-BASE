'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'nik doe' },
  { value: -45, description: 'Groceries 🥑', user: 'nik doe' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'nik doe' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'nik doe' },
  { value: -1100, description: 'New iPhone 📱', user: 'nik doe' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'nik doe' },
]);

const spendingLimits = Object.freeze({
  'nik doe': 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'nik doe'
) {
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  //solution #1
  // const limit = spendingLimits[user] ? (lim = spendingLimits[user]) : 0;

  //solution #2
  // const limit = spendingLimits?.[user] ?? 0;

  // if (value <= limit) {
  //   budget.push({ value: -value, description, user });
  // }

  //solution #3 with DRY principles
  // if (value <= getLimit(clearUser)) {
  //   budget.push({ value: -value, description, user: clearUser });
  // }

  //solution #4 for pure function
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses = function (state, limit) {
// for (const el of budget) {
//   let lim;
//   if (spendingLimits[el.user]) {
//     lim = spendingLimits[el.user];
//   } else {
//     lim = 0;
//   }
//   if (el.value < -lim) {
//     el.flag = 'limit';
//   }
// }
//solution #1
// for (const entry of budget) {
//   if (entry.value < -getLimit(entry.user)) {
//     entry.flag = 'limit';
//   }
// }

//solution #2
//   return state.map(entry =>
//     entry.value < -getLimit(limit, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry
//   );
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 1);
