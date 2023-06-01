import React from "react";

const Forms = () => {
  return (
    <>
      <section
        className="w-full h-screen bg-center "
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/05/07/09/03/gears-2291916_1280.jpg)",
        }}
      >
        <h3
          className="text-center mt-1 font-bold"
          style={{
            marginTop: "23px",
            marginBottom: "35px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 850,
          }}
        >
          Find Your Ride
        </h3>
        <form>
          <div className="row ">
            <div className="col-xl-8 left-80 mt-2">
              <input
                type="text"
                className="form-control right-2.5 bg-slate-200"
              ></input>
            </div>
          </div>
          <div className="row-this-foot style ">
            <div className="col-xs-12 date">
              <h5 className="this-hd ">pickup</h5>
              <div className="date row m0">
                <div className="col-md-3 col-xs-4">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-calendar"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control left-80 mt-20"
                      name="pickup_date"
                      id="datetimepicker1"
                      required=""
                      placeholder="Date"
                      autocomplete="off"
                      inputmode="none"
                    ></input>
                  </div>
                </div>
                <div className="col-md-3 col-xs-3 left-96 mt-20">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-clock-o"></i>
                    </span>

                    <select
                      class="form-control"
                      name="pickup_time"
                      required=""
                      id="pickup_time"
                      disabled=""
                    >
                      <option value="" selected="" disabled="">
                        {" "}
                        Time
                      </option>
                      <option value="08:00">08:00 AM</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                    </select>

                    <select
                      class="form-control"
                      name="main_time_slots"
                      style={{ display: "none" }}
                      id="main_time_slots"
                    >
                      <option value="08:00">08:00 AM</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-this-foot style ">
            <div className="col-xs-12 date">
              <h5 className="this-hd ">pickup</h5>
              <div className="date row m0">
                <div className="col-md-3 col-xs-4">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-calendar"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control left-80 mt-20"
                      name="pickup_date"
                      id="datetimepicker1"
                      required=""
                      placeholder="Date"
                      autocomplete="off"
                      inputmode="none"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 text-center mt-20">
            <input
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #931ae5 0%, #5654f3 100%);text-transform: capitalize;border:none",
              }}
              class="btn btn-primary"
              value="Search Bikes"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Forms;
