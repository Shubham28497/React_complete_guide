import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import CoreConecpt from "./components/CoreConcept";
import { useState } from "react";

function App() {
  const [tableContent, setTabelContent] = useState("Please click on button");
  // let tableContent="Please select a button"
  function handleClick(selectedItems) {
    setTabelContent(selectedItems);
    console.log(selectedItems);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConecpt {...CORE_CONCEPTS[0]} />
            <CoreConecpt {...CORE_CONCEPTS[1]} />
            <CoreConecpt {...CORE_CONCEPTS[2]} />
            <CoreConecpt {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleClick("components")}
              label="Components"
            ></TabButton>
            <TabButton
              onSelect={() => handleClick("jsx")}
              label="JSX"
            ></TabButton>
            <TabButton
              onSelect={() => handleClick("props")}
              label="Props"
            ></TabButton>
            <TabButton
              onSelect={() => handleClick("state")}
              label="State"
            ></TabButton>
          </menu>
          {tableContent}
        </section>
      </main>
    </div>
  );
}

export default App;
