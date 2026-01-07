import {
  BaseButton,
  GoogleSignIn,
  Inverted,
} from "./button.style.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButtonComponent = (buttonType) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted,
  }[buttonType] || BaseButton);

const Button = ({ children, buttonType = "base", ...otherProps }) => {
  const CustomButton = getButtonComponent(buttonType);

  return (
    <BaseButton as={CustomButton} {...otherProps}>
      {children}
    </BaseButton>
  );
};

export default Button;
