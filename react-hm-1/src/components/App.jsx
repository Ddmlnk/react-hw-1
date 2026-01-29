import Profiles from './Profiles';
import userData from '../userData.json'
import friends from '../friends.json'
import FriendsList from './FriendList/FriendList.jsx'
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx'
import transactions from '../transactions.json'

export default function App() {
  
  return (
    <div>
      {/* <Profiles usersAppProps ={userData}></Profiles> */}
      {/* <FriendsList friendsData={friends}></FriendsList> */}
      <TransactionHistory items={transactions}></TransactionHistory>

    </div>
  )
}


