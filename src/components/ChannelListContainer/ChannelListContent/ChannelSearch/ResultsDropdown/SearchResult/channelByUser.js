export const channelByUser = async ({
  client,
  setActiveChannel,
  channel,
  setChannel,
}) => {
  const filters = {
    type: "messaging",
    member_count: 2,
    members: { $eq: [client.user.id, client.userID] },
  };

  const newChannel = client.channel("messaging", {
    members: [channel.id, client.userID],
  });
  const [existingChannel] = await client.queryChannels(filters);

  if (existingChannel) return setActiveChannel(existingChannel);

  setChannel(newChannel);

  return setActiveChannel(newChannel);
};
