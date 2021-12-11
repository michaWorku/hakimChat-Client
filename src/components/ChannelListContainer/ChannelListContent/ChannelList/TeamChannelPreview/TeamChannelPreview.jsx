import "./style.css";

import React from "react";
import { useChatContext } from "stream-chat-react";
import { useGlobalContext } from "../../../../../context";

import ChannelPreview from "./ChannelPreview";
import DirectPreview from "./DirectPreview";

const TeamChannelPreview = ({
  setActiveChannel,
  setToggleContainer,
  channel,
  type,
}) => {
  const { setIsCreating, setIsEditing } = useGlobalContext();

  const { channel: selectedChannel, client } = useChatContext();
  return (
    <div
      className={
        channel?.id === selectedChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);
        if (setToggleContainer) {
          setToggleContainer((prevState) => !prevState);
        }
      }}
    >
      {type === "team" ? (
        <ChannelPreview channel={channel} />
      ) : (
        <DirectPreview channel={channel} client={client} />
      )}
    </div>
  );
};

export default TeamChannelPreview;
