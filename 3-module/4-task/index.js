function showSalary(users, age) {
  let user = '';

  users.map((item) => {
    if (item.age <= age) {
     user += item.name + ', ' + item.balance + '\n';
    }
  });

  return user.slice(0, -1);

}
