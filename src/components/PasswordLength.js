import classes from "./PasswordLength.module.css";

const PasswordLength = ({ length, handleLength }) => {
  return (
    <div className={classes["form-group"]}>
      <label htmlFor="password-strength">Password length</label>
      <input
        className="pw"
        defaultValue={length}
        onChange={(e) => handleLength(e.target.value)}
        type="number"
        id="password-strength"
        name="password-strength"
        max="26"
        min="8"
      />
    </div>
  );
};

export default PasswordLength;
