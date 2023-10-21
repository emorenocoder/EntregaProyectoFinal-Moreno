import React from 'react'
import { useParams } from 'react-router'
import CardItem from '../components/Items/CardItem'

const Detalle = () => {
    const {id} = useParams()

  return (
    <div>
       <CardItem id={id}/>
    </div>
  )
}

export default Detalle
