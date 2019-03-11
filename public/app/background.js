loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("LOAD ERR", err);
    return undefined;
  }
};

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  switch (msg.type) {
    case "popupInit":
      response("tabStorage[msg.tabId]");
      break;
    case "formsend":
      chrome.tabs.sendMessage(msg.tabId, msg, function(response) {
        console.log("res", response);
      });
      response("tabStorage[msg.tabId]");
      break;
    default:
      response("unknown request");
      break;
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    chrome.tabs.sendMessage(tabId, { msg: loadState() }, function(response) {
      console.log("res", response);
    });
  }
});
