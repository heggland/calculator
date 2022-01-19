import { useState } from "react";
import Heading from "../components/Heading/Heading";

const App = () => {
  const [start, setStart] = useState(false);
  const [calc, setCalc] = useState(0);
  const [window, setWindow] = useState(0);

  const Display = () => {
    return <div className="display">{window}</div>;
  };

  const handleNumberPress = (e: any) => {
    console.log(e.target.dataset.value);
    setStart(true);

    const newValue =
      calc === 0 ? e.target.dataset.value : calc + e.target.dataset.value;

    setCalc(newValue);
    setWindow(newValue);
  };

  const resetCalc = () => {
    setStart(false);
    setCalc(0);
    setWindow(0);
  };

  const runCalc = () => {
    console.log(eval(calc.toString()));
    setWindow(eval(calc.toString()));
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
              <div className="col-4 border-1 h-1 key" />
              <div className="col-4 border-1 h-1 key" />
              <div className="col-4 border-1 h-1 key" />
              <div className="col-4 border-1 h-1 key" onClick={resetCalc}>
                reset
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="7"
              >
                7
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="8"
              >
                8
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="9"
              >
                9
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="/"
              >
                /
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="4"
              >
                4
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="5"
              >
                5
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="6"
              >
                6
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="*"
              >
                x
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="1"
              >
                1
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="2"
              >
                2
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="3"
              >
                3
              </div>
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="-"
              >
                -
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 border-1 h-1 key"
                onClick={handleNumberPress}
                data-value="0"
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
                onClick={handleNumberPress}
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
