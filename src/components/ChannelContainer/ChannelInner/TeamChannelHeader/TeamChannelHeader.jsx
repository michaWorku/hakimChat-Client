import { useChannelStateContext } from "stream-chat-react";
import MessagingHeader from "./MessagingHeader/MessagingHeader";
import "./style.css";

const TeamChannelHeader = () => {
  const { watcher_count } = useChannelStateContext();

  const getWatcherText = (watchers) => {
    if (!watchers) return "No users online";
    if (watchers === 1) return "1 user online";
    return `${watchers} users online`;
  };

  return (
    <div className="team-channel-header__container">
      <MessagingHeader />
      <div className="team-channel-header__right">
        <p className="team-channel-header__right-text">
          {getWatcherText(watcher_count)}
        </p>
      </div>
    </div>
  );
};

export default TeamChannelHeader;
