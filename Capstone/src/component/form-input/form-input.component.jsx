import './form-input.style.scss';
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value && otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}

      {/* <input className="form-input" {...otherProps} /> */}
    </div>
  );
};

export default FormInput;
