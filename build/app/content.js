chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  let paragraphs = document.getElementsByTagName("p", "h1");
  message.msg.word.forEach(w => {
    for (elt of paragraphs) {
      temp = elt.innerHTML.replace(w.word, w.wordToChange);
      elt.innerHTML = temp;
    }
  });
});
