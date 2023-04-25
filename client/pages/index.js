import { useState } from "react";

import { Dropdown } from "react-bootstrap";
export default function Home() {
  const [selectedCable, setSelectedCable] = useState("Select Coax Size");
  const [selectedFrequency, setSelectedFrequency] =
    useState("Select Frequency");
  const handleCableSizeChoice = (option) => {
    setSelectedCable(option);
  };

  const handleFrequencyChoice = (option) => {
    setSelectedCable(option);
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
      </div>
    </div>
  );
}
