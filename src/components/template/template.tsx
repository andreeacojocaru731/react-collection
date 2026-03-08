import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import cx from "classnames";
import Style from "./template.module.scss";

const text: string[] = [];

function Solution() {
  return <div className={cx(Style.solution)}></div>;
}

export default function Template() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson title="Template" text={text}>
          <Solution></Solution>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
