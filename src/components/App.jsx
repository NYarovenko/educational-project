import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  function handleclick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Hi</p>
      <MyButton count={count} onClick={handleclick} />
      <MyButton count={count} onClick={handleclick} />
      <MyButton count={count} onClick={handleclick} />
    </>
  );
};

function MyButton({ count, onClick }) {
  // console.log(count);
  return (
    <>
      <button onClick={onClick}>Clicked {count} times</button>
    </>
  );
}
