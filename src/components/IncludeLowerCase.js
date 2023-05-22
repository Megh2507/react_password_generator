import classes from "./IncludeLowerCase.module.css";

const IncludeLowerCase = ({ includes, handleCheck }) => {
  return (
    <div className={classes["form-group"]}>
      <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
      <input
        checked={includes}
        onChange={(e) => handleCheck(e.target.checked)}
        type="checkbox"
        id="lowercase-letters"
        name="lowercase-letters"
      />
    </div>
  );
};

export default IncludeLowerCase;
