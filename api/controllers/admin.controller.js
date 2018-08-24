var data = require("../data/data.json");

module.exports.Login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let info;
  for (let i = 0; i < data.length; i++) {
    if (username === data[i].username && password === data[i].password) {
      info = data[i].info;
    }
  }

  console.log(info);
  res.json(info);
};
