import InstagramFeed from "../components/feeds/InstagramFeed";
import TwitterFeed from "../components/feeds/TwitterFeed";
import YouTubeFeed from "../components/feeds/YoutubeFeed";
//import InstagramFeed from "../components/feeds/InstagramFeed";


export default function SocialFeed(){
    return(
        <div>
       <InstagramFeed />
       <TwitterFeed />
       <YouTubeFeed />
       </div>
    )

}