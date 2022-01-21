import { useState } from "react";
import calc from "../utils/calc";

const Test = () => {
  const [start, setStart] = useState(false);
  const [window, setWindow] = useState("");
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [result, setResult] = useState("");
  const [sign, setSign] = useState("");

  const keyValues = [
    ["C", "<", "", ""],
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, ".", "=", "+"],
  ];

  const Display = () => {
    return (
      <div className="display">
        <div className="col-12">
          <div className="row">
            {result}
            {window}
          </div>
        </div>
      </div>
    );
  };

  const NumValues = () => {
    return (
      <>
        num: {num}
        <br />
        sign: {sign}
      </>
    );
  };

  const handleKeyPress = (e: any) => {
    setStart(true);
    setWindow(window + e.target.dataset.value.toString());
  };

  const handleSignpress = (e: any) => {
    setStart(true);
    const value = e.target.dataset.value;

    if (value === "") {
      return;
    }

    let number: string = "";
    if (!num && window.match(/[0-9]/)) {
      setNum(window);
      console.log("num1 set", window);
    } else {
      console.log("num2 set", window);
      if (!result) {
        const numLength = num.length;
        const sliceWindow = window.slice(numLength);
        number = sliceWindow.slice(1);
        setNum1(number);
      } else {
        number = window.slice(1);
        setNum1(window.slice(1));
      }
    }

    switch (value) {
      case "C":
        setWindow("");
        setNum("");
        setNum1("");
        setSign("");
        setResult("");
        break;
      case "<":
        setWindow(window.slice(0, -1));
        break;
      case "=":
        const resultF = calc(parseInt(num), parseInt(number), sign).toString();
        setWindow("");
        setNum(resultF);
        setResult(resultF);
        setNum1("");
        console.log("result true, num set to result", resultF);
        console.log(resultF);
        console.log("result true, num1 set to empty");
        console.log(num1);
        break;
      default:
        setSign(value);

        if (sign) {
          setWindow(window.slice(1) + value);
          break;
        }

        setWindow(window + value);
        break;
    }
  };

  return (
    <div className="col-6 padding-1">
      <div className="col-12 h-2 border-1 greyBg">
        <div className="col-12 h-2 greyLightBg">{start && <Display />}</div>
      </div>
      {keyValues.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((value, index) => (
            <div
              className="col-4 border-1 greyBg h-1 key"
              key={index}
              data-value={value}
              onClick={
                value.toString().match(/[0-9]/)
                  ? handleKeyPress
                  : handleSignpress
              }
            >
              {value}
            </div>
          ))}
        </div>
      ))}
      <NumValues />
    </div>
  );
};

export default Test;
