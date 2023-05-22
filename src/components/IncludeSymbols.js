import classes from "./IncludeSymbols.module.css";

const IncludeSymbols = ({ includes, handleCheck }) => {
  return (
    <div className={classes["form-group"]}>
      <label htmlFor="include-symbols">Include Symbols</label>
      <input
        checked={includes}
        onChange={(e) => handleCheck(e.target.checked)}
        type="checkbox"
        id="include-symbols"
        name="include-symbols"
      />
    </div>
  );
};

export default IncludeSymbols;
