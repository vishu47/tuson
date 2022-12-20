import React from 'react'
import {useNavigate} from 'react-router-dom'
import {
  IngestionWidget1,
  IngestionWidget2,
  IngestionWidget3,
  IngestionWidget4,
  IngestionWidget5,
} from 'sr/partials/widgets/widgets-repository'
import {IngestionWidget6} from 'sr/partials/widgets/widgets-repository/ingestion/IngestionWidget6'

// type Props = {}
const widgets = {
  ingestion: [5, 4, 6],
  manipulation: [],
  output: [],
}

export default function Ingestion() {
  const navigate = useNavigate()
  const SelectImage = (e: any) => {
    e.preventDefault()
    setTimeout(() => {
      navigate('/engine/upload-list')
    }, 200)
  }
  return (
    <>
      {widgets.ingestion.includes(1) ? <IngestionWidget1 selectImage={SelectImage} /> : ''}
      {widgets.ingestion.includes(2) ? <IngestionWidget2 /> : ''}
      {widgets.ingestion.includes(3) ? <IngestionWidget3 /> : ''}
      {widgets.ingestion.includes(4) ? <IngestionWidget4 /> : ''}
      {widgets.ingestion.includes(5) ? <IngestionWidget5 /> : ''}
      {widgets.ingestion.includes(6) ? <IngestionWidget6 /> : ''}
    </>
  )
}
