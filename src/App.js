import { Route, Switch } from 'react-router';
import Homepage from './homepage';
import Navbar from './navbar.js';
import About from './about';
import Resume from './resume';
import Certificate from './certificate';
import Contact from './contact';
import Project from './project';
function App() {
  return (
   <>
   <Navbar />
   <Switch>
     <Route exact path='/ankush-roy-resume/' component={Homepage}/>
     <Route exact path='/ankush-roy-resume/about' component={About}/>
     <Route exact path='/ankush-roy-resume/resume' component={Resume}/>
     <Route exact path='/ankush-roy-resume/certifications' component={Certificate}/>
     <Route exact path='/ankush-roy-resume/projects' component={Project}/>
     <Route exact path='/ankush-roy-resume/contact' component={Contact}/>
   </Switch>
   </>
  );
}

export default App;
