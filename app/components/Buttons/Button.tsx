"use client";
import "./Buttons.css";
interface btnProps {
  children: string;
}

const Button = (props: btnProps) => {
  return <button className="button_main">{props.children}</button>;
};

export default Button;
