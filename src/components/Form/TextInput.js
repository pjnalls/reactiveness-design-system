import "./TextInput.scss";

const TextInput = ({placeholder, minLength, maxLength}) => {
  return (
    <>
      <input
        type="text"
        className="FormTextInput"
        name="text"
        id="text"
        placeholder={placeholder}
        autoComplete="off"
        required
        minLength={minLength}
        maxLength={maxLength}
      />
    </>
  );
};

TextInput.defaultProps = {
  placeholder: "Add a to-do",
  minLength: "1",
  maxLength: "280",
};

TextInput.propTypes = {
  placeholder: String,
  minLength: Number,
  maxLength: Number,
};

export default TextInput;
