import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import cx from "classnames";
import Style from "./todo-list.module.scss";

interface itemProps {
  text: string;
  done: boolean;
}

interface solutionProps {
  items: itemProps[];
}

interface todoItemProps {
  item: itemProps;
  key: any;
  onClick: any;
}

interface GroceryList {
  items: itemProps[];
  onListClick: (event: React.MouseEvent<HTMLElement>) => void;
  onItemClick: (item: itemProps, event: React.MouseEvent<HTMLElement>) => void;
}

const text: string[] = [
  "Write a TodoList component that expects an items prop which is a list of objects, each with text and done properties.",
  "TodoList also accepts an onItemClick function prop, which should be called when a user clicks an item in the list, if the item is not marked as done.",
  "Otherwise, the onItemClick should not be called and the click event itself should not be propagated further.",
  "The function should be called with the item object from the items list as the first parameter and the event as the second parameter.",
];

const items: itemProps[] = [
  { text: "Buy grocery", done: true },
  { text: "Play guitar", done: false },
  { text: "Romantic dinner", done: false },
];

const TodoItem = (props: todoItemProps) => {
  return <li onClick={props.onClick}>{props.item.text}</li>;
};

const GroceryList = ({ items, onListClick, onItemClick }: GroceryList) => {
  const handleItemClick = (
    item: itemProps,
    event: React.MouseEvent<HTMLElement>,
  ) => {
    // Write your code here
    if (item.done === false) onItemClick(item, event);
    else {
      event.stopPropagation();
    }
  };

  return (
    <ul onClick={onListClick}>
      {items.map((item: itemProps, index: any) => (
        <TodoItem
          item={item}
          key={index}
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            handleItemClick(item, event)
          }
        />
      ))}
    </ul>
  );
};

function Solution(props: solutionProps) {
  const handleOnListClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("List clicked!");
  };
  const handleOnItemClick = (
    item: itemProps,
    event: React.MouseEvent<HTMLElement>,
  ) => {
    console.log(item, event);
  };
  return (
    <div className={cx(Style.solution)}>
      <GroceryList
        items={props.items}
        onListClick={handleOnListClick}
        onItemClick={handleOnItemClick}
      />
    </div>
  );
}

export default function TodoList() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson
          title="Todo List"
          text={text}
          source="https://www.testdome.com/questions/react-js/todo-list/149713"
        >
          <Solution items={items}></Solution>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
