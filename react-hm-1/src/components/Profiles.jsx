import Profile from './Profile/Profile';

export default function Profiles({usersAppProps}){
    return(
        <ul>
            {usersAppProps.map((user) =>(<li key={user.tag}>
                    <Profile userdata={user}></Profile>
                </li> )
            )}
        </ul>
    )
}

            // <ul>
            //  {usersAppProps.map((user) => (
            //  <li key={user.tag}>
            // <Profile userdata={user} />
            // </li>