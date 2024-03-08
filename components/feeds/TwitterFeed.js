import React from 'react';

const TwitterFeed = () => {
  
  const twitterEmbeddedLink = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/JUSTICEforNEETUG?src=hash&amp;ref_src=twsrc%5Etfw">#JUSTICEforNEETUG</a> Trends on Twitter: Students Demand NEET 2022 Postponement by 4 Weeks<a href="https://t.co/tDI3O6HmU0">https://t.co/tDI3O6HmU0</a></p>&mdash; CollegeDekho (@CollegeDekho) <a href="https://twitter.com/CollegeDekho/status/1538824002013364224?ref_src=twsrc%5Etfw">June 20, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'; // Replace with actual Twitter embedded link

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Twitter Feed</h2>
      
      <div dangerouslySetInnerHTML={{ __html: twitterEmbeddedLink }} />
    </div>
  );
};

export default TwitterFeed;
