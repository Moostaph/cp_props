import Profile from "./profile/component/Profile";
import ImageProfile from "./profile/component/ImageProfile";
import './App.css';
const styleProfile = {textAlign: 'center', size:150};
const styleInfo={textAlign:"center", fontSize:12, color:"red"};


const App = () => (
    <div> 
    <div style = {styleProfile} >
    <ImageProfile/>
    </div>     
    
    <div style={styleInfo}>
     <Profile FullName="Mouhamadou Moustapha Mbaye"
              Bio="Administrateur réseaux et systèmes souhaitant se reconvertir en Web Dev"
              Profession="Informaticien"/>;
    </div>
  </div>
  
 );
 export default App;
