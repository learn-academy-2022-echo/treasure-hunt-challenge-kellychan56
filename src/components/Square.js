import React, { Component } from 'react'

const Square = (props) => {

  const handleClick = () => {
    props.handleGamePlay(props.index)
  }
    return(
      <>
        <div className="square" onClick={handleClick}>{props.value}</div>

      </>
    )
  }

export default Square
