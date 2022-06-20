import React from "react";
import Child from "./child";
let CONST = {
  desktop: 1,
  mobile: 2,
  tab: 3,
};
function Home() {
  return (
    <div>
      <Child deviceType={[CONST.mobile]} />
    </div>
  );
}
export default Home;
