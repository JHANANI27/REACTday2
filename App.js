import './App.css';
import pic from "./Images/logomerch.png";
import pic1 from "./Images/download.jpg";
import pic2 from "./Images/txt.jpg"
import Armors from './pages/Guns';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <section id="header">
        <image src="../Images/backmerch1.jpg"  />
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>KPOP MERCH </h1><br/>
    <p>
        ARMY!!EXOL!!STAYS!!BLINKS!!
        All fandom merchs available
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >VISIT US TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                Welcome to world's largest Kpop merch
                </h2><br/>
                <div class="img2">
                    <img src={pic1} alt="" /><img src={pic1} alt="" /><br/><br/>
                    <img src={pic2} alt=""/> <img src={pic2 } alt=""/>
                    <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                     
                <br/>
            
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">OFFERS </a>
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
