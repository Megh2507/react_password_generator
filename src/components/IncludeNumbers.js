import classes from "./IncludeNumbers.module.css";

const IncludeNumbers = ({ includes, handleCheck }) => {
  return (
    <div className={classes["form-group"]}>
      <label htmlFor="include-numbers">Include Numbers</label>
      <input
        checked={includes}
        onChange={(e) => handleCheck(e.target.checked)}
        type="checkbox"
        id="include-numbers"
        name="include-numbers"
      />
    </div>
  );
};

export default IncludeNumbers;
