import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface ButtonProp {
  getButtonColor: (count: number) => string;
}

function Button({ getButtonColor }: ButtonProp) {
  const [currentCounter, increaseCounter] = useState(0);

  return (
    <Fragment>
      <button
        onClick={() => {
          increaseCounter(currentCounter + 1);
          console.log(currentCounter);
          if (currentCounter === 5) {
            increaseCounter(1);
          }
        }}
        className={getButtonColor(currentCounter)}
      >
        Button
      </button>
      ;
    </Fragment>
  );
}

export default Button;
