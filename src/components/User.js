// function Tweet(props) {
//     return (
//       <div className="tweet">
//         <ProfileImage image={props.tweet.user.image} />
  
//         <div className="body">
//           <div className="top">
            
//             <User userData={props.tweet.user} />



function User(props){
    return (
        <span className="user">
            <span className="name">{props.userData.name}</span>
            <span className="handle">@{props.userdata.handle}</span>
        </span>
    );
};


export default User;
