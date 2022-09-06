import Editor from "./components/Editor";
import "./index.css";
import Nav from "./components/Nav";
import React, { useState,useEffect } from "react";
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; 
    return confirmationMessage; 
});
function App() {
  var [togglemdfontsize, settogglemdfontsize] = useState(30);
  var [togglecolormode, settogglecolormode] = useState(() => JSON.parse(localStorage.getItem('togglecolormode')) || [true])
    useEffect(() => {
        localStorage.setItem('togglecolormode', JSON.stringify(togglecolormode))
    })
    const [mdinput, setmdinput] = useState('')

  return (
      <div className="body">
          <Nav
              togglecolormode={togglecolormode}
              settogglecolormode={settogglecolormode}
              togglemdfontsize={togglemdfontsize}
              mdinput={mdinput}
              setmdinput={setmdinput}
              settogglemdfontsize={settogglemdfontsize}
          />
          <Editor
              togglecolormode={togglecolormode}
              settogglecolormode={settogglecolormode}
              togglemdfontsize={togglemdfontsize}
              mdinput={mdinput}
              setmdinput={setmdinput}
          />
      </div>
  )
}
export default App;
