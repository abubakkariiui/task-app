import './App.css';
import Menu from './components/Menu';
import TasksSection from './components/TasksSection/TasksSection';
import AccountData from './components/AccountData';

function App() {
  return (
    <div className="bg-slate-200 min-h-screen text-slate-600 grid grid-cols-7">
      <Menu />
      <TasksSection />
      <AccountData />
    </div>
  );
}

export default App;
