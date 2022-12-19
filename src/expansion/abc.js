import React from 'react'
import data from "./data.json"

export const abc = () => {
  return (
    <div>{data.map((item)=>(
            {item.id}
        ))
    }
    </div>
  )
}
