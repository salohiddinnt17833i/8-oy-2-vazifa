import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import "./index.css";

function Timeline() {

  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;


  const [value1, setValue1] = useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };


  return (
    <>
      <div className="main">
        <div className="main_container">
          <div className="form">
          </div>
          <div className="box">
            <div className="box_title">
              <p>Habar yuborilmaydigan vaqt</p>
            </div>
            <Box sx={{ width: 300 }} />
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              getAriaValueText={valuetext}
              disableSwap
            />
          </div>
          <div className="timer">
            <p>13:00</p>
            <p>14:00</p>
            <p>15:00</p>
            <p>16:00</p>
            <p>17:00</p>
            <p>18:00</p>
            <p>19:00</p>
            <p>20:00</p>
            <p>21:00</p>
            <p>22:00</p>
            <p>23:00</p>
            <p>00:00</p>
            <p>01:00</p>
            <p>02:00</p>
            <p>03:00</p>
            <p>04:00</p>
            <p>05:00</p>
            <p>06:00</p>
            <p>07:00</p>
            <p>08:00</p>
            <p>09:00</p>
            <p>10:00</p>
            <p>11:00</p>
            <p>12:00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;