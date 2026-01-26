import LoginForm from "../components/UI/form/LoginForm";
import classes from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={classes.loginFormContainer}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
