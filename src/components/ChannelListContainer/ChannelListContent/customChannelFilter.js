export const customChannelTeamFilter = (channels) => {
  return channels.filter((channel) => channel.type === "team");
};
export const customChannelMessagingFilter = (channels) => {
  return channels.filter((channel) => channel.type === "messaging");
};
