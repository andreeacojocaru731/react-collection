import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import cx from "classnames";
import Style from "./grocery-app.module.scss";
import { useState } from "react";

const text: string[] = [
  "You have a GroceryApp component, which receives a list of products, each one with name and votes.",
  "The app should render an unordered list, with a list item for each product.",
  "Products can be upvoted or downvoted.",
  "By appropriately using React state and props, implement the upvote/downvote logic.",
  "Keep the state in the topmost component, while the product component should accept props.",
];

const products: productType[] = [
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 },
];

interface productType {
  name: string;
  votes: number;
}

interface SolutionProps {
  products: productType[];
}

interface productProps {
  item: productType;
  index: number;
  onVote: (dir: any, index: any) => void;
}

const Product = (props: productProps) => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote("+", props.index);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote("-", props.index);
  };
  return (
    <li>
      <span>{props.item.name}</span> - <span>votes: {props.item.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

function Solution(props: SolutionProps) {
  let [products, setProducts] = useState(props.products);

  const onVote = (dir: string, index: number) => {
    // Update the products array accordingly ...
    const newList: productType[] = [...products];
    let newVote = products[index].votes;

    if (dir === "+") newVote = products[index].votes + 1;
    else if (dir === "-") newVote = products[index].votes - 1;

    newList[index] = { ...products[index], votes: newVote };

    setProducts(newList);
  };

  return (
    <div className={cx(Style.solution)}>
      <ul>
        {/* Render an array of products, which should call onVote when + or - is clicked */}
        {products.map((item: productType, index: number) => {
          return <Product item={item} index={index} onVote={onVote}></Product>;
        })}
      </ul>
    </div>
  );
}

export default function GroceryApp() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson
          title="Grocery App"
          text={text}
          source="https://www.testdome.com/questions/react-js/grocery-app/149714"
        >
          <Solution products={products}></Solution>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
