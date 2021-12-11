import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import "./style.css";

import {
  customChannelMessagingFilter,
  customChannelTeamFilter,
} from "./customChannelFilter";
import Sidebar from "./Sidebar/Sidebar";
import CompanyHeader from "./CompanyHeader/CompanyHeader";
import ChannelSearch from "./ChannelSearch/ChannelSearch";

import TeamChannelList from "./ChannelList/TeamChannelList/TeamChannelList";
import TeamChannelPreview from "./ChannelList/TeamChannelPreview/TeamChannelPreview";

const ChannelListContent = ({ setToggleContainer }) => {
  const { client } = useChatContext();

  const filters = { members: { $in: [client.userID] } };

  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch setToggleContainer={setToggleContainer} />
        <ChannelList
          filters={filters}
          channelRenderFilterFn={customChannelTeamFilter}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
              setToggleContainer={setToggleContainer}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
              setToggleContainer={setToggleContainer}
            />
          )}
        />
        <ChannelList
          filters={filters}
          channelRenderFilterFn={customChannelMessagingFilter}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
              setToggleContainer={setToggleContainer}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
              setToggleContainer={setToggleContainer}
            />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContent;
