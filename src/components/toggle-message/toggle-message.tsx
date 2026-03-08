import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import cx from "classnames";
import Style from "./toggle-message.module.scss";
import { useState } from "react";

const text: string[] = [
  "The Message component contains an anchor element and a paragraph below the anchor.",
  "Rendering of the paragraph should be toggled by clicking on the anchor element using the following logic:",
  "- At the start, the paragraph should not be rendered.",
  "- After a click, the paragraph should be rendered.",
  "- After another click, the paragraph should not be rendered.",
];

const Message = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <a
        href="#"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Want to buy a new car?
      </a>
      {isVisible ? <p>Call +11 22 33 44 now!</p> : <></>}
    </>
  );
};

function Solution() {
  return (
    <div className={cx(Style.solution)}>
      <Message />
    </div>
  );
}

export default function ToggleMessage() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson title="Toggle Message" text={text}>
          <Solution></Solution>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
