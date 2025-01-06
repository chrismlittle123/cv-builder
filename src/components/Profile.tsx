import React from 'react';

interface ProfileProps {
  name: string;
  title: string;
  email: string;
  phone: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title, email, phone }) => {
  return (
    <div className="profile">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="text-xl text-gray-600">{title}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Profile; 