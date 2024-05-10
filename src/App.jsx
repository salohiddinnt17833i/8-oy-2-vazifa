import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import check from "./assets/Uncheck.svg";
import addSquare from "./assets/add-square.svg"
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import phone from "./assets/phone.svg";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Header from "./components/Header/Header";
import "./App.css";
import { useState } from "react";
import Timeline from "./components/Timeline/Timeline";





function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const namess = [
  '20 Sekund',
  '10 Sekund',
  '1 Sekund'

];

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
];

function App() {
  const [uz, setUz] = useState();
  const [ru, setRu] = useState();
  const [eng, setEng] = useState();
  const [projectName, setProjectName] = useState()
  const [link, setLink] = useState();


  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const [value, setValue] = useState(0);

  const Change = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = useState('');

  const handleChangeOne = (event) => {
    setAge(event.target.value);
  };


  const [ageTwo, setAgeTwo] = useState('');

  const handleChangeTwo = (event) => {
    setAgeTwo(event.target.value);
  };



  const [ageThree, setAgeThree] = useState('');

  const handleChangeThree = (event) => {
    setAgeThree(event.target.value);
  };



  function validate(link) {
    if (link == 'https://www.') {
      alert('URL manzil kiriting')
      return
    }

    return true
  }


  return (
    <>
      <div>
        <Header></Header>
        <div className="container">
          <div className="hero">
            <div className="click">
              <Button className="clickmade">
                <ArrowBackIosIcon></ArrowBackIosIcon>
                <span className="click-title">Subloyiha ochish</span>
              </Button>
              <Button className="countinue" variant="contained" size="medium">
                Davom etish<ArrowForwardIosIcon></ArrowForwardIosIcon>
              </Button>
            </div>
            <div className="inputs">
              <div className="p_a_t">
                <div className="p_i">
                  <label htmlFor="project">Loyiha nomi</label>
                  <input
                    type="text"
                    placeholder="Loyiha nomi"
                    className="p_n"
                    value={projectName}
                    onChange={(e) => { e.target.value }}
                  />
                </div>
                <div className="tag">
                  <span>Tag</span>

                  <Box sx={{ width: 600 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChangeOne}
                      >
                        <MenuItem value={10}>Tag 1</MenuItem>
                        <MenuItem value={20}>Tag 2</MenuItem>
                        <MenuItem value={30}>Tag 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                </div>
              </div>

              <div className="s_f">
                <div className="p_i">
                  <label
                    htmlFor="project"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <img src={check} alt="" />
                    Boshlanish vaqti
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="boshlanish vaqti"
                        sx={{ width: 600 }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="finish">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <img src={check} alt="" />
                    Qancha vaqtda habar yuboriladi?
                  </label>

                  <Box sx={{ width: 600 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ageTwo}
                        label="Age"
                        onChange={handleChangeTwo}
                      >
                        <MenuItem value={10}>30 Sekund</MenuItem>
                        <MenuItem value={20}>20 Sekund</MenuItem>
                        <MenuItem value={30}>10 Sekund</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>

            <div className="timeLine">
              <div className="timeLine-title">
                <img src={check} alt="" />
                <span>Habar yuborilmaydigan vaqt</span>
              </div>

              <div className="time-line">

              </div>
            </div>

            <div>
              <Timeline />
            </div>

            <div className="added-massage">
              <h1 className="massage-title">Habarning ko'rinishi</h1>
              <div className="send-massage">
                <div className="send-massage-place">
                  <div className="shablon">
                    <label
                      htmlFor="demo-multiple-checkbox"
                      className="shablon-title"
                    >
                      Shablon
                    </label>


                    <Box sx={{ width: 600 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={ageThree}
                          label="Age"
                          onChange={handleChangeThree}
                        >
                          <MenuItem value={10}>Yangi Klient</MenuItem>
                          <MenuItem value={20}>Erkaklar</MenuItem>
                          <MenuItem value={30}>Ayollar</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>


                  </div>
                  <div className="link">
                    <label htmlFor="project">Link</label>
                    <input type="text" placeholder="Link" className="p_n" value={link} onChange={(e) => { e.target.value }} />
                  </div>

                  <div className="desc-lang">
                    <div className="desc-lang-title">
                      <h1 style={{ fontSize: "18px" }}>Habar</h1>
                      <a href='#' className="addSquare" style={{ fontSize: "14px" }}><img src={addSquare} alt="add square" />Shablon holatida saqlash</a>
                    </div>
                    <Box sx={{ width: "100%" }}>
                      <Box>
                        <Tabs value={value} onChange={Change}>
                          <Tab label="O’zbekcha" {...a11yProps(0)} sx={{ width: "200px", borderLeft: "1px solid #E2E2EA", borderTop: "1px solid #E2E2EA" }} />
                          <Tab label="Русский" {...a11yProps(1)} sx={{ width: "200px", borderLeft: "1px solid #E2E2EA", borderTop: "1px solid #E2E2EA" }} />
                          <Tab label="English" {...a11yProps(2)} sx={{ width: "200px", borderLeft: "1px solid #E2E2EA", borderTop: "1px solid #E2E2EA", borderRight: "1px solid #E2E2EA" }} />
                        </Tabs>
                      </Box>
                      <CustomTabPanel value={value} index={0}>
                        <textarea value={uz} onChange={(e) => { e.target.value }} cols="65" rows="10" className="textarea" placeholder="Habar matni..."></textarea>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                        <textarea value={ru} onChange={(e) => { e.target.value }} cols="65" rows="10" className="textarea" placeholder="Текст сообщения..."></textarea>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={2}>
                        <textarea value={eng} onChange={(e) => { e.target.value }} cols="65" rows="10" className="textarea" placeholder="Message text..."></textarea>
                      </CustomTabPanel>
                    </Box>
                  </div>
                </div>

                <div className="for-img">
                  <img src={phone} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

