// Задание 1.
function filter(email, blacklist) {
  let emails = [];

  for (let list of email) {
    let l = blacklist.indexOf(list);

    if (l === -1) {
      emails.push(list);
    }
  }

  return emails;
}

export default filter;
