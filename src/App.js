import React, { Component } from 'react';
import TableItem from "./components/TableJs";
import Input from "./components/Input";

class App extends Component {
  state = {
    cell : 0,
    table : [[]]
  }

  changeCell = ({value}) => {
    this.setState({
      cell : value,
      table : this.makeTable(value)
    })
  }

  makeTable = (cell) => {
    let tempTable = [];
    let idx = 0;
    for (let x = 0; x < cell; x++) {
      tempTable.push([]);
      for (let y = 0; y < cell; y++) {
        tempTable[x].push(idx++);
      }
    }
    return tempTable;
  }

  handelStart = () => {
    if(this.state.cell % 2 === 1) {
      
    } else {
        alert('짝수는 실행할수 없습니다.');
    }
  }

  render() {
    const alertMessage = 
          !!this.state.cell && this.state.cell % 2 === 0
                ? <div>짝수는 실행할 수 없습니다.</div>
                : null;
    return (
      <>
        <h1>홀수 마방진 [{this.state.cell}]</h1>

        <Input 
          changeCell={ this.changeCell }
          cell={this.state.cell} />

        <input onClick={this.handelStart} type="button" value="시작"/>

        { alertMessage }


        <TableItem 
          cell={this.state.cell}
          tableItem={this.state.table} />
      </>
    );
  }
}

export default App;
