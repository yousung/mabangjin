import React from "react";
import PropTypes from "prop-types";

const TableJs = ({tableItem, cell}) => {
  const makeTable = tableItem.length 
      ? tableItem.map((trItem, idx)=>{
          return (<tr key={idx}>
            {
              !!trItem.length 
              ? trItem.map((td, trIdx)=>{
                  return <td key={trIdx}>{td}</td>
                })
              : null
            }
          </tr>);
      })
      : null;
  return (
      <>
        <table>
          <tbody>
            {makeTable}
          </tbody>
        </table>
      </>
  );

}
TableJs.propTypes = {
  table : PropTypes.array
}


export default TableJs;


