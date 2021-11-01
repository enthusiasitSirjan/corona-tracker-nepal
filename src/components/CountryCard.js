import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import numeral from "numeral";
import "./CountryCard.css";

const CountryCard = () => {
  const [countryData, setCountryData] = useState([]);
  const [country, setInputCountry] = useState("worldwide");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryData(data);
      });
  };

  return (
    <>
      <div>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide" style={{ color: "white" }}>
              Worldwide
            </MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
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
