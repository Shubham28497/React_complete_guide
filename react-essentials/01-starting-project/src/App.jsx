import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import CoreConecpt from "./components/CoreConcept";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [tableContent, setTabelContent] = useState("");
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
            isSelected={tableContent=='components'}
              onSelect={() => handleClick("components")}
              label="Components"
            ></TabButton>
            <TabButton
            isSelected={tableContent=='jsx'}
              onSelect={() => handleClick("jsx")}
              label="JSX"
            ></TabButton>
            <TabButton
            isSelected={tableContent=='props'}
              onSelect={() => handleClick("props")}
              label="Props"
            ></TabButton>
            <TabButton
            isSelected={tableContent=='state'}
              onSelect={() => handleClick("state")}
              label="State"
            ></TabButton>
          </menu>
          {!tableContent ? (
            <p>Please select a topic:</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[tableContent].title}</h3>
              <p>{EXAMPLES[tableContent].description}</p>
              <pre>
                <code>{EXAMPLES[tableContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
