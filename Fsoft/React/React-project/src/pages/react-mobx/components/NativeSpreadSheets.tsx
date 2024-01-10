import { table } from "console";
import React from "react";
import MyObserable from "../store/spreadSheets.store";

const b = new MyObserable(1);
const c = new MyObserable(1);
const d = new MyObserable(1);
const a = MyObserable.sum(b, c, d);

class SpreadSheets extends React.Component {
  componentDidMount(): void {
    a.subscribe(() => this.setState({}));
  }

  handleChange = (obs: MyObserable) => (event: any) => {
    obs.value = parseInt(event.target.textContent);
  };
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Col</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>b</th>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.handleChange(b)}
            >
              {b.value}
            </td>
          </tr>
          <tr>
            <th>c</th>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.handleChange(c)}
            >
              {c.value}
            </td>
          </tr>
          <tr>
            <th>d</th>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.handleChange(d)}
            >
              {d.value}
            </td>
          </tr>
          <tr>
            <th>a</th>
            <td>{a.value}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SpreadSheets;