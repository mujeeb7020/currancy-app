import { useState } from "react";
import { Button, Form } from "react-bootstrap";

// here i am geeting local data
const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Money = () => {
  const [usd, setUsd] = useState();
  const [inr, setInr] = useState();
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [drop, setDrop] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    const allInfo = {
      usd: usd,
      inr: inr,
      sender: sender,
      receiver: receiver,
      drop: drop,
    };
    localStorage.setItem(
      "lists",
      JSON.stringify([...getLocalItems(), allInfo])
    );

    removeItems();
  };

  const removeItems = () => {
    setInr(0);
    setUsd(0);
    setSender("");
    setReceiver("");
    setDrop([]);
  };

  const ConvertUsdToRupee = (value) => {
    setUsd(value);
    setTimeout(() => {
      setInr(value * 80);
    }, 2000);
  };

  return (
    <>
      <div className="container mt-2 pt-2 border border-primary col-6">
        <h1 className="text-center">CONVERT THE CURRANCY</h1>

        <div className="row text-center  mt-5 col-6  ">
          <Form onSubmit={formSubmit}>
            {/* 1st text field */}

            <Form.Group
              // onChange={(e) => setUsd(e.target.value)}
              // value={usd}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                min={0}
                value={usd}
                type="number"
                onChange={(e) => ConvertUsdToRupee(e.target.value)}
                placeholder="Amount To Be Send in USD"
              />
            </Form.Group>

            {/* 2nd textfield */}

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                value={inr}
                type="number"
                disabled={true}
                placeholder="Amount to Be Received in INR"
              />
            </Form.Group>

            {/* 3rd text field */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Sender Name"
                onChange={(e) => setSender(e.target.value)}
                value={sender}
              />
            </Form.Group>

            {/* 4th text field */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Receiver Name"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
            </Form.Group>

            {/* 5th text field(dropdown) */}

            <Form.Select
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              size="lg"
            >
              <option>SELECT ANY</option>
              <option>DAILY NEEDS</option>
              <option>SCHOOL FEE</option>
              <option>HEALTH CARE</option>
            </Form.Select>

            <br />

            <div className=" container mb-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br /> <br />
              <Button onClick={removeItems} variant="danger">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Money;
