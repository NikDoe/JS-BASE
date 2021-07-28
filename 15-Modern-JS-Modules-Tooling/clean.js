const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'nik doe' },
  { value: -45, description: 'Groceries 🥑', user: 'nik doe' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'nik doe' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'nik doe' },
  { value: -1100, description: 'New iPhone 📱', user: 'nik doe' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'nik doe' },
];

const spendingLimits = {
  'nik doe': 1500,
  matilda: 100,
};

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (value, description, user = 'nik doe') {
  user = user.toLowerCase();

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
  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
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

  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(1);
