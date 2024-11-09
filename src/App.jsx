import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [formData, setFormData] = useState({
    colorName: '',
    description: ''
  });
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    const isColorValid = formData.colorName.trim().length >= 3 && formData.colorName.charAt(0) !== ' ';
    const isDescriptionValid = formData.description.length >= 6;
    
    if (!isColorValid || !isDescriptionValid) {
      setError(true);
      setShowCard(false);
      return;
    }
    
    setError(false);
    setShowCard(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(false);
  };

  return (
    <div className={styles.container}>
      <h1>Elige un color</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="colorName"
          value={formData.colorName}
          onChange={handleInputChange}
          placeholder="Ingresa tu nombre"
          className={styles.input}
        />
        
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Ingresa tu color favorito (formato HE)"
          className={styles.input}
        />
        
        <button type="submit" className={styles.button}>
          ENVIAR
        </button>
      </form>

      {error && (
        <p className={styles.error}>
          Por favor chequea que la información sea correcta.
        </p>
      )}

      {showCard && (
        <div className={styles.card}>
          <h2>¡Hola {formData.colorName}!</h2>
          <p>Sabemos que tu color favorito es:</p>
          <div 
            className={styles.colorDisplay}
            style={{ backgroundColor: formData.description }}
          >
            {formData.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;