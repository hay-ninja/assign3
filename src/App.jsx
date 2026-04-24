import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

function Square({value}) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    </>
  )
}
