import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import cx from "classnames";
import Style from "./change-username.module.scss";
import { useRef, useState } from "react";

const text: string[] = [
  "The application should allow the user to update their username by inputting a custom value and clicking the button.",
  "The Username component is finished and should not be changed, but the App component is missing parts.",
  "Finish the App component so that the Username component displays the inputted text when the button is clicked",
];

interface usernameProps {
  value: string;
}
const Username = ({ value }: usernameProps) => {
  return <h1>{value}</h1>;
};

function Solution() {
  const ref = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");

  function handleOnClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (ref.current) {
      setUsername(ref.current.value);
    }
  }

  return (
    <div className={cx(Style.solution)}>
      <form>
        <button onClick={handleOnClick}>Change Username</button>
        <input id="myInput" type="text" ref={ref} />
        <Username value={username} />
      </form>
    </div>
  );
}

export default function ChangeUsername() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson
          title="Change Username"
          text={text}
          source="https://www.testdome.com/questions/react-js/change-username/149718"
        >
          <Solution></Solution>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
