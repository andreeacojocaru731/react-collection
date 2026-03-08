import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import { useEffect, useRef, forwardRef, RefObject } from "react";
import cx from "classnames";
import Style from "./focus.module.scss";

const Input = ({ forwardedRef, ...otherProps }) => {
  return <input {...otherProps} id={otherProps.id} ref={forwardedRef} />;
};

const TextInput = forwardRef((props: { id: string }, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

const FocusableInput = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  // When the focused prop is changed from false to true,
  // the input should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  useEffect(() => {
    if (props.focused && ref.current) {
      ref.current.focus();
    }
  }, [props.focused]);

  return <TextInput id={props.id} ref={ref} />;
};

const text: string[] = [
  "The TextInput component renders an input element in the DOM and accepts a ref that is forwarded to that input element.",
  "The component should accept a focused prop.",
  "When the focused prop is changed from false to true, the input should receive the focus.",
  "If on mounting the focused prop is true, the input should receive the focus.",
];

export default function Focus() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson title="Focus" text={text}>
          <div className={cx(Style.solution)}>
            <label htmlFor={"focusedFalse"}>Focus is False</label>
            <FocusableInput id={"focusedFalse"} focused={false} />
            <label htmlFor="focusedTrue">Focus is True</label>
            <FocusableInput id={"focusedTrue"} focused={true} />
          </div>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
