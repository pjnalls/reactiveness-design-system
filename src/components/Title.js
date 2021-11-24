import "./Title.scss";

const Title = ({ brand, appType }) => {
  return (
    <div className="Title">
      <div className="Title__name">
        <span className="brand">{brand} </span>
        <span className="app-type">{appType}</span>
      </div>
    </div>
  );
};

Title.defaultProps = {
  brand: ".⁂.",
  appType: "TODOs",
};

export default Title;
