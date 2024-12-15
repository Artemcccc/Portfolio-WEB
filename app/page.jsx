'use client';

import Navbar from "./_components/Navbar";
import Section from "./_components/Section";
import Card from "./_components/Card";
import styles from "./_components/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />

      {/* Accueil */}
       <Section id="header" className={styles.section}>
        <h1 className={styles.titlePrimary}>Bienvenue sur Mon Portfolio</h1>
        <p className={styles.textParagraph}>Artem Kharseev</p>
        
      </Section>
      {/* À Propos */}
      <Section id="about" className={styles.section}>
        <h2 className={styles.titleSecondary}>À Propos</h2>
        <img
          src="https://utfs.io/f/BLL7xWNOFxusvTK2wmML2oY67tH5Og8lmSFVndsCaDhPbJBk"
          alt="Finissant"
          className={styles.finissantImage}
        />
        <p className={styles.textParagraph}>
          Bonjour, je m'appelle Artem, étudiant au Cégep de Saint-Jérôme en
          intégration multimédia. 
        </p>
        <p className={styles.textParagraph}>
        Je suis passionné par le développement de
        jeux vidéo et le développement web.
        </p>
        <p className={styles.textParagraph}>
          J'ai travaillé sur plusieurs projets intégrant des outils comme
          Blender, Photoshop, Unity et divers frameworks web comme vue.js et next.js.
        </p>
        <p className={styles.textParagraph}>
          Mes compétences incluent la création d'assets 3D/2D, le développement
          frontend et la modélisation de jeux vidéo.
        </p>
        <p className={styles.textParagraph}>
          Mon objectif est de concevoir des expériences numériques immersives
          et interactives.
        </p>
        <p className={styles.textParagraph}>
          Languages connues: C#, javascript, HTML, CSS, GDScript et Python
        </p>
        <a href="https://utfs.io/f/BLL7xWNOFxusRv7mv1XqZNI7g39uLOHYoeij2Vlw468amcAb" className={styles.downloadButton} download>
          Télécharger mon CV
        </a>
      </Section>

      {/* Projets */}
      <Section id="projects" className={styles.section}>
  <h2 className={styles.titleSecondary}>Projets</h2>
  <div className={styles.cardGrid}>
    <Card
      title="Sir leRoi"
      description="Asset en pixel art pour un jeu vidéo. Compétences développées : création de sprites, animation pixel art, optimisation visuelle."
      competences="Réalisé avec Aseprite"
      gif="https://utfs.io/f/BLL7xWNOFxusBGxnx7sNOFxusySAQM6G8oqmk9UBiHYvbV1I"
    />
    <Card
      title="3D Bedroom"
      description="Modélisation d'une chambre en 3D. Compétences développées : modélisation 3D, gestion de l'éclairage, texturing et composition de scène."
      competences="Réalisé avec Blender"
      media="https://utfs.io/f/BLL7xWNOFxus8Xh9Qy502oAadMvUPf9kHJ1CTpmVjwcDKibB"
    />
    <Card
      title="C'est juste un boss chat"
      description="Modèle 3D de personnage réalisé dans Blender. Compétences développées : sculpture 3D, rigging, texturing, et gestion des proportions anatomiques."
      competences="Réalisé avec Blender"
      media="https://utfs.io/f/BLL7xWNOFxusGF56VVShsOfMPedUuj4AkX16CZYBFHgazpNw"
    />
    <Card
      title="Marteau 3D"
      description="Création d'un marteau 3D dans Blender. Compétences développées : modélisation hard surface, texturing métallique, et rendu réaliste."
      competences="Réalisé avec Blender"
      media="https://utfs.io/f/BLL7xWNOFxusVmM43Kcy2HMjdcNt1uTbG5iwOWJVfDmzQL8R"
    />
    <Card
      title="Donut 3D"
      description="Création d'un donut 3D dans Blender. Compétences développées : modélisation de formes organiques, création de shaders simples, et rendu avec cycles."
      competences="Réalisé avec Blender"
      media="https://utfs.io/f/BLL7xWNOFxusT2Sw65I7FZAWfNsn10zKExa3y2LhbiXQjpOg"
    />
  </div>
