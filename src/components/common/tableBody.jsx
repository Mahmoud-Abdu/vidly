import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";


class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item); //remember this
    //  console.log('item: ', item, 'column: ', column )
    // const tot = _.get(item, column.path);
    // console.log('tot',tot)
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
