import React from "react";

const Input = ({cell, changeCell}) => {
  return (
    <input type="text" 
    onChange={(e)=>{
      changeCell(e.target)
    }}
    value={cell}
    placeholder="홀수만 입력 가능합니다." />
  );
}

export default Input
