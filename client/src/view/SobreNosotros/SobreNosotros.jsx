import React from 'react'
import PageTemplate from '../../template/PageTemplate'
import procedimientos from '../../assets/procedimientos.jpg'
import styles from '../SobreNosotros/SobreNosotros.module.css'

const SobreNosotros = () => {
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
                <div className='container mb-5'>
                    <h1 className='text-center my-5'>Sobre Nosotros</h1>
                    <hr className='border border-3 border-success opacity-50'/>
                    <p className='fs-4'>Clínica veterinaria Pepita, nace en febrero de 2010, con el objetivo de formar un centro de especialidades, razón por la cual con mucho esfuerzo y pasión por nuestro trabajo hemos implementado progresivamente nuestra clínica tanto con la mejor tecnologia como con un valioso equipo humano de profesionales, médicos veterinarios y técnicos que participan tanto en labores administrativas, diagnósticas como en soporte quirúrgico y hospitalario.</p>
                </div>
                <div className="d-flex container border rounded-5 bg-success" >
                    <img src={procedimientos} className={`${styles.imgs} col-1`} alt="..."/>
                    <div className="d-flex flex-column justify-content-center mt-5 pt-5 px-5">
                        <h3 className="text-white">Algunos de los procedimeintos realizados en nuestra institucion son:</h3>
                        <ul className='text-white ps-5 mt-3'>
                            <li><p>Toma de Examenes de orina</p></li>
                            <li><p>Toma de Examenes de sangre</p></li>
                            <li><p>Radiografias</p></li>
                            <li><p>Baño y limpieza general</p></li>
                        </ul>
                    </div>
                </div>
            </PageTemplate>
        </div>
    )
}

export default SobreNosotros