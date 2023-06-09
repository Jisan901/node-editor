import './App.css';
import Main from "./layouts/Main"
import Editor from './pages/Home'

function App() {
// simple route setup with React-router-dom
  return (
    <Main>
        <Editor/>
    </Main>
  );
}

export default App;
