import React from 'react';
import '../Componentes/App.css'; 

const socialLinks = [
  { name: 'Facebook', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samira-ferreira-887a081a0/' },
  { name: 'GitHub', url: 'https://github.com/samiferreira' }
];

function LinkList() {
  return (
    <div className="social">
      {socialLinks.map((link, index) => (
        <div className="social-box" key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
        </div>
      ))}
    </div>
  );
}

export default LinkList;
