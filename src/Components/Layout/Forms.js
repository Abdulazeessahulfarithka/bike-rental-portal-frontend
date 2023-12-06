import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, disabled } from "@mui/x-date-pickers/DatePicker";

const Forms = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="w-full h-screen bg-center "
        // style={{
        //   backgroundImage:
        //     "url(https://cdn.pixabay.com/photo/2017/05/07/09/03/gears-2291916_1280.jpg)",
        // }}
      >
        <h3
          className="text-center mt-0 font-bold"
          style={{
            marginTop: "23px",
            marginBottom: "35px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 850,
            backgroundColor: "green",
          }}
        >
          Find Your Ride
        </h3>

        <section>
          <div className="row ">
            <div className="col-xl-8 left-72 mt-5 ">
              <select
                type="text"
                className="form-control right-2.5 bg-slate-200 "
              >
                <option>--Select City--</option>
                <option>Chennai</option>
                <option>Banglore</option>
              </select>
            </div>
          </div>

          <div className="date row m0">
            <div className="col-lg-4 left-72 py-6 mt-5">
              <label>Pick Up</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Date"
                    disablePast="false"
                    format="DD/MM/YYYY"
                    
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="col-lg-4 left-72 py-6 mt-5">
              <select type="text" className="form-control  bg-slate-200 ">
                <option value="" selected="" disabled="">
                  Time
                </option>
                <option value="08.00">08.00AM</option>
                <option value="09.00">09.00AM</option>
                <option value="10.00">10.00AM</option>
                <option value="11.00">11.00AM</option>
                <option value="12.00">12.00PM</option>
                <option value="13.00">01.00PM</option>
                <option value="14.00">02.00PM</option>
                <option value="15.00">03.00PM</option>
                <option value="16.00">04.00PM</option>
                <option value="17.00">05.00PM</option>
                <option value="18.00">06.00PM</option>
                <option value="19.00">07.00PM</option>
                <option value="20.00">08.00PM</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4  left-72 py-6 mt-5">
              <label>DROPOFF</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Date"
                    disablePast="true"
                    disableHighlightToday="false"
                    format="DD/MM/YYYY"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="col-lg-4 left-72 py-6 mt-5">
              <select type="text" className="form-control  bg-slate-200 ">
                <option value="" selected="" disabled="">
                  Time
                </option>
                <option value="08.00">08.00AM</option>
                <option value="09.00">09.00AM</option>
                <option value="10.00">10.00AM</option>
                <option value="11.00">11.00AM</option>
                <option value="12.00">12.00PM</option>
                <option value="13.00">01.00PM</option>
                <option value="14.00">02.00PM</option>
                <option value="15.00">03.00PM</option>
                <option value="16.00">04.00PM</option>
                <option value="17.00">05.00PM</option>
                <option value="18.00">06.00PM</option>
                <option value="19.00">07.00PM</option>
                <option value="20.00">08.00PM</option>
              </select>
            </div>
          </div>
          <div class="flex justify-center  items-center mt-20">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/bike");
              }}
            >
              SearchBike
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Forms;
