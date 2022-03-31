import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>{count}</h1>
      <Button text="Decrement" handleClick={() => setCount(count - 1)} />
      <Button text="Increment" handleClick={() => setCount(count + 1)} />
      <Button text="Reset Me" handleClick={() => setCount(0)} />
    </main>
  );
}

export default App;
