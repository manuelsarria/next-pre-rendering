import React from 'react'

const UserList = ({ users }) => {
  return (
    <>
      <h1>User list</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  )
};

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()

    return {
        props: {
            users: data,
        },
    }
}
