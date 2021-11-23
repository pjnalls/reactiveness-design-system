import TextInput from "./TextInput";
import Button from "./Button";

import "./Form.scss";

const Form = () => {
  return (
    <form className="Form">
      <div className="form-control">
        <TextInput></TextInput>
        <Button></Button>
      </div>
    </form>
  );
};

export default Form;
