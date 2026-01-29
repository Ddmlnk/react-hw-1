import css from './Profile.module.css'

export default function Profile ({
    userdata: {
        username, 
        tag, 
        location, 
        avatar,
        stats:{
            followers,
            views,
            likes
        }
    }
}){
    return (
        <>
            <div>
                <img className='img' src={avatar} alt="" />
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </>
        
    );
}