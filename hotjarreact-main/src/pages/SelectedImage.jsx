import React from 'react';
import { useParams } from 'react-router-dom';
import { imagensGaleria } from '../data/imagensGaleria';
import Header from '../components/Header';

function SelectedImage() {
  const { id } = useParams();
  const image = imagensGaleria.find((img) => img.id === parseInt(id));

  if (!image) {
    return <div>Imagem não encontrada</div>;
  }

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <h1 style={styles.title}>{image.title}</h1>
        <div style={styles.imageWrapper}>
          <img src={image.url} alt={image.title} style={styles.image} />
        </div>
        <div style={styles.descriptionWrapper}>
          <p style={styles.description}>{image.description}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  imageWrapper: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  descriptionWrapper: {
    marginTop: '20px',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555',
  },

  // Estilos adicionais para responsividade
  '@media (max-width: 600px)': {
    title: {
      fontSize: '2rem', // Reduz o tamanho da fonte em telas menores
    },
    description: {
      fontSize: '1rem', // Reduz o tamanho da fonte da descrição
    },
  },
};

export default SelectedImage;
