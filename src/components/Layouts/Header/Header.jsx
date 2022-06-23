import React from 'react'
import {Logotipo } from '../../UI/Title//Logotipo/Logotipo.jsx';
import { NavegacionInicio } from '../../UI/Title/NavegacionInicio/NavegacionInicio';
import image from '../../../images/logo.jpg';

export const Header = () => {
  return (
    <header>
        <Logotipo estiloLogo="logo" means={image} alternativeText="logo Empresa"/>
        <NavegacionInicio/>
    </header>
  )
}
