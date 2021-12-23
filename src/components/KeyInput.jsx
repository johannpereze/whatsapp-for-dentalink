import React, { useState } from 'react'

export default function KeyInput() {

    const [secretKeys, setSecretKeys] = useState({
        dentalinkKey: '',
        b2ChatToken: '',
        b2ChatExpiration: '0',
    })

    const { dentalinkKey } = secretKeys

    const handleInputChange = (e) => {
        const { value } = e.target
        setSecretKeys({ dentalinkKey: value })
    }

    const saveDentalinkKey = (e) => {
        e.preventDefault()
        console.log(dentalinkKey);
        console.log("Ocultamos componente");
    }

    return (
        <div>
            <h3>Iniciar Sesión</h3>
            <form action="">
                <div >
                    <div >
                        <span ><i >key_icon</i></span>
                        <input
                            type="password"
                            name="dentalinkKey"
                            id="dentalinkKey"
                            value={dentalinkKey}
                            onChange={handleInputChange}
                            placeholder="Contraseña de Dentalink..."
                        />
                    </div>
                    <button type="submit" label="Siguiente" onClick={saveDentalinkKey}>Siguiente</button>
                </div>
            </form>
        </div>
    )
}