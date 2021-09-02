import React from 'react'
import { Biller } from '../../components/Biller/Biller'
import { NavbarComp } from '../../components/Navbars/NavbarComp'

export const Home = () => {
    return (
        <div className='home'>
            <NavbarComp /> 
            <Biller />
        </div>
    )
}
