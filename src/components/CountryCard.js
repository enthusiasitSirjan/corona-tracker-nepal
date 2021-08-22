import { Card } from "antd";
import React, { useEffect, useState } from "react";
import numeral from "numeral";
import "./CountryCard.css";
import { PlusOutlined } from "@ant-design/icons";
const CountryCard = ({ country }) => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://corona.lmao.ninja/v2/countries/Nepal")
        .then((response) => response.json())
        .then((data) => {
          setCountryData(data);
        });
    };

    getCountriesData();
  }, []);

  return (
    <>
      <div className="country-card">
        <Card
          className="card-head"
          width={300}
          hoverable={true}
          title="Cases"
          style={{ backgroundColor: "#0d729e" }}
        >
          <div>
            <h1>{numeral(countryData.cases).format("0,0")}</h1>
            <h3 style={{ color: "#fff", fontSize: "1.5em" }}>
              <span style={{ marginRight: "10px" }}>
                <PlusOutlined />
              </span>
              {numeral(countryData.todayCases).format("0,0a")}
            </h3>
          </div>
        </Card>
        <Card
          className="card-head"
          width={300}
          hoverable={true}
          title="Recovered"
          style={{ backgroundColor: "#078c26" }}
        >
          <div>
            <h1>{numeral(countryData.recovered).format("0,0")}</h1>
            <h3 style={{ color: "#fff", fontSize: "1.5em" }}>
              <PlusOutlined />
              <span style={{ marginRight: "10px" }}></span>
              {numeral(countryData.todayRecovered).format("0,0a")}
            </h3>
          </div>
        </Card>
        <Card
          className="card-head"
          width={300}
          hoverable={true}
          title="Deaths"
          style={{ backgroundColor: "#8f030a" }}
        >
          <div>
            <h1>{numeral(countryData.deaths).format("0,0")}</h1>
            <h3 style={{ color: "#fff", fontSize: "1.5em" }}>
              <PlusOutlined />
              <span style={{ marginRight: "10px" }}></span>
              {numeral(countryData.todayDeaths).format("0,0a")}
            </h3>
          </div>
        </Card>

        <Card
          className="card-head"
          width={300}
          hoverable={true}
          title="Active Cases"
          style={{ backgroundColor: "#c98b49", color: "white" }}
        >
          <div>
            <h1>{numeral(countryData.active).format("0,0")}</h1>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CountryCard;
