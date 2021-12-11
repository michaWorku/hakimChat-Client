import React from "react";
import "./style.css";
import { Channel, MessageTeam } from "stream-chat-react";
import { useGlobalContext } from "../../context";

import ChannelInner from "./ChannelInner/ChannelInner";
import CreateChannel from "./CreateChannel/CreateChannel";
import EditChannel from "./EditChannel/EditChannel";
import EmpytState from "./EmptyState/EmpytState";

const ChannelContainer = () => {
  const { isCreating, isEditing } = useGlobalContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel />
      </div>
    );
  }

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmpytState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
