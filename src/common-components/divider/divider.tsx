import Style from "./divider.module.scss";
import cx from "classnames";

export default function Divider() {
  return <div className={cx(Style.divider)}></div>;
}
