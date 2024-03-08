import React from 'react';

const YouTubeFeed = () => {
  
  const youtubeEmbeddedLink = '<iframe width="560" height="315" src="https://www.youtube.com/embed/GE-WAN4QN1U?si=pUFr59hVb6xyv6h6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; // Replace with actual YouTube embedded link

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">YouTube Feed</h2>
      
      <div dangerouslySetInnerHTML={{ __html: youtubeEmbeddedLink }} />
    </div>
  );
};

export default YouTubeFeed;
