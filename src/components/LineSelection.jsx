import React from 'react'

export default function LineSelection() {
    return (
        <div>
            <h3>Selección de línea</h3>
            <form action="">
                <div >
                    <div ></div>
                    <div >
                        <select>
                            placeholder="Selecciona una línea"
                            <option value="whatsapp1">whatsapp1</option>
                            <option value="whatsapp2">whatsapp2</option>
                        </select>
                    </div>
                    <div >
                        <span>note icon</span>
                        <input
                            type="text"
                            id="campaignNote"
                            name="campaignNote"
                            placeholder="Agrega aquí una nota de envío"
                        />
                    </div>
                    <button type="submit">Siguiente</button>
                </div>
            </form>

        </div>
    )
}
