import React, { useEffect } from "react";
import { useState } from "react";
import AllData from "./AllData";
import { Container, Nav, Navbar, Button, Form, Table } from "react-bootstrap";

// get local data
const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Money = () => {
  const [usd, setUsd] = useState(null);
  const [inr, setInr] = useState(null);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [drop, setDrop] = useState("");
  const [data, setData] = useState(getLocalItems());

  const formSubmit = (e) => {
    e.preventDefault();

    const allInfo = {
      usd: usd,
      inr: inr,
      sender: sender,
      receiver: receiver,
      drop: drop,
    };

    setData([...data, allInfo]);

    reset();
  };

  function reset() {
    setUsd("");
    setInr("");
    setSender("");
    setReceiver("");
    setDrop("");
  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(data));
  }, [data]);

  // remove Data

  const removeItems = () => {
     localStorage.removeItem('lists');
     setData([]);

    
  };

  function calculate(data){
    setTimeout(()=>{
        setInr(usd * 80)
    }, 2000 )
    }
    calculate();

 

  // reflect the amount from USD to INR

  // function calculate(e){
  // let val  = e.target.value;
  // setUsd(val);
  // //update inr
  // let result = 0;
  // result = val*80;
  // setInr(result);
  // }
  return (
    <>
      <div className="container mt-2 pt-2 border border-primary col-6">
        <div className="row  mt-5 col-6  ">
          <Form id="frm" onSubmit={formSubmit}>
            <Form.Group
              onChange={(e) => setUsd(e.target.value)}
              value={usd}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="Amount To Be Send in USD"
              />
            </Form.Group>

            <Form.Group
              onChange={(e) => setInr(e.target.value)}
              value={inr}
              className="mb-3 "
              controlId="formBasicPassword"
            >
              <Form.Control
                type="text"
                // disabled={true}
                placeholder="Amount to Be Received in INR"
              />
            </Form.Group>

            <Form.Group
              onChange={(e) => setSender(e.target.value)}
              value={sender}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Control type="text" placeholder="Sender Name" />
            </Form.Group>

            <Form.Group
              onChange={(e) => setReceiver(e.target.value)}
              value={receiver}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Control type="text" placeholder="Receiver Name" />
            </Form.Group>

            <Form.Select onChange={(e) => setDrop(e.target.value)} size="lg">
              <option>SELECT ANY</option>
              <option>DAILY NEEDS</option>
              <option>SCHOOL FEE</option>
              <option>HEALTH CARE</option>
            </Form.Select>

            <br />

            <div className=" mb-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br /> <br />
              <Button onClick={removeItems} variant="danger" type="submit">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>

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
              {data.map((elem, id) => {
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

export default Money;
