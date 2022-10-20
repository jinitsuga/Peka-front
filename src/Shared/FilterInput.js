import InputField from "./Input/Input";
import { Label } from "./Input/Label";

export function FilterInput(props) {
  return (
    <Label style={{ marginBottom: "5px", marginTop: "25px" }}>
      {props.label}
      <InputField
        style={{ marginTop: "30px" }}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={(e) => {
          props.onChange(e);
        }}
      ></InputField>
    </Label>
  );
}
