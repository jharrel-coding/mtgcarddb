import './App.css';
import Card from './components/Card';
import Set from './components/Set'

function App() {
  return (
    <div className="App col-12">
      {/* <AllCardsFromThisSet theseCards={cards.set} />
      <Link to={`/${set}`}/>
      <Link to={/:set}/> */}

      <div className="masthead">
        <h1>howdy</h1>
        <Card/>
        <Set/>
      </div>
    </div>
  );
}

export default App;
