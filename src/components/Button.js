import React from 'react';
// import ReactDOM from 'react-dom';
// import CodeYourFutureDiscription from './CodeYourFutureDiscription';


// class Button extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button> CodeYourFuture </button>
//                 <button> Udacity(Scholarship) </button>
//                 <button>Work Experience</button>
//                 <button>Volunteering Experience</button>
//                 <button>University of Edinburgh</button>
//                 <button>Geniver University(Scholarship)</button>
//                 <button>Ritsumeikan University(Scholarship)</button>
//                 <button>Newbattle Abbey College</button>
//                 <button>Work Experience</button>
//                 <button>Volunteering Experience</button>
//                 <button>Languages</button>
//                 <button>Additional information</button>
//                 <button>References</button>
//             </div>
//         )
//     }
// }

class Button extends React.Component {
    CodeYourFutureDiscription() {
        alert('Full Stack Web Development Programme	April -Nov 2017'
        )
    }
    render() {
        return (<button onClick={this.CodeYourFutureDiscription}>CodeYourFuture</button>)
    }

}


// {props.name}
// function Button (props){
// }
export default Button;









// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }

//     return (
//       <a href="#" onClick={handleClick}>
//         Click me
//       </a>
//     );
//   }