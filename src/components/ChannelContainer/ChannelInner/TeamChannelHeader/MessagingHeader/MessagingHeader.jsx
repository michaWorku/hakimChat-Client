import {
  Avatar,
  useChannelStateContext,
  useChatContext,
} from "stream-chat-react";
import { ChannelInfo } from "../../../../../assets";
import { useGlobalContext } from "../../../../../context";
import "./style.css";

const MessagingHeader = () => {
  const { setIsEditing } = useGlobalContext();
  const { channel } = useChannelStateContext();
  const { client } = useChatContext();

  const members = Object.values(channel.state.members).filter(
    ({ user }) => user.id !== client.userID
  );
  const additionalMembers = members.length - 3;

  if (channel.type === "messaging") {
    return (
      <div className="team-channel-header__name-wrapper">
        {members.map(({ user }, i) => (
          <div key={i} className="team-channel-header__name-multi">
            <Avatar
              image={user.image}
              name={user.fullName || user.id}
              size={32}
            />
            <p className="team-channel-header__name user">
              {user.fullName || user.id}
            </p>
          </div>
        ))}

        {additionalMembers > 0 && (
          <p className="team-channel-header__name user">
            and {additionalMembers} more
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="team-channel-header__channel-wrapper">
      <p className="team-channel-header__name"># {channel.data.name}</p>
      <span style={{ display: "flex" }} onClick={() => setIsEditing(true)}>
        <ChannelInfo />
      </span>
    </div>
  );
};

export default MessagingHeader;
