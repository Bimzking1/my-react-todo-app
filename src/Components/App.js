import Todolist from "./TodoList";

function App() {
  
  const items = [
    {
      id: 1,
      text: 'Membuang sampah',
      completed: false
    },
    {
      id: 2,
      text: 'Membuat roti',
      completed: false
    },
    {
      id: 3,
      text: 'Belajar React',
      completed: false
    }
  ];
  const title = 'Things to do';

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Todolist title={title} items={items}/>
        </div>
      </div>
    </div>
  );
}

export default App;
