import ListGroup from "./Components/ListGroup";

function App() {

const items = ['Test', 'testing'];

  return <div><ListGroup items={items} heading="tests" onSelectItem={(item: string) => console.log(item)} /> </div> 
}

export default App;