import { CORE_CONCEPTS } from "./data";

const reactDescription=["Fundamental","Crucial","Core"]
function genRandom(max){
  return Math.floor(Math.random()*(max+1))

}



function Header() {
  const description=reactDescription[genRandom(2)]
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
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
      </main>
    </div>
  );
}

export default App;
