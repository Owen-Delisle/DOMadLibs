chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  let paragraphs = document.getElementsByTagName(
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "b",
    "i"
  );
  message.msg.word.forEach(w => {
    for (elt of paragraphs) {
      temp = elt.innerHTML.replace(w.word, w.wordToChange);
      elt.innerHTML = temp;
    }
  });
});
