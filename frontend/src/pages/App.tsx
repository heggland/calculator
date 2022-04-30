import { useState } from "react";
import Heading from "../components/Heading/Heading";
import calc from "../utils/calc";

const App = () => {
  const [start, setStart] = useState(false);
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [sign, setSign] = useState("");
  const [window, setWindow] = useState("");

  // handle number input
  const handleNumberPress = (e: any) => {
    setStart(true);
    const value = e.target.dataset.value;
    setWindow(window + value.toString());

    // if sign is set
    if (sign === "") {
      setNum(num + value);
    } else {
      setNum1(num1 + value);
    }
  };

  // handle sign input
  const handleSignPress = (e: any) => {
    const value = e.target.dataset.value;
    setSign(value);
    setWindow(window.toString() + value);
  };

  // run the calculation
  const runCalc = () => {
    // const resultF = calc(parseInt(num), parseInt(num1), sign).toString();

    const result = eval(window);
    setWindow(result.toString());

    setSign("");
    setNum(result);
    setNum1("");
  };

  const resetCalc = () => {
    // reset all values
    setStart(false);
    setWindow("");
    setSign("");
    setNum("");
    setNum1("");
  };

  // remove last keypress
  const revertPress = () => setWindow(window.slice(0, -1));

  const Display = () => {
    return <div className="display">{window}</div>;
  };

  return (
    <div className="wrapper">
      <main className="flex align-items-center white blackBg">
        <header>
          <Heading>Calculator</Heading>
        </header>
        <div className="col-6">
          <div className="col-12 h-2 border-1 greyBg">
            <div className="col-12 h-2 greyLightBg">{start && <Display />}</div>
          </div>
          <div className="col-12 h-5 border-1 greyBg">
            <div className="row">
              <div className="col-4 border-1 h-1 key" onClick={resetCalc}>
                EC
              </div>
              <div className="col-4 border-1 h-1 key" onClick={revertPress}>
                {`<`}
              </div>
              <div className="col-4 border-1 h-1 key" />
              <div className="col-4 border-1 h-1 key" />
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={7}
              >
                7
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={8}
              >
                8
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={9}
              >
                9
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleSignPress}
                data-value="/"
              >
                /
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={4}
              >
                4
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={5}
              >
                5
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={6}
              >
                6
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleSignPress}
                data-value="*"
              >
                x
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={1}
              >
                1
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={2}
              >
                2
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={3}
              >
                3
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleSignPress}
                data-value="-"
              >
                -
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value={0}
              >
                0
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value=","
              >
                .
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={runCalc}
                data-value="="
              >
                =
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleSignPress}
                data-value="+"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
