//IT.2 **** TODO LO COMENTADO ES PASADO A LOS VALORES DE PROVIENEN DE LA TWEET PROPIEDAD//

// function Tweet() {

//IT.4 ***** DESPUES DE COMENTADO IT.2

import ProfileImage from "../components/ProfileImage";
import User from "../components/User";
import Timestamp from "../components/Timestamp";
import Message from "../components/Message"
import Actions from "../components/Actions";

function Tweet(props) {
  
  // const { user, timestamp, message } = props.tweet;

  return (

    <div className="tweet">
      {/* <img

        src="https://i.imgur.com/9yw1Fyw.jpg"
        
        src={user.image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user"> */}

          {/* <span className="name">Ironhack</span> */}
          {/* <span className="name">{user.name}</span> */}
          {/* <span className="handle">@ironhack</span> */}
          {/* <span className="handle">@{user.handle}</span> */}

          {/* </span> */}

          <User userData={props.tweet.user} />

          {/* <span className="timestamp">Nov 30, 2020</span> */}
          {/* <span className="timestamp">{timestamp}</span> */}
          <Timestamp time={props.tweet.timestamp}/>
        </div>

        {/* <p className="message"> */}
          {/* On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀 */}
        {/* </p> */}
          <Message message={props.tweet.message}/>


        {/* <div className="actions"> */}
          {/* Font Awesome icons */}
          {/* <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div> */}

        <Actions/>

      </div>

      <i class="fas fa-ellipsis-h"></i>
      
    </div>
  );
}

export default Tweet;
