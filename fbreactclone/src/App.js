import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
        <Sidebar />
        <Feed />
        {/* Widgets */}
    </div>
  );
}

export default App;
