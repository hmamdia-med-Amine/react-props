import "./App.css";

import Profile from "./profile/Profile";

function App() {
  var fullname = "Mohamed Amine HMAMDIA";
  var work = "Web Developer";
  var bio = "A very exciting one";
  const Notify = (fullname) => alert(`${fullname} is taking control`);
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullname={fullname} work={work} bio={bio} Notify={Notify(fullname)}>
          <img className="example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuz4w-URES3HcRzDmpX_rk6unTPKEd-rghaw&usqp=CAU"
            alt="Please reload"
            width='200' height='200' position='relative' 
            
          
          />
        </Profile>
      </header>
    </div>
  );
}

export default App;
