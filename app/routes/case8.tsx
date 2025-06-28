import "./case8_explosion.css";
import type { ReactNode } from "react";

export default function Case8(): ReactNode {
  return (
    <>
      {Array.from(Array(10000).keys()).map((index) => (
        <div key={index} className="relative h-50 w-screen">
          <div className="absolute origin-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="explosion">
              <div className="origin-left explosion-bg" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
