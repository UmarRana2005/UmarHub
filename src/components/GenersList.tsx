import useGeners from '@/hooks/useGeners'
import React from 'react'

const GenersList = () => {
    const {geners} = useGeners()
  return (
    <>
    <ul>
        {geners.map(gener=><li key={gener.id}>{gener.name}</li>)}
    </ul>
    </>
  )
}

export default GenersList