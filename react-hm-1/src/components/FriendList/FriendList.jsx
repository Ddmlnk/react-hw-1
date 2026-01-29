import FriendListItem from '../FriendListItem/FriendListItem.jsx'
import css from './FriendList.module.css'

export default function FriendList ({friendsData}){
    console.log(friendsData)
    return (
        
        <ul className={css.usersList}>
            {friendsData.map((friend) =>(
                <li key={friend.id} className={css.usersListItem}>
                    <FriendListItem itemData ={friend}></FriendListItem>
                </li>
            ))}
        </ul>
        
    )
}