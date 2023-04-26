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

        <div>
          <button className="primary-btn">Check Attenuation</button>
        </div>
      </div>
    </div>
  );
}
