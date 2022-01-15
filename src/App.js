import React from "react";
import "./App.css";
import json from "./adventure.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      situationId: 0
    };
  }

  gotoSituation(id) {
    this.setState({
      situationId: id
    });
  }

  render() {
    let situation = json.situations[this.state.situationId];
    return (
      <div className="retro">
        <h3>*** Die Mumie des Schreckens ***</h3>
        {/* the situations description text */}
        <Situation
          situation={situation}
          onClick={goal => this.gotoSituation(goal)}
        />
      </div>
    );
  }
}

class Situation extends React.Component {
  getAction(situationId) {
    for (let i in json.situations) {
      if (json.situations[i].id === situationId) {
        return json.situations[i].action;
      }
    }
  }

  render() {
    let actions = [];
    for (const [index, value] of this.props.situation.goals.entries()) {
      let action = this.getAction(value);
      console.log(action);
      actions.push(
        <li key={index}>
          <Action onClick={() => this.props.onClick(value)} action={action} />
        </li>
      );
    }

    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.situation.text
          }}
        />
        <ul>{actions}</ul>
      </div>
    );
  }
}

function Action(props) {
  return <div onClick={goal => props.onClick(goal)}>{props.action}</div>;
}

export default App;
