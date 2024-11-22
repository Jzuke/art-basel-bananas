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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isProgressExpanded, setIsProgressExpanded] = useState(false);
  const [netWorth, setNetWorth] = useState(0);
  const [tapedBananas, setTapedBananas] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseClick = (e) => {
      // Check if the click target is within the progress container
      const progressContainer = document.querySelector(".progress-container");
      if (progressContainer && progressContainer.contains(e.target)) {
        return; // Don't add banana if clicking inside progress container
      }

      setTapedBananas((prevBananas) => [
        ...prevBananas,
        { x: e.clientX, y: e.clientY },
      ]);
      setNetWorth((prevWorth) => prevWorth + 6200000);
    };

    document.addEventListener("click", handleMouseClick);
    return () => document.removeEventListener("click", handleMouseClick);
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
      }}
    >
       <div style={{
      padding: isMobile ? "1rem" : "3rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    }}>
      <div style={{ display: "inline-block" }}>
        <a
          href="https://www.jakezuke.me"
          style={{
            color: "#333",
            fontSize: "14px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "500",
            textDecoration: "underline",
            marginBottom: "1rem",
            display: "inline-block",
          }}
        >
          Created by Jake Zuke
        </a>
      </div>
        <h4
          className="show-desktop steps no-select"
          style={{
            fontSize: "14px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#333",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Step 1: Click To Tape A Banana
        </h4>

        <h4
          className="show-mobile steps no-select"
          style={{
            fontSize: "14px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#333",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Step 1: Tap To Tape a Banana
        </h4>

        <h4
          className="steps no-select"
          style={{
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
      </div>
      {tapedBananas.map((item, index) => (
        <TapedBanana key={index} position={item} />
      ))}

<div
        className={`progress-container ${isProgressExpanded ? "expanded" : ""}`}
        style={{
          position: "absolute",
          overflow: "hidden",
          bottom: isMobile ? "0" : "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "100%" : "min(calc(100% - 80px), 800px)",
          background: "#f8f8f8",
          padding: isMobile ? "16px" : "20px",
          borderRadius: isMobile ? "12px 12px 0 0" : "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
          overflowY: "auto",
          maxHeight: isMobile
            ? isProgressExpanded
              ? "calc(100vh - 120px)"
              : "160px"
            : "calc(100vh - 240px)",
          cursor: "default",
          transition: "all 0.3s ease-in-out",
          zIndex: isMobile && isProgressExpanded ? 2000 : "auto",
        }}
      >
        {isMobile && (
          <button
            onClick={() => setIsProgressExpanded(!isProgressExpanded)}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "8px",
              padding: "8px 0",
              outline: "none",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: `rotate(${isProgressExpanded ? 180 : 0}deg)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        )}


        {closestWealthy && (
          <>
            {/* Net Worth and Banana Count */}
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "12px" : "0",
                justifyContent: "space-between",
                alignItems: isMobile ? "stretch" : "center",
                marginBottom: isMobile ? "16px" : "24px",
                paddingBottom: "16px",
                borderBottom: "1px solid #eee",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: isMobile ? "1.2em" : "1.8em",
                  fontWeight: "600",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Your net worth: {numeral(netWorth).format("$0,0")}
              </h2>
              <div
                style={{
                  background: "#2B9EB3",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMobile ? "center" : "flex-start",
                  gap: "8px",
                  fontSize: "0.9em",
                }}
              >
                <span>🍌</span>
                <span>
                  {tapedBananas.length}{" "}
                  {tapedBananas.length === 1 ? "banana" : "bananas"} taped
                </span>
              </div>
            </div>

            {/* Show full content when expanded on mobile or always on desktop */}
            {(!isMobile || isProgressExpanded) && (
              <>
                {/* About Section */}
                <div
                  style={{
                    marginBottom: "24px",
                    padding: "16px",
                    background: "#f5f5f5",
                    borderRadius: "12px",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "0.9em",
                      lineHeight: "1.4",
                      color: "#444",
                    }}
                  >
                    Each taped banana pays $6.2M — because in the world we live in,{" "}
                    <a
                      href="https://www.morningbrew.com/stories/2024/11/20/a-duct-taped-banana-sells"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#2B9EB3",
                        textDecoration: "underline",
                        fontWeight: "500",
                      }}
                    >
                      someone actually paid that
                    </a>{" "}
                    for a banana taped to a wall. Let's see how many overpriced
                    fruit pieces it takes to join the top 10 billionaire club.
                  </p>
                </div>

                {/* Progress Section */}
                <div
                  style={{
                    marginBottom: "24px",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 12px 0",
                      fontSize: "1em",
                      color: "#333",
                    }}
                  >
                    Next stop: {closestWealthy.name}
                  </h3>

                  <div
                    style={{
                      background: "#eee",
                      borderRadius: "8px",
                      height: "16px",
                      overflow: "hidden",
                      marginBottom: "8px",
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
                      fontSize: "0.85em",
                      color: "#666",
                      marginBottom: "16px",
                    }}
                  >
                    <span>{percentage}% there</span>
                    <span>
                      {numeral(closestWealthy.netWorth - netWorth).format(
                        "$0,0"
                      )}{" "}
                      to go
                    </span>
                  </div>

                  {/* Average American Section */}
                  <div
                    style={{
                      fontSize: "0.85em",
                      color: "#666",
                      background: "#f5f5f5",
                      padding: "12px",
                      borderRadius: "8px",
                    }}
                  >
                    Your average American making{" "}
                    {numeral(AVERAGE_US_SALARY).format("$0,0")}/year would need{" "}
                    <strong>
                      {numeral(paychecks).format("0,0")} biweekly paychecks
                    </strong>{" "}
                    to match what you've made taping bananas. That's{" "}
                    <strong>{yearsOfWork} years</strong> of work.
                  </div>
                </div>

                {/* Billionaire List - Only show on desktop or when expanded on mobile */}
                <div
                  style={{
                    fontSize: "0.85em",
                    color: "#666",
                    borderTop: "1px solid #eee",
                    paddingTop: "16px",
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 12px 0",
                      color: "#333",
                    }}
                  >
                    The Billionaire Club:
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile
                        ? "1fr"
                        : "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "8px",
                    }}
                  >
                    {[
                      ...(netWorth > 0
                        ? [
                            {
                              name: "YOU",
                              netWorth: netWorth,
                              description: "Banana Art Collector",
                            },
                          ]
                        : []),
                      ...WealthyPeople,
                    ]
                      .sort((a, b) => b.netWorth - a.netWorth)
                      .slice(0, 10)
                      .reverse()
                      .map((person, index) => (
                        <div
                          key={person.name}
                          style={{
                            padding: "8px 12px",
                            background:
                              person.name === "YOU" ? "#2B9EB3" : "#f5f5f5",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: person.name === "YOU" ? "white" : "inherit",
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <p style={{ margin: "0", fontWeight: "500" }}>
                              {10 - index}. {person.name}
                            </p>
                            <p
                              style={{
                                margin: "0",
                                fontSize: "0.9em",
                                color:
                                  person.name === "YOU"
                                    ? "rgba(255,255,255,0.8)"
                                    : "#666",
                              }}
                            >
                              {person.description}
                            </p>
                          </div>
                          <div
                            style={{
                              marginLeft: "12px",
                              fontSize: "0.9em",
                              fontWeight: "500",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {numeral(person.netWorth).format("$0.0a")}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Div100vh>
  );
};

export default BananaApp;