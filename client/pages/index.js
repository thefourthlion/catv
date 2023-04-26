import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
export default function Home() {
  const [selectedCable, setSelectedCable] = useState("Select Coax Size");
  const [selectedFrequency, setSelectedFrequency] =
    useState("Select Frequency");
  const [cableDistance, setCableDistance] = useState(0);
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

  const [rg59MHz55, setRg59MHz55] = useState(0.02133);
  const [rg59MHz300, setRg59MHz300] = useState(0.045);
  const [rg59MHz500, setRg59MHz500] = useState(0.057);
  const [rg6MHz55, setRg6MHz55] = useState(0.015);
  const [rg6MHz300, setRg6MHz300] = useState(0.035);
  const [rg6MHz500, setRg6MHz500] = useState(0.046);
  const [rg11MHz55, setRg11MHz55] = useState(0.01);
  const [rg11MHz300, setRg11MHz300] = useState(0.022);
  const [rg11MHz500, setRg11MHz500] = useState(0.028);

  const round = (value, step) => {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
  };

  const handleCableSizeChoice = (option) => {
    setSelectedCable(option);
  };

  const handleFrequencyChoice = (option) => {
    setSelectedFrequency(option);
  };

  const handleLossMeasurementByMeter = (meters) => {
    meters = meters * 328;
    if (selectedCable == "RG59") {
      if (selectedFrequency == "55") {
        setAttenuation(Math.round((meters * rg59MHz55) / 0.25) * 0.25);
      } else if (selectedFrequency == "300") {
        setAttenuation(Math.round((meters * rg59MHz300) / 0.25) * 0.25);
      } else if (selectedFrequency == "500") {
        setAttenuation(Math.round((meters * rg59MHz500) / 0.25) * 0.25);
      }
    } else if (selectedCable == "RG6") {
      if (selectedFrequency == "55") {
        setAttenuation(Math.round((meters * rg6MHz55) / 0.25) * 0.25);
      } else if (selectedFrequency == "300") {
        setAttenuation(Math.round((meters * rg6MHz300) / 0.25) * 0.25);
      } else if (selectedFrequency == "500") {
        setAttenuation(Math.round((meters * rg6MHz500) / 0.25) * 0.25);
      }
    } else if (selectedCable == "RG11") {
      if (selectedFrequency == "55") {
        setAttenuation(Math.round((meters * rg11MHz55) / 0.25) * 0.25);
      } else if (selectedFrequency == "300") {
        setAttenuation(Math.round((meters * rg11MHz300) / 0.25) * 0.25);
      } else if (selectedFrequency == "500") {
        setAttenuation(Math.round((meters * rg11MHz500) / 0.25) * 0.25);
      }
    }
  };

  const handleLossMeasurementByFoot = (feet) => {
    if (selectedCable == "RG59") {
      if (selectedFrequency == "55") {
        setAttenuation(Math.round((feet * rg59MHz55) / 0.25) * 0.25);
      } else if (selectedFrequency == "300") {
        setAttenuation(Math.round((feet * rg59MHz300) / 0.25) * 0.25);
      } else if (selectedFrequency == "500") {
        setAttenuation(Math.round((feet * rg59MHz500) / 0.25) * 0.25);
      }
    } else if (selectedCable == "RG6") {
      if (selectedFrequency == "55") {
        setAttenuation(Math.round((feet * rg6MHz55) / 0.25) * 0.25);
      } else if (selectedFrequency == "300") {
        setAttenuation(Math.round((feet * rg6MHz300) / 0.25) * 0.25);
      } else if (selectedFrequency == "500") {
        setAttenuation(Math.round((feet * rg6MHz500) / 0.25) * 0.25);
      }
    } else if (selectedCable == "RG11") {
      if (selectedFrequency == "55") {
        setAttenuation(Math.round((feet * rg11MHz55) / 0.25) * 0.25);
      } else if (selectedFrequency == "300") {
        setAttenuation(Math.round((feet * rg11MHz300) / 0.25) * 0.25);
      } else if (selectedFrequency == "500") {
        setAttenuation(Math.round((feet * rg11MHz500) / 0.25) * 0.25);
      }
    }
  };

  // RG59
  // 55MHz is roughly 0.021 loss per foot
  // 300MHz is roughly 0.045 loss per foot
  // 500MHz is roughly 0.057 loss per foot

  // RG6
  // 55MHz is roughly 0.015 loss per foot
  // 300MHz is roughly 0.035 loss per foot
  // 500MHz is roughly 0.046 loss per foot

  // RG11
  // 55MHz is roughly 0.01 loss per foot
  // 300MHz is roughly 0.022 loss per foot
  // 500MHz is roughly 0.028 loss per foot

  return (
    <div className="Home">
      <div className="cable-loss-container">
        <div>
          <h1>Cable Loss Calc</h1>
        </div>
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
                onClick={() => {
                  handleCableSizeChoice("RG59");
                }}
              >
                Coax - RG59
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => {
                  handleCableSizeChoice("RG6");
                }}
              >
                Coax - RG6
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => {
                  handleCableSizeChoice("RG11");
                }}
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
              {selectedFrequency}MHz
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="dropdown-item"
                onClick={() => {
                  handleFrequencyChoice("55");
                }}
              >
                55MHz
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => {
                  handleFrequencyChoice("300");
                }}
              >
                300MHz
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={() => {
                  handleFrequencyChoice("500");
                }}
              >
                500MHz
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
              // value={cableDistance}
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
                // setCableDistance(cableDistance / 328);
              } else {
                setMeasurement("Cable Ft");
                // setCableDistance(cableDistance * 328);
              }
            }}
          >
            {measurement == "Cable Ft" ? "Cable in Meters" : "Cable in Feet"}
          </button>
        </div>

        <button
          className="secondary-btn"
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
                  setAttenuation(attenuation + 0.5);
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
                    setAttenuation(attenuation - 0.5);
                  }}
                >
                  {barrelCount}
                </h2>
                <h2
                  className="count"
                  onClick={() => {
                    setTwoWayCount(twoWayCount - 1);
                    setAttenuation(attenuation - 3.5);
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
                  setAttenuation(attenuation + 5.5);
                }}
              >
                3-Way
              </button>
              <button
                className="square-btn"
                onClick={() => {
                  setFourWayCount(fourWayCount + 1);
                  setAttenuation(attenuation + 7);
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
                    setAttenuation(attenuation - 5.5);
                  }}
                >
                  {threeWayCount}
                </h2>
                <h2
                  className="count"
                  onClick={() => {
                    setFourWayCount(fourWayCount - 1);
                    setAttenuation(attenuation - 7);
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
                  setAttenuation(attenuation + 7);
                }}
              >
                5-Way
              </button>
              <button
                className="square-btn"
                onClick={() => {
                  setSixWayCount(sixWayCount + 1);
                  setAttenuation(attenuation + 9);
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
                    setAttenuation(attenuation - 7);
                  }}
                >
                  {fiveWayCount}
                </h2>
                <h2
                  className="count"
                  onClick={() => {
                    setSixWayCount(sixWayCount - 1);
                    setAttenuation(attenuation - 9);
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
                  setAttenuation(attenuation + 10.5);
                }}
              >
                8-Way
              </button>
              <button
                className="square-btn"
                onClick={() => {
                  setTwelveWayCount(twelveWayCount + 1);
                  setAttenuation(attenuation + 11);
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
                    setAttenuation(attenuation - 10.5);
                  }}
                >
                  {eightWayCount}
                </h2>

                <h2
                  className="count"
                  onClick={() => {
                    setTwelveWayCount(twelveWayCount - 1);
                    setAttenuation(attenuation - 11);
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

        <div>
          <button
            className="third-btn"
            onClick={() => {
              if (measurement == "Cable Meters") {
                handleLossMeasurementByMeter(cableDistance);
              } else {
                handleLossMeasurementByFoot(cableDistance);
              }
            }}
          >
            Check Attenuation
          </button>
        </div>

        {attenuation > 0 && <h1>- {attenuation} db</h1>}
      </div>
    </div>
  );
}
