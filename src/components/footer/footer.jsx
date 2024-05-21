import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './footer.css'
export const Footer = () => {
  return (
    <section className='footer'> 
<h2>¡Queremos estar en contacto contigo! Síganos en las redes sociales para que podamos mantenernos en contacto.</h2>
    <div className='icon--Social--red'>
      <FaLinkedin size={40} color='white' />
      <FaGithub size={40} color='white' />
      <FaInstagram size={40} color='white' />
      <FaEnvelope size={40} color='white' />
    </div>
    </section>

  
  )
}
