// import Task1 from './Task1';
// import './App.css';

//  function app() {
//   return (
//     <div className="bg-black">
//      <Task1/>
//     </div>
//     );  
//   }

// export default app;

// ------------------------------------------------------------------------------------------------------------------------------


import Task2 from './Task2';  
import './App.css';

 function App() {
  return (
    <div className="App" style={{justifyContent:"space-around", display:"flex"}}>
     <Task2 name="Rohit Sharma" discri="Rohit sharma is the indian cricketer who has currently captan of india for all format" button1="Like" button2="Dislike"/>
     <Task2 name="Virat Kohli" discri=" Virat kohli is the famus indian cricketer who had recorded monst 100s in the cricket history" button1="Like" button2="Dislike"/>
     <Task2 name="Mahendra Dhoni" discri="Mahendra sing dhoni is the retaerd player. on the othe hand dhoni won the wold cup in 2012." button1="Like" button2="Dislike"/>
     <Task2 name="Sanju samson" discri="Sanju samson is indian cricketer. and also he is the capatain of rajasthan royal in ipl " button1="Like" button2="Dislike"/>
   
    </div>
    );  
  }

export default App;