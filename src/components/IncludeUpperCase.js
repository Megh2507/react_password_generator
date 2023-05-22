import classes from "./IncludeUpperCase.module.css";

const IncludeUpperCase = ({ includes, handleCheck }) => {
  return (
    <div className={classes["form-group"]}>
      <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
      <input
        checked={includes}
        onChange={(e) => handleCheck(e.target.checked)}
        type="checkbox"
        id="uppercase-letters"
        name="uppercase-letters"
      />
    </div>
  );
};

export default IncludeUpperCase;
