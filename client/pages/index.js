import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
export default function Home() {
  const [selectedCable, setSelectedCable] = useState("Select Coax Size");
  const [selectedFrequency, setSelectedFrequency] =
    useState("Select Frequency");
  const [cableDistance, setCableDistance] = useState(" ");
  const [measurement, setMeasurement] = useState("Cable Ft");
  const [showConnectors, setShowConnectors] = useState(false);

  const [barrelCount, setBarrelCount] = useState(0);
  const [twoWayCount, setTwoWayCount] = useState(0);
  const [threeWayCount, setThreeWayCount] = useState(0);
  const [fourWayCount, setFourWayCount] = useState(0);
  const [fiveWayCount, setFiveWayCount] = useState(0);
  const [sixWayCount, setSixWayCount] = useState(0);
  const [eightWayCount, setEightWayCount] = useState(0);
  const [twelveWayCount, setTwelveWayCount] = useState(0);

  const [attenuation, setAttenuation] = useState(0);

  const handleCableSizeChoice = (option) => {
    setSelectedCable(option);
  };

  const handleFrequencyChoice = (option) => {
    setSelectedFrequency(option);
  };

  return (
    <div className="Home">
      <div className="cable-loss-container">
        <div className="cable-size-dropdown">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="dropdown"
            >
              {selectedCable}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="dropdown-item"
                onClick={() => handleCableSizeChoice("RG59")}
              >
                Coax - RG59
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => handleCableSizeChoice("RG6")}
              >
                Coax - RG6
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => handleCableSizeChoice("RG11")}
              >
                Coax - RG11
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="frequency-dropdown">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="dropdown"
            >
              {selectedFrequency}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="dropdown-item"
                onClick={() => handleFrequencyChoice("36MHz")}
              >
                CH3 - 36 MHz
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => handleFrequencyChoice("297MHz")}
              >
                CH36 - 297 MHz
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => handleFrequencyChoice("501MHz")}
              >
                CH70 - 501 MHz
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <FloatingLabel
            className="search-input-label form-label"
            label={measurement}
          >
            <Form.Control
              className="search-input-form-control form-input"
              type="text"
              placeholder={measurement}
              onChange={(e) => {
                setCableDistance(e.target.value);
              }}
            />
          </FloatingLabel>
        </div>

        <div>
          <button
            className="primary-btn"
            onClick={() => {
              if (measurement == "Cable Ft") {
                setMeasurement("Cable Meters");
              } else {
                setMeasurement("Cable Ft");
              }
            }}
          >
            {measurement == "Cable Ft" ? "Cable in Meters" : "Cable in Feet"}
          </button>
        </div>

        <button
          className="primary-btn"
          onClick={() => {
            setShowConnectors(!showConnectors);
          }}
        >
          Add Connectors
        </button>

        {showConnectors && (
          <div className="connectors">
            <div className="square-btns">
              <button
                className="square-btn"
                onClick={() => {
                  setBarrelCount(barrelCount + 1);
                  setAttenuation(attenuation - 0.5);
                }}
              >
                Barrel
              </button>
              <button
                onClick={() => {
                  setTwoWayCount(twoWayCount + 1);
                  setAttenuation(attenuation - 3.5);
                }}
                className="square-btn"
              >
                2-Way
              </button>
            </div>

            {barrelCount || twoWayCount ? (
              <div className="square-btns">
                <h2
                  className="count"
                  onClick={() => {
                    setBarrelCount(barrelCount - 1);
                    setAttenuation(attenuation + 0.5);
                  }}
                >
                  {barrelCount}
                </h2>
                <h2
                  className="count"
                  onClick={() => {
                    setTwoWayCount(twoWayCount - 1);
                    setAttenuation(attenuation + 3.5);
                  }}
                >
                  {twoWayCount}
                </h2>
              </div>
            ) : (
              ""
            )}
            <div className="square-btns">
              <button
                className="square-btn"
                onClick={() => {
                  setThreeWayCount(threeWayCount + 1);
                  setAttenuation(attenuation - 5.5);
                }}
              >
                3-Way
              </button>
              <button
                className="square-btn"
                onClick={() => {
                  setFourWayCount(fourWayCount + 1);
                  setAttenuation(attenuation - 7);
                }}
              >
                4-Way
              </button>
            </div>

            {threeWayCount || fourWayCount ? (
              <div className="square-btns">
                <h2
                  className="count"
                  onClick={() => {
                    setThreeWayCount(threeWayCount - 1);
                    setAttenuation(attenuation + 5.5);
                  }}
                >
                  {threeWayCount}
                </h2>
                <h2
                  className="count"
                  onClick={() => {
                    setFourWayCount(fourWayCount - 1);
                    setAttenuation(attenuation + 7);
                  }}
                >
                  {fourWayCount}
                </h2>
              </div>
            ) : (
              ""
            )}

            <div className="square-btns">
              <button
                className="square-btn"
                onClick={() => {
                  setFiveWayCount(fiveWayCount + 1);
                  setAttenuation(attenuation - 7);
                }}
              >
                5-Way
              </button>
              <button
                className="square-btn"
                onClick={() => {
                  setSixWayCount(sixWayCount + 1);
                  setAttenuation(attenuation - 9);
                }}
              >
                6-Way
              </button>
            </div>

            {fiveWayCount || sixWayCount ? (
              <div className="square-btns">
                <h2
                  className="count"
                  onClick={() => {
                    setFiveWayCount(fiveWayCount - 1);
                    setAttenuation(attenuation + 7);
                  }}
                >
                  {fiveWayCount}
                </h2>
                <h2
                  className="count"
                  onClick={() => {
                    setSixWayCount(sixWayCount - 1);
                    setAttenuation(attenuation + 9);
                  }}
                >
                  {sixWayCount}
                </h2>
              </div>
            ) : (
              ""
            )}

            <div className="square-btns">
              <button
                className="square-btn"
                onClick={() => {
                  setEightWayCount(eightWayCount + 1);
                  setAttenuation(attenuation - 10.5);
                }}
              >
                8-Way
              </button>
              <button
                className="square-btn"
                onClick={() => {
                  setTwelveWayCount(twelveWayCount + 1);
                  setAttenuation(attenuation - 11);
                }}
              >
                12-Way
              </button>
            </div>

            {eightWayCount || twelveWayCount ? (
              <div className="square-btns">
                <h2
                  className="count"
                  onClick={() => {
                    setEightWayCount(eightWayCount - 1);
                    setAttenuation(attenuation + 10.5);
                  }}
                >
                  {eightWayCount}
                </h2>

                <h2
                  className="count"
                  onClick={() => {
                    setTwelveWayCount(twelveWayCount - 1);
                    setAttenuation(attenuation + 11);
                  }}
                >
                  {twelveWayCount}
                </h2>
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        <h1>attenuation {attenuation}</h1>
      </div>
    </div>
  );
}
