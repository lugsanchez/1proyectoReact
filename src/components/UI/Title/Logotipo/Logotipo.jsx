import React from 'react';

export const Logotipo = ({means, alternativeText, estiloLogo}) => {
  return (
      <img className={estiloLogo} src={means} alt={alternativeText} />
  )
}
