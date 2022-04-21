module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const allMessages = document.querySelectorAll("span.badge.badge-dot.badge-danger.visible").length;
    // set Franz badge
    Franz.setBadge(0, allMessages);
  };
  Franz.loop(getMessages);
};
