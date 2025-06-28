import type { ReactNode } from "react";
import "./case7_explosion.css";

export default function Case7(): ReactNode {
  return (
    <>
      {Array.from(Array(10000).keys()).map((index) => (
        <div key={index} className="relative h-50 w-screen">
          <div className="explosion">
            <div className="explosion-bg" />
          </div>
        </div>
      ))}
    </>
  );
}
