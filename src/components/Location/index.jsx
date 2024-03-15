import './styles.scss'

const Location = () => {
  return (
    <section className='location'>
      <h2>Área de atendimento</h2>
      <div className='container-map'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63188.98734484358!2d-34.97053614539993!3d-8.171318585727454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae6b4a0eaf51b%3A0x4aa267bcb0e37215!2sUPA%20-%20Unidade%20de%20Pronto%20Atendimento%20-%20Tipo%20III%20Barra%20de%20Jangada!5e0!3m2!1spt-BR!2sbr!4v1710459159156!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Location