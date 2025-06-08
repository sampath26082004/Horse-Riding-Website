import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '##2f2f2f',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <p>Designed And Developed By Sampath@26</p>
      <div style={{ marginTop: '10px' }}>
        <a
          href="https://github.com/sampath26082004"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px' }}
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
            alt="GitHub"
            width="30"
            height="30"
            style={{ filter: 'invert(1)' }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/g-sampath-305434260/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px' }}
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
            alt="LinkedIn"
            width="30"
            height="30"
            style={{ filter: 'invert(1)' }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
