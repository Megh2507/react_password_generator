import classes from "./Main.module.css";

const Main = ({ passwordValue, handleCheck }) => {
  return (
    <>
      <h2 className={classes["generator__header"]}>Password Generator</h2>
      <div className={classes["generator__password"]}>
        <h3>{passwordValue}</h3>
        <button className={classes["copy__btn"]}>
          <i onClick={handleCheck} className="far fa-clipboard"></i>
        </button>
      </div>
    </>
  );
};

export default Main;
