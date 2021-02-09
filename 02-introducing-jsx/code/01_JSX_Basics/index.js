function getMood() {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Current Mood is: {getMood()}</h1>
      </div>
    );
  }
}

// ReactDOM.render(<JSXDemo />, document.getElementById("root"));

// class ShowIMG extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>My first React Image</h1>
//         <img src="https://images.unsplash.com/photo-1611791225657-3208503d722a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ShowIMG />, document.getElementById("root"));

// Use JS inside of JSX
function getMood() {
  const moods = ["angry", "funny", "paranoid", "quiet"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class ShowIMG extends React.Component {
  render() {
    return <h1>My number is {getMood()}</h1>;
  }
}
ReactDOM.render(<ShowIMG />, document.getElementById("root"));
