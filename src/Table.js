import React from "react";
import "./styles.css";

class Table extends React.Component {
  setTable = ({ name, description }) => {
    if (this.props.name === null) return;
    return (
      <tbody style={{ textAlign: "left" }}>
        <tr className="Table">
          <td className="Table">{name}</td>
          <td className="Table">{description}</td>
        </tr>
      </tbody>
    );
  };

  render() {
    const data = this.props.data;
    return (
      <div style={{ marginLeft: "100px" }}>
        <h3>Items in Category: ({this.props.name})</h3>
        <table className="Table">
          <tbody style={{ textAlign: "center" }}>
            <tr className="Table">
              <th className="Table">Name</th>
              <th className="Table"> Description</th>
            </tr>
          </tbody>
          {data && data.map(this.setTable)}
        </table>
      </div>
    );
  }
}

export default Table;
