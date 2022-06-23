import React from 'react'

export const Anchor = ({textAnchor, estiloAncla}) => {
  return (
    <a href='#' className={estiloAncla}>{textAnchor}</a>
  )
}
