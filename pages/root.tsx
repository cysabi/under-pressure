import "./root.css";
import type { ParentProps } from "solid-js";

const Layout = (props: ParentProps) => {
  return <main>{props.children}</main>;
};

export { Layout };
