// Certifications.js

import React from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Developer',
      year: 2024,
      link: 'https://www.credly.com/badges/970f0780-0e7b-4f43-a349-b63793c10837/public_url',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      year: 2022,
      link: 'https://www.credly.com/badges/eaffeb09-686a-4750-a4a9-06c6d4a00d89/public_url',
    },
  ];

  return (
    <div className="certifications-list">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index} className="certification-item">
            <p className="certification-title">{certification.title}</p>
            <p className="certification-year">{certification.year}</p>
            <a href={certification.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
