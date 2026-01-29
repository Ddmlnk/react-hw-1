import css from './FriendListItem.module.css'

export default function FriendListItem ({
    itemData: {
        avatar, 
        name, 
        isOnline
    }
}){
    

    return (
        <div className={css.userWrapper}>
        <img src={avatar} alt="Avatar" className={css.userAvatar} />
        <p className={css.userName}>{name}</p>
        <p className={css.userStatus}>{isOnline ? "true" : "false"}</p>
        </div>
    )
}