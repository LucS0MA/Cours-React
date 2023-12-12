import { useState } from 'react'

const NavBar = ({handlePrevClick, handleNextClick}) => {
    return (
        <div>
            <button onClick={handlePrevClick}>Précédent</button>
            <button onClick={handleNextClick}>Suivant</button>
        </div>
    )
}

export default NavBar;