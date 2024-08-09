import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import homeBar from '../assets/home-bar.png';
import ellipse from '../assets/ellipse.png';
import avatarHomepage from '../assets/avatar-homepage.png';
import arbre from '../assets/arbre.png';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection
  const [searchTerm, setSearchTerm] = useState(''); // État pour stocker le terme de recherche

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const themes = ['développementweb', 'uxui', 'css', 'html']; // Liste des thèmes disponibles

    if (themes.includes(searchTerm.toLowerCase())) {
      navigate(`/quiz?theme=${searchTerm.toLowerCase()}`); // Redirige vers la page Quiz avec le thème en paramètre
    } else {
      alert('Thème non trouvé');
    }
  };

  const handleStartQuiz = () => {
    navigate('/quiz'); // Redirige vers la page Quiz
  };

  return (
    <div className={styles.home}>
      <div className={styles.UpContainer}>
        <h1>QuizTech</h1>
        <h2>Testez vos connaissances Tech et développement web</h2>
      </div>
      <img src={arbre} alt="Arbre" className={styles.arbre} />
      <div className={styles.ellipseContainer}>
        <img src={ellipse} alt="Ellipse" className={styles.ellipse} />
        <img src={avatarHomepage} alt="Avatar Homepage" className={styles['avatar-homepage']} />
      </div>
      <div className={styles.searchAndButtonContainer}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Rechercher un Quiz" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <button className={styles.validationButton} onClick={handleSearchSubmit}>GO</button>
        </div>
        <button className={styles.startQuizButton} onClick={handleStartQuiz}>
          Lancer un Quiz
        </button>
      </div>
      <img src={homeBar} alt="Home Bar" className={styles['home-bar']} />
    </div>
  );
};

export default Home;
