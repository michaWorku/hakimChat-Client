import React, { useState } from "react";
import "./style.css";
import ChannelListContent from "./ChannelListContent/ChannelListContent";

const ChannelListContainer = () => {
  const [toggleContainer, setToggleContainer] = useState(false);

  return (
    <>
      <div className="channel-list__container">
        <ChannelListContent />
      </div>

      <div
        className="channel-list__container-responsive"
        style={{
          left: toggleContainer ? "0%" : "-89%",
          backgroundColor: "var(--primary-color)",
        }}
      >
        <div
          className="channel-list__container-toggle"
          onClick={() => {
            console.log("togle", toggleContainer);
            setToggleContainer((prevToggleContainer) => !prevToggleContainer);
          }}
        ></div>
        <ChannelListContent setToggleContainer={setToggleContainer} />
      </div>
    </>
  );
};

export default ChannelListContainer;
