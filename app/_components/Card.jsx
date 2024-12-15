import styles from './styles/Card.module.css';

const Card = ({ title, description, gif, media, link, competences }) => {
  return (
    <div className={styles.card}>
      {/* Affiche le GIF si disponible */}
      {gif && <img src={gif} alt={`GIF de ${title}`} className={styles.cardGif} />}
      
      {/* Affiche l'image media si disponible */}
      {media && (
        <img
          src={media}
          alt={`Image de ${title}`}
          className={styles.cardMedia}
        />
      )}
      
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardCompetences}>{competences}</p>
      
      {/* Ajout d'un bouton de lien */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          Voir plus
        </a>
      )}
    </div>
  );
};

export default Card;
