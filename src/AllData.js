import React, { useEffect } from "react";
import { useState } from "react";

import {  Table } from "react-bootstrap";

// get local data
const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const AllData = () => {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    setData(getLocalItems());
  }, []);

  

  return (
    <>
      <div>
        <h1 className="text-center mt-4">ALL DATA</h1>
        <div className="container">
          <Table
            className="table table-bordered"
            striped
            bordered
            hover
            size="sm"
          >
            <thead className="table-dark">
              <tr>
                {/* <th>#</th> */}
                <th>AMOUNT IN USD</th>
                <th>AMOUT IN INR </th>
                <th>SENDER</th>
                <th>RECEIVER</th>
                <th>REASON</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, indx) => {
                return (
                  <>
                    <tr>
                      <td>{elem.usd}</td>
                      <td>{elem.inr}</td>
                      <td>{elem.sender}</td>
                      <td>{elem.receiver}</td>
                      <td>{elem.drop}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default AllData;
