const ProfileCard = ({name, age, bio}) => {

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Bio: {bio}</h3>
        </div>
    )
}

export default ProfileCard;