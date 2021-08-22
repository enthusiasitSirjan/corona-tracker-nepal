import React from "react";
import numeral from "numeral";
import "./Table.css";

const Table = ({ countries }) => {
  return (
    <>
      <h1 style={{ fontWeight: "bold" }}>Worldwide Cases</h1>

      <div className="table">
        {countries.map((country) => (
          <tr key={country.countryInfo._id}>
            <td>
              <div className="table-data">
                <img src={country.countryInfo.flag} alt={country.country} />
                <h4>{country.country}</h4>
              </div>
            </td>
            <td>
              <strong>{numeral(country.cases).format("0,0")}</strong>
            </td>
          </tr>
        ))}
      </div>
    </>
  );
};

export default Table;
