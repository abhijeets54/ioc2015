import React, { useEffect } from 'react';

const June2024Newsletter = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="p-8 bg-white shadow-md rounded">
      <h2 className="text-center text-3xl font-bold mb-6">June 2024 Newsletter</h2>
      <p className="mb-4">Usaari Free Evening School...</p>
      <p>
        Detailed content goes here. You can include Instagram posts and reels by embedding them directly using Instagram's embed code or using an Instagram API integration.
      </p>
      <div
        className="instagram-post"
        dangerouslySetInnerHTML={{ __html: `
          <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C9h0ywnNt-C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="12"></blockquote>
        ` }}
      />
    </div>
  );
};

export default June2024Newsletter;
