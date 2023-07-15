import PropTypes from "prop-types";
import styles from "./Button.module.css"; //create-react-app이 css코드를 javascript object로 만들어줌

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
