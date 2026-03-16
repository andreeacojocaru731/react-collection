import Divider from "../../common-components/divider/divider";
import cx from "classnames";
import Style from "./lesson.module.scss";

interface LessonProps {
  title: string;
  text: string[];
  source: string;
  children: React.ReactNode;
}

export default function Lesson({ title, text, source, children }: LessonProps) {
  return (
    <div className={cx(Style.content)}>
      <a href={source}>{title}</a>
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
