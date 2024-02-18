import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import Classes from "./css/Classes";
import PathParameters from "./routing/PathParameters";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <JavaScript />
      <PathParameters />
      <Classes />
      <Styles />
      <ConditionalOutput />
      <DynamicStyling />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <Add a={3} b={4} />
      <TodoItem />
      <TodoList />
    </div>
  );
}
export default Assignment3;
