# DOMadLibs

Use the DOMadLibs chrome extension to make the internet one big game of Mad Libs

DOMadLibs was creates with React and Redux and uses the browsers local storage to persist user data after the popup is closed or after the window is closed. It searches through the DOM looking for words that the user has chosen to switch out for another word. The search automatically every time a new tab is opened or a new word is added.

### Installing

Clone or download the project then run ```npm install``` and ```yarn build```.

after that go to [chrome://extensions/](chrome://extensions/) and turn on developer mode in the top right corner.

You will then see a button in the top left corner that says Load Unpacked. 

Here you will want to upload the build folder.

The extension should now show up in the list of extensions and be working.

If you want to check out the local storage you can open the popup inspector by right clicking on the popup and clicking inpect.
