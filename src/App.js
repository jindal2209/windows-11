import Taskbar from "./components/taskbar/taskbar";
import './App.css'
import StartMenu from "./components/startmenu/startmenu";
import SideNotification from "./components/sideNotification/sideNotification";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/wallpaper/default/img0.jpg'})` }}>
      <StartMenu />
      <SideNotification />
      <Taskbar />
    </div>
  );
}

export default App;
