const GroupChat = require("../models/GroupChat");

async function createMongoGroupChat(groupName) {
  await GroupChat.create({ name: groupName });
  return;
}

async function getMongoGroupChats() {
  const groupChats = await GroupChat.find({});
  return groupChats;
}

async function getMongoGroupByChatId(chatId) {
  const groupChat = await GroupChat.findById(chatId);
  return groupChat;
}

async function getMongoGroupByName(groupName) {
  const selectedGroup = await GroupChat.find({ name: groupName });
  return selectedGroup[0];
}

async function updateMongoGroupBackground({ groupName, backgroungUrl }) {
  await GroupChat.findOneAndUpdate({ name: groupName }, { background_image: backgroungUrl });
  return;
}

async function existMongoGroupHavingGroupName(groupName) {
  const groups = await GroupChat.find({ name: groupName });
  return groups.length > 0;
}

async function existMongoGroupChatById(groupId) {
  const groups = await Group.findById(groupId);
  return groups.length > 0;
}

module.exports = {
  createMongoGroupChat,
  getMongoGroupChats,
  getMongoGroupByChatId,
  getMongoGroupByName,
  updateMongoGroupBackground,
  existMongoGroupHavingGroupName,
  existMongoGroupChatById,
};
