import React from 'react';

const UserCard = ({user}) => {
    
    return (
        <div className='userContainer'>
            <img className='userAvatar' src={`${user.avatar_url}`} alt='user avatar'></img>
            <h3 className='username'>Username: {user.username}</h3>
            <h4 className='usersName'>IRL Name: {user.name}</h4>
        </div>
    );
};

export default UserCard;