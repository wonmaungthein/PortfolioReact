import React from 'react';

// class CodeYourFutureDetails extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1> CodeYourFuture</h1>
//                 <p> eoifjmkdjfoldfk </p>
//             </div>
//         )
//     }
// }

function CodeYourFutureDetails(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )

}

export default CodeYourFutureDetails;