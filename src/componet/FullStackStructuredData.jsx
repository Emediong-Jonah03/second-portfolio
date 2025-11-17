export const FullStackStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Emediong Jonah",
    "jobTitle": "Full-Stack Developer",
    "description": "Full-Stack Developer specializing in Python, MongoDB, React, and WordPress development",
    "url": "https://emediong.dev",
    "sameAs": [
      "https://github.com/Emediong-Jonah03",
      "https://linkedin.com/in/emediong-jonah-68a093329",
      "https://twitter.com/EmediongJ15081"
    ],
    "knowsAbout": [
      "Python Programming",
      "MongoDB Database",
      "React.js Development",
      "WordPress Development",
      "Full-Stack Development",
      "REST API Development",
      "Web Application Development",
      "JavaScript Programming",
      "Backend Development",
      "Frontend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "skills": "Python, MongoDB, React, WordPress, JavaScript, REST APIs"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};