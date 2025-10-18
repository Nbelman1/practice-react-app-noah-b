const ProfileCard = ({name, age, bio}) => {

    return (
        <div className="profile-card">
            <h3 className="user-name">Name: {name}</h3>
            <h3 className="user-age">Age: {age}</h3>
            <h3 className="user-bio">Bio: {bio}</h3>
        </div>
    )
}

export default ProfileCard;