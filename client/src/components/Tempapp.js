import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c3749c7374542e06a85b382b79b23203`;
      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputfield"
            onChange={(event) => {
              setSearch(event.target.value)}}/>
        </div>
        {!city ? (
          <p className="errorMsg">Data Not Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                {" "}
                Min : {city.temp_min}°C | Max : {city.temp_max}°C{" "}
              </h3>
            </div>

            <div className="wave1"></div>
            {/* <div className='wave2'></div> */}
            {/* <div className='wave3'></div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
