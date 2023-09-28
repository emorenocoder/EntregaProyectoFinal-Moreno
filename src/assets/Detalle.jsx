import React from 'react'
import { useParams } from 'react-router'
import ItemList from './components/Items/ItemList'

const Detalle = () => {
    const {id} = useParams()

  return (
    <div>
      <ItemList id={id}/>
    </div>
  )
}

export default Detalle
