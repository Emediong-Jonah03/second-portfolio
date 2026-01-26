// components/SEO.jsx
import { useEffect } from 'react';

const SEO = ({ 
  title = "Emediong Jonah - Softare Developer Portfolio",
  description = "Software Developer specializing in building scalable secure user friendly applications and let's work together.",
  image = "/src/assets/profile.png"
}) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Update Open Graph tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:type': 'website',
      'og:url': window.location.href
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });
    
  }, [title, description, image]);

  return null;
};

export default SEO;