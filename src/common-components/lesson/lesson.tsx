import Divider from "../../common-components/divider/divider";
import cx from "classnames";
import Style from "./lesson.module.scss";

interface LessonProps {
  title: string;
  text: string[];
  children: React.ReactNode;
}

export default function Lesson({ title, text, children }: LessonProps) {
  return (
    <div className={cx(Style.content)}>
      <div>{title}</div>
      <Divider />
      <div></div>
      {text.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
      <Divider />
      {children}
    </div>
  );
}
