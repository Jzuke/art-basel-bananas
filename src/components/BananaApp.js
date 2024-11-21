import React, { useState, useEffect } from "react";
import numeral from "numeral";
import Div100vh from "react-div-100vh";
import TapedBanana from "./TapedBanana";

const AVERAGE_US_SALARY = 63795;
const AVERAGE_PAYCHECK = AVERAGE_US_SALARY / 26;

const WealthyPeople = [
  {
    name: "Elon Musk",
    netWorth: 316900000000,
    description: "Tesla, SpaceX founder",
  },
  {
    name: "Larry Ellison",
    netWorth: 237900000000,
    description: "Oracle founder",
  },
  { name: "Jeff Bezos", netWorth: 215500000000, description: "Amazon founder" },
  {
    name: "Mark Zuckerberg",
    netWorth: 194100000000,
    description: "Meta founder",
  },
  { name: "Bernard Arnault", netWorth: 155000000000, description: "LVMH CEO" },
  {
    name: "Warren Buffett",
    netWorth: 149100000000,
    description: "Berkshire Hathaway CEO",
  },
  {
    name: "Larry Page",
    netWorth: 138400000000,
    description: "Google co-founder",
  },
  {
    name: "Sergey Brin",
    netWorth: 132500000000,
    description: "Google co-founder",
  },
  { name: "Jensen Huang", netWorth: 125700000000, description: "NVIDIA CEO" },
  {
    name: "Steve Ballmer",
    netWorth: 122900000000,
    description: "Former Microsoft CEO",
  },
];
const sortedWealthyPeople = [...WealthyPeople].sort(
  (a, b) => a.netWorth - b.netWorth
);

