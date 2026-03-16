import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import cx from "classnames";
import Style from "./character-points.module.scss";
import { useState } from "react";

const text: string[] = [
  "Am RPG game lets you assign points to the strength and speed attributes of your character.",
  "The available points are passed in the totalPoints prop.",
  "When initialized, all the points should be available, and both attributes should start at 0",
];

function Solution({ totalPoints }: { totalPoints: number }) {
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [points, setPoints] = useState(totalPoints);

  const handleMinusStrength = () => {
    if (strength > 0) {
      setStrength(strength - 1);
      setPoints(points + 1);
    }
  };
  const handlePlusStrength = () => {
    if (strength + speed + points <= totalPoints && points > 0) {
      setStrength(strength + 1);
      setPoints(points - 1);
    }
  };

  const handleMinusSpeed = () => {
    if (speed > 0) {
      setSpeed(speed - 1);
      setPoints(points + 1);
    }
  };

  const handlePlusSpeed = () => {
    if (strength + speed + points <= totalPoints && points > 0) {
      setSpeed(speed + 1);
      setPoints(points - 1);
    }
  };

  return (
    <div className={cx(Style.solution)}>
      Character stats: <span>{points}</span> points
      <div>
        <button onClick={handleMinusStrength}>-</button>
        <input
          type="number"
          step="1"
          style={{ width: "50px", textAlign: "center" }}
          readOnly
          value={strength}
        />
        <button onClick={handlePlusStrength}>+</button>
        Strength
      </div>
      <div>
        <button onClick={handleMinusSpeed}>-</button>
        <input
          type="number"
          step="1"
          style={{ width: "50px", textAlign: "center" }}
          readOnly
          value={speed}
        />
        <button onClick={handlePlusSpeed}>+</button>
        Speed
      </div>
    </div>
  );
}

export default function CharacterPoints() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson
          title="Character Points"
          text={text}
          source="https://www.testdome.com/questions/react-js/character-points/151996"
        >
          <Solution totalPoints={5}></Solution>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
