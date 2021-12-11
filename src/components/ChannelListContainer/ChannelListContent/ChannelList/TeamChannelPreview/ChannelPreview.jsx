import React from "react";

const ChannelPreview = ({ channel }) => {
  return (
    <p className="channel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );
};

export default ChannelPreview;
