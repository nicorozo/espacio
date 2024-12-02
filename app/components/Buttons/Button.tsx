"use client";
import "./Buttons.css";
interface btnProps {
  children: string;
  className: string;
}

const Button = (props: btnProps) => {
  return <button className={props.className}>{props.children}</button>;
};

export default Button;
