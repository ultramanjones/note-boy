import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="likes" className="Front-logo" alt="logo"></div>
          <p>
            Note-Boy FTW!!!
          </p>
          <button onclick="window.location.href='/LoginScreen.html'">Enter</button>
        </header>
      </div>
    );
  }
}

function field_focus(field, email)
{
  if(field.value == email)
  {
    field.value = '';
  }
}

function field_blur(field, email)
{
  if(field.value == '')
  {
    field.value = email;
  }
}

// //Fade in dashboard box
// $(document).ready(function(){
//   $('.box').hide().fadeIn(1000);
//   });

// //Stop click event
// $('a').click(function(event){
//   event.preventDefault(); 
// });

export default App;
