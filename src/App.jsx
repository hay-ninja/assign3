import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const { Badge, Button, Card } = ReactBootstrap

export default function Square() {
  return (
    <>
    <div className="board-row">
      <button classname="square">1</button>
      <button classname="square">2</button>
      <button classname="square">3</button>
    </div>
    <div className="board-row">
      <button classname="square">4</button>
      <button classname="square">5</button>
      <button classname="square">6</button>
    </div>
    <div className="board-row">
      <button classname="square">7</button>
      <button classname="square">8</button>
      <button classname="square">9</button>
    </div>
    </>
  )
}