</Section>


      {/* Projets Web */}
      <Section id="web-projets" className={styles.webSection}>
  <h2 className={styles.titleSecondary}>Projets Web</h2>
  <p className={styles.textParagraph}>
    Voici quelques captures d'écran de mon projet web récent. J'ai développé le front-end de ce site avec Next.js, en mettant l'accent sur une architecture modulaire, une expérience utilisateur fluide et une gestion efficace des routes.
  </p>
  <div className={styles.cardGrid}>
    <div className={styles.card}>
      <img src="https://utfs.io/f/BLL7xWNOFxusuRzqgP3qK5YGgDoMjhUpwIdQlAbVL9FsCmxP" alt="Page d'accueil avec navigation" />
      <p className={styles.cardDescription}>
        Page d'accueil avec une barre de navigation interactive. Compétences développées : création de composants réutilisables, gestion du layout, et design responsif.
      </p>
    </div>
    <div className={styles.card}>
      <img src="https://utfs.io/f/BLL7xWNOFxus80TuVW502oAadMvUPf9kHJ1CTpmVjwcDKibB" alt="Page d'accueil avec sections" />
      <p className={styles.cardDescription}>
        Suite de la page d'accueil avec différentes sections organisées. Compétences développées : structuration des sections, utilisation de flexbox/grid, et optimisation visuelle.
      </p>
    </div>
    <div className={styles.card}>
      <img src="https://utfs.io/f/BLL7xWNOFxusW87epCgN3YP2lHezB1kyJnTcwQb6EWMghxs9" alt="Page de liste de questionnaires" />
      <p className={styles.cardDescription}>
        Page affichant une liste de questionnaires disponibles. Compétences développées : gestion d'états, intégration d'API pour récupérer et afficher les données, et design clair des listes.
      </p>
    </div>
    <div className={styles.card}>
      <img src="https://utfs.io/f/BLL7xWNOFxusvYVTbNML2oY67tH5Og8lmSFVndsCaDhPbJBk" alt="Page de création de questionnaire" />
      <p className={styles.cardDescription}>
        Page dédiée à la création de nouveaux questionnaires. Compétences développées : gestion des formulaires, validation des champs, et logique d'ajout dynamique.
      </p>
    </div>
    <div className={styles.card}>
      <img src="https://utfs.io/f/BLL7xWNOFxusGeIwXzShsOfMPedUuj4AkX16CZYBFHgazpNw" alt="Page de participation à un questionnaire" />
      <p className={styles.cardDescription}>
        Page permettant aux utilisateurs de rejoindre un questionnaire. Compétences développées : routage dynamique, gestion des entrées utilisateur, et intégration d'API.
      </p>
    </div>
  </div>
</Section>



      {/* Assets */}
      <Section id="game-assets" className={styles.section}>
        <h2 className={styles.titleSecondary}>Assets</h2>
        <Card
          title="Fiche des assets"
          description="Fiche visuelle des assets pour le jeu Baba et Le Bosquet Hanté"
          competences="Réalisé avec Photoshop et Animator"
          media="https://utfs.io/f/BLL7xWNOFxusdklJ2rp1BXc0hQDSsiUY7jyI6pvmgFG8AdJk"
        />
      </Section>

      {/* Chevalier */}
      <Section id="game-knight" className={styles.section}>
  <h2 className={styles.titleSecondary}>Chevalier le Pois et les Abysses Pollués</h2>
  
  <div className={styles.videoWrapper}>
    <video controls className={styles.video}>
      <source src="https://utfs.io/f/BLL7xWNOFxusoV8908eriHgCRsUDhZPwa9FxIbfpOY4eLnz1" type="video/mp4" />
      Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
  </div>
  
  <div className={styles.textWrapper}>
    <p className={styles.description}>
      J'ai réalisé l'ensemble des visuels pour ce jeu, notamment les assets 3D, les interfaces utilisateur (UI) animées et les textures. 
      Tous les éléments graphiques ont été conçus en utilisant Blender, Photoshop et Substance Designer, et intégrés dans Unity pour donner vie au jeu.
    </p>
    <p className={styles.description}>
      Le jeu se déroule dans un monde sombre et pollué, où le joueur incarne un chevalier pois qui doit affronter divers dangers. 
      J'ai conçu l'environnement et les personnages pour refléter cette atmosphère unique.
    </p>
  </div>
  
  <div className={styles.skillsSection}>
    <p className={styles.skillsTitle}>Compétences développées :</p>
    <ul className={styles.skillsList}>
      <li>
        <strong>Blender</strong> : Création d'assets 3D détaillés, modélisation d'environnements et de personnages, texturing et UV mapping.
      </li>
      <li>
        <strong>Photoshop</strong> : Conception et animation des interfaces utilisateur (UI) pour une expérience utilisateur immersive.
      </li>
      <li>
        <strong>Substance Designer</strong> : Création de textures procédurales réalistes adaptées aux environnements et personnages du jeu.
      </li>
      <li>
        <strong>Unity</strong> : Intégration des assets et des animations dans le moteur de jeu, optimisation des visuels et gestion des shaders.
      </li>
      <li>
        Collaboration interdisciplinaire : Bien que j'étais le seul artiste, j'ai travaillé efficacement avec les développeurs pour intégrer le visuel au gameplay.
      </li>
    </ul>
  </div>
</Section>



      {/* Contact */}
      <Section id="contact" className={styles.section}>
        <h2 className={styles.titleSecondary}>Contact</h2>
        <p className={styles.textParagraph}>
          Contactez-moi pour des collaborations ou des questions !
        </p>
        <h3 className={styles.titleSecondary}>Email</h3>
        <p className={styles.textParagraph}>artemkharseev737@gmail.com</p>
        <h3 className={styles.titleSecondary}>LinkedIn</h3>
        <p className={styles.textParagraph}>
          <a href="https://www.linkedin.com/in/artem-kharseev">www.linkedin.com/in/artem-kharseev</a>
        </p>
        <h3 className={styles.titleSecondary}>ArtStation</h3>
        <p className={styles.textParagraph}>
          <a href="https://www.artstation.com/artemkharseev">https://www.artstation.com/artemkharseev</a>
        </p>
      </Section>
    </div>
  );
}
