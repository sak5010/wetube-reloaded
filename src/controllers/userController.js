import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const isExists = await User.exists({ $or: [{ username }, { email }] });
  if (isExists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMassage: error._message,
    });
  }
  return res.redirect("/login");
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.exists({ username });
  if (!exists) {
    return res
      .status(400)
      .render("login", {
        pageTitle: "Login",
        errorMessage: "An account with this username does not exists.",
      });
  }
  // check if account exists
  // check if password correct
  res.end();
};
export const edit = (req, res) => res.send("Edit user");
export const remove = (req, res) => res.send("Remove user");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("See Profile");