const BananaApp = () => {
  const [netWorth, setNetWorth] = useState(0);
  const [tapedBananas, setTapedBananas] = useState([]);

  useEffect(() => {
	const handleMouseClick = (e) => {
	  setTapedBananas(prevBananas => [...prevBananas, { x: e.clientX, y: e.clientY }]);
	  setNetWorth(prevWorth => prevWorth + 6200000);
	};
	
	document.addEventListener('click', handleMouseClick);
	return () => document.removeEventListener('click', handleMouseClick);
  }, []); 

  const findClosestWealthy = () => {
    return (
      sortedWealthyPeople.find((person) => netWorth <= person.netWorth) ||
      sortedWealthyPeople[sortedWealthyPeople.length - 1]
    );
  };

  const getNextWealthyPeople = (current) => {
    const currentIndex = sortedWealthyPeople.findIndex(
      (p) => p.name === current.name
    );
    if (currentIndex === -1) return sortedWealthyPeople.slice(0, 3);
    return sortedWealthyPeople.slice(currentIndex + 1, currentIndex + 4);
  };
  const calculatePaychecks = () => Math.ceil(netWorth / AVERAGE_PAYCHECK);
  const calculateYearsOfWork = () => (calculatePaychecks() / 26).toFixed(1);
  const calculatePercentage = (wealthy) =>
    wealthy ? ((netWorth / wealthy.netWorth) * 100).toFixed(4) : 0;

  const closestWealthy = findClosestWealthy();
  const nextWealthy = getNextWealthyPeople(closestWealthy);
  const percentage = calculatePercentage(closestWealthy);
  const paychecks = calculatePaychecks();
  const yearsOfWork = calculateYearsOfWork();

  return (
    <Div100vh
      style={{
        background: "white",
        border: "12px solid #9a7b4f",
        margin: "20px",
        height: "calc(100vh - 40px)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <header
        style={{
          position: "fixed",
		  padding:"10px",
          right: "3rem",
          top: "3rem",
          fontSize: "14px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "500",
          zIndex: 1000
        }}
      >
        <a
          href="https://www.jakezuke.me"
          style={{
            textDecoration: "underline",
            color: "#333",
          }}
        >
          Created by Jake Zuke
        </a>
      </header>

      {tapedBananas.map((item, index) => (
        <TapedBanana key={index} position={item} />
      ))}

      <h4
        className="show-desktop steps no-select"
        style={{
          padding: "3rem 0 0 3rem",
          fontSize: "14px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontFamily: "Helvetica, Arial, sans-serif",
          color: "#333",
          marginBottom: "10px",
          fontWeight: "500",
        }}
      >
        Step 1: Click Anywhere
      </h4>

      <h4
        className="show-mobile steps no-select"
        style={{
          padding: "3rem 0 0 3rem",
          fontSize: "14px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontFamily: "Helvetica, Arial, sans-serif",
          color: "#333",
          marginBottom: "10px",
          fontWeight: "500",
        }}
      >
        Step 1: Tap Anywhere
      </h4>

      <h4
        className="steps no-select"
        style={{
          padding: "0 0 0 3rem",
          fontSize: "14px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontFamily: "Helvetica, Arial, sans-serif",
          color: "#333",
          fontWeight: "500",
        }}
      >
        Step 2: Profit
      </h4>

	  <div
        className="progress-container"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(calc(100% - 80px), 800px)",
          background: "#f8f8f8",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
          overflowY: "auto",
          maxHeight: "calc(100vh - 240px)",
          "@media (max-width: 768px)": {
            width: "calc(100% - 60px)",
            bottom: "30px",
            maxHeight: "calc(100vh - 200px)"
          }
        }}
      >
        {closestWealthy && (
          <>
            <h2
              style={{
                margin: "0 0 20px 0",
                fontSize: "1.5em",
                textAlign: "center",
                wordBreak: "break-word",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none"
              }}
            >
              Your net worth: {numeral(netWorth).format("$0,0")}
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 5px 0", wordBreak: "break-word" }}>
                  Current Goal: {closestWealthy.name}
                </h3>
                <p
                  style={{
                    margin: "0 0 5px 0",
                    fontSize: "0.9em",
                    color: "#666",
                  }}
                >
                  {closestWealthy.description}
                </p>
                <p
                  style={{ 
                    margin: "0", 
                    fontSize: "0.9em", 
                    fontWeight: "bold",
                    wordBreak: "break-word"
                  }}
                >
                  Net Worth: {numeral(closestWealthy.netWorth).format("$0,0")}
                </p>
              </div>
            </div>

            <div
              style={{
                background: "#eee",
                borderRadius: "10px",
                height: "20px",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  background: "#2B9EB3",
                  height: "100%",
                  width: `${Math.min(percentage, 100)}%`,
                  transition: "width 0.3s ease",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.9em",
                color: "#666",
                marginBottom: "20px",
              }}
            >
              <span>{percentage}% complete</span>
              <span>
                {numeral(closestWealthy.netWorth - netWorth).format("$0,0")} to
                go
              </span>
            </div>

            <div
              style={{
                padding: "10px",
                background: "#f5f5f5",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <p style={{ margin: "0", fontSize: "0.9em", color: "#666" }}>
                An average American earning{" "}
                {numeral(AVERAGE_US_SALARY).format("$0,0")}/year would need
                <br />
                <strong>
                  {numeral(paychecks).format("0,0")} biweekly paychecks
                </strong>{" "}
                to accumulate your current net worth
                <br />
                (that's {yearsOfWork} years of work)
              </p>
            </div>

            {nextWealthy.length > 0 && (
              <div>
                <h4 style={{ margin: "0 0 10px 0" }}>Who's Next:</h4>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  {nextWealthy.map((person, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "10px",
                        background: "#f5f5f5",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <p style={{ margin: "0", fontWeight: "bold" }}>
                          {person.name}
                        </p>
                        <p
                          style={{
                            margin: "0",
                            fontSize: "0.8em",
                            color: "#666",
                          }}
                        >
                          {person.description}
                        </p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p
                          style={{
                            margin: "0",
                            fontSize: "0.9em",
                            fontWeight: "bold",
                          }}
                        >
                          {numeral(person.netWorth).format("$0,0")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Div100vh>
  );
};

export default BananaApp;
