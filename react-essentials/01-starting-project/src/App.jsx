import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";





function CoreConecpt({image,title,description}){
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          <CoreConecpt
          {...CORE_CONCEPTS[0]}
          />
          <CoreConecpt
          {...CORE_CONCEPTS[1]}
          />
          <CoreConecpt
          {...CORE_CONCEPTS[2]}
          />
          <CoreConecpt
          {...CORE_CONCEPTS[3]}
          />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
