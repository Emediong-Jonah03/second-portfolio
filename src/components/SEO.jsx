import { useEffect } from 'react';

const SEO = ({ 
  title = "Emediong Jonah | Software Developer & AI Integration Specialist",
  description = "Emediong Jonah is a Software Developer specializing in Full-Stack Web Engineering, AI Integration, and building scalable, secure applications. View my portfolio and projects.",
  image = "/src/assets/profile.png" // Ensure this path is correct after deployment
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
    
    // Update Open Graph tags (For LinkedIn/WhatsApp/Facebook)
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:type': 'website',
      'og:url': window.location.href
    };
    
    // Update Twitter Tags (Crucial for X/Twitter previews)
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image
    };
    
    const allTags = { ...ogTags, ...twitterTags };
    
    Object.entries(allTags).forEach(([key, content]) => {
      let metaTag = key.startsWith('og:') 
        ? document.querySelector(`meta[property="${key}"]`)
        : document.querySelector(`meta[name="${key}"]`);

      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (key.startsWith('og:')) {
          metaTag.setAttribute('property', key);
        } else {
          metaTag.setAttribute('name', key);
        }
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });
    
  }, [title, description, image]);

  return null;
};

export default SEO;