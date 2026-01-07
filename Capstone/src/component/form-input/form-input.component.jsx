import {FromInputLabel,Input,Group} from './form-input.style.jsx';
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FromInputLabel
          shrink={otherProps.value.length}
          
        >
          {label}
        </FromInputLabel>
      )}

      {/* <input className="form-input" {...otherProps} /> */}
    </Group>
  );
};

export default FormInput;
