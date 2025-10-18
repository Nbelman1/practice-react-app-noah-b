import ProfileCard from './ProfileCard.jsx';

const ProfileContainer = () => {

    // test data
    let userProfiles = [
        {
            "name": "Noah", 
            "age": 31,
            "bio": "Software engineer who enjoys metal music."
        },
        {
            "name": "Julia", 
            "age": 29,
            "bio": "Graphic designer who enjoys K-Pop music."
        }
    ];

    return (
        <div>
            {userProfiles.map((user, index) => 
                <ProfileCard
                    key={index}
                    name={user.name} 
                    age={user.age} 
                    bio={user.bio} 
                />)
            }
        </div>
    );

}

export default ProfileContainer;