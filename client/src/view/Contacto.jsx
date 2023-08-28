import React from 'react'
import PageTemplate from '../template/PageTemplate'

const Contacto = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------



// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------



// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <PageTemplate>
                <div className='container text-center mt-5'>
                    <h1>Contactenos</h1>
                    <hr className='border border-3 border-success opacity-50'/>
                </div>
                <div className='d-flex container mt-3  align-items-center flex-column'>
                    <div className='container d-flex justify-content-between align-items-center my-5 py-5 px-5'>
                        <div className='text-center text-white col-3 fs-3 bg-success border rounded-5 p-5 ms-5'>N° de Telefono: +569 97419179</div>
                        <div className='text-center text-white col-3 fs-4 bg-success border rounded-5 p-5 me-5'>Email: vetpepita@gmail.com</div>
                    </div>
                    <div className='container d-flex justify-content-between align-items-center px-5'>
                        <div className='text-center text-white col-3 fs-4 bg-success border rounded-5 p-5 ms-5'>Horarios de Atencion: Todos los dias desde 8am hasta 8pm</div>
                        <div className='text-center text-white col-3 fs-3 bg-success border rounded-5  p-5 me-5'>Nuestra Ubicacion: Pasaje Santa Marta #550</div>
                    </div>
                </div>
            </PageTemplate>
        </div>
    )
}

export default Contacto