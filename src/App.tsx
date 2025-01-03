import { useState } from "react";
import "./App.css";
import {
  AdvancedRealTimeChart,
  type Studies,
} from "react-ts-tradingview-widgets";

function App() {
  const [interval, setInterval] = useState<
    "D" | "1" | "3" | "5" | "15" | "30" | "60" | "120" | "180" | "240" | "W"
  >("D");
  const myStudy: Studies[] = [
    "RSI@tv-basicstudies",
    "MACD@tv-basicstudies",
    "BollingerBandsR@tv-basicstudies",
  ];

  return (
    <>
      <div
        className="chart-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={() => setInterval("D")}>Daily</button>
          <button onClick={() => setInterval("W")}>Weekly</button>
        </div>
        <AdvancedRealTimeChart
          symbol="FX_IDC:TWDJPY"
          interval={interval}
          timezone="Asia/Taipei"
          theme="dark"
          studies={myStudy}
          style="2"
          range="60M"
          width="100vw"
        />
        <AdvancedRealTimeChart
          symbol="FX_IDC:TWDUSD"
          interval={interval}
          timezone="Asia/Taipei"
          theme="dark"
          studies={myStudy}
          style="2"
          range="60M"
          width="100vw"
        />
        <AdvancedRealTimeChart
          symbol="FX_IDC:TWDEUR"
          interval={interval}
          timezone="Asia/Taipei"
          theme="dark"
          studies={myStudy}
          style="2"
          range="60M"
          width="100vw"
        />
      </div>
    </>
  );
}

export default App;
