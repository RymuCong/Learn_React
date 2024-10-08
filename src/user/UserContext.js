import React, { useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {id: 1, name : "Nguyen Van A", email : "example1@gmail.com", role : "Admin"},
        {id: 2, name : "Nguyen Van B", email : "example2@gmail.com", role : "User"},
        {id: 3, name : "Nguyen Van C", email : "example3@gmail.com", role : "Admin"},
        {id: 4, name : "Nguyen Van D", email : "example4@gmail.com", role : "User"},
        {id: 5, name : "Nguyen Van E", email : "example5@gmail.com", role : "Admin"},
        {id: 6, name : "Nguyen Van F", email : "example6@gmail.com", role : "User"},
        {id: 7, name : "Nguyen Van G", email : "example7@gmail.com", role : "Admin"},
        {id: 8, name : "Nguyen Van H", email : "example8@gmail.com", role : "User"},
        {id: 9, name : "Nguyen Van I", email : "example9@gmail.com", role : "Admin"},
        {id: 10, name : "Nguyen Van K", email : "example10@gmail.com", role : "User"},
        {id: 11, name : "Nguyen Van L", email : "example11@gmail.com", role : "Admin"},
        {id: 12, name : "Nguyen Van M", email : "example12@gmail.com", role : "User"},
        {id: 13, name : "Nguyen Van N", email : "example13@gmail.com", role : "Admin"},
        {id: 14, name : "Nguyen Van O", email : "example14@gmail.com", role : "User"},
        {id: 15, name : "Nguyen Van P", email : "example15@gmail.com", role : "Admin"},
        {id: 16, name : "Nguyen Van Q", email : "example16@gmail.com", role : "User"},
        {id: 17, name : "Nguyen Van R", email : "example17@gmail.com", role : "Admin"},
        {id: 18, name : "Nguyen Van S", email : "example18@gmail.com", role : "User"},
        {id: 19, name : "Nguyen Van T", email : "example19@gmail.com", role : "Admin"},
        {id: 20, name : "Nguyen Van U", email : "example20@gmail.com", role : "User"},
        {id: 21, name : "Nguyen Van V", email : "example21@gmail.com", role : "Admin"},
        {id: 22, name : "Nguyen Van W", email : "example22@gmail.com", role : "User"},
        {id: 23, name : "Nguyen Van X", email : "example23@gmail.com", role : "Admin"},
        {id: 24, name : "Nguyen Van Y", email : "example24@gmail.com", role : "User"},
        {id: 25, name : "Nguyen Van Z", email : "example25@gmail.com", role : "Admin"},
        {id: 26, name : "Nguyen Van A", email : "example1@gmail.com", role : "Admin"},
        {id: 27, name : "Nguyen Van B", email : "example2@gmail.com", role : "User"},
        {id: 28, name : "Nguyen Van C", email : "example3@gmail.com", role : "Admin"},
        {id: 29, name : "Nguyen Van D", email : "example4@gmail.com", role : "User"},
        {id: 30, name : "Nguyen Van E", email : "example5@gmail.com", role : "Admin"},
        {id: 31, name : "Nguyen Van F", email : "example6@gmail.com", role : "User"},
        {id: 32, name : "Nguyen Van G", email : "example7@gmail.com", role : "Admin"},
        {id: 33, name : "Nguyen Van H", email : "example8@gmail.com", role : "User"},
        {id: 34, name : "Nguyen Van I", email : "example9@gmail.com", role : "Admin"},
        {id: 35, name : "Nguyen Van K", email : "example10@gmail.com", role : "User"},
        {id: 36, name : "Nguyen Van L", email : "example11@gmail.com", role : "Admin"},
        {id: 37, name : "Nguyen Van M", email : "example12@gmail.com", role : "User"},
        {id: 38, name : "Nguyen Van N", email : "example13@gmail.com", role : "Admin"},
        {id: 39, name : "Nguyen Van O", email : "example14@gmail.com", role : "User"},
        {id: 40, name : "Nguyen Van P", email : "example15@gmail.com", role : "Admin"},
        {id: 41, name : "Nguyen Van Q", email : "example16@gmail.com", role : "User"},
        {id: 42, name : "Nguyen Van R", email : "example17@gmail.com", role : "Admin"},
        {id: 43, name : "Nguyen Van S", email : "example18@gmail.com", role : "User"},
        {id: 44, name : "Nguyen Van T", email : "example19@gmail.com", role : "Admin"},
        {id: 45, name : "Nguyen Van U", email : "example20@gmail.com", role : "User"},
        {id: 46, name : "Nguyen Van V", email : "example21@gmail.com", role : "Admin"},
        {id: 47, name : "Nguyen Van W", email : "example22@gmail.com", role : "User"},
        {id: 48, name : "Nguyen Van X", email : "example23@gmail.com", role : "Admin"},
        {id: 49, name : "Nguyen Van Y", email : "example24@gmail.com", role : "User"},
        {id: 50, name : "Nguyen Van Z", email : "example25@gmail.com", role : "Admin"},
        {id: 51, name : "Nguyen Van A", email : "example1@gmail.com", role : "Admin"},
        {id: 52, name : "Nguyen Van B", email : "example2@gmail.com", role : "User"},
        {id: 53, name : "Nguyen Van C", email : "example3@gmail.com", role : "Admin"},
        {id: 54, name : "Nguyen Van D", email : "example4@gmail.com", role : "User"},
        {id: 55, name : "Nguyen Van E", email : "example5@gmail.com", role : "Admin"},
        {id: 56, name : "Nguyen Van F", email : "example6@gmail.com", role : "User"},
        {id: 57, name : "Nguyen Van G", email : "example7@gmail.com", role : "Admin"},
        {id: 58, name : "Nguyen Van H", email : "example8@gmail.com", role : "User"},
        {id: 59, name : "Nguyen Van I", email : "example9@gmail.com", role : "Admin"},
        {id: 60, name : "Nguyen Van K", email : "example10@gmail.com", role : "User"},
        {id: 61, name : "Nguyen Van L", email : "example11@gmail.com", role : "Admin"},
        {id: 62, name : "Nguyen Van M", email : "example12@gmail.com", role : "User"},
        {id: 63, name : "Nguyen Van N", email : "example13@gmail.com", role : "Admin"},
        {id: 64, name : "Nguyen Van O", email : "example14@gmail.com", role : "User"},
        {id: 65, name : "Nguyen Van P", email : "example15@gmail.com", role : "Admin"},
        {id: 66, name : "Nguyen Van Q", email : "example16@gmail.com", role : "User"},
        {id: 67, name : "Nguyen Van R", email : "example17@gmail.com", role : "Admin"},
        {id: 68, name : "Nguyen Van S", email : "example18@gmail.com", role : "User"},
        {id: 69, name : "Nguyen Van T", email : "example19@gmail.com", role : "Admin"},
        {id: 70, name : "Nguyen Van U", email : "example20@gmail.com", role : "User"},
        {id: 71, name : "Nguyen Van V", email : "example21@gmail.com", role : "Admin"},
        {id: 72, name : "Nguyen Van W", email : "example22@gmail.com", role : "User"},
        {id: 73, name : "Nguyen Van X", email : "example23@gmail.com", role : "Admin"},
        {id: 74, name : "Nguyen Van Y", email : "example24@gmail.com", role : "User"},
        {id: 75, name : "Nguyen Van Z", email : "example25@gmail.com", role : "Admin"},
        {id: 76, name : "Nguyen Van F", email : "example6@gmail.com", role : "User"},
        {id: 77, name : "Nguyen Van G", email : "example7@gmail.com", role : "Admin"},
        {id: 78, name : "Nguyen Van H", email : "example8@gmail.com", role : "User"},
        {id: 79, name : "Nguyen Van I", email : "example9@gmail.com", role : "Admin"},
        {id: 80, name : "Nguyen Van K", email : "example10@gmail.com", role : "User"},
        {id: 81, name : "Nguyen Van L", email : "example11@gmail.com", role : "Admin"},
        {id: 82, name : "Nguyen Van M", email : "example12@gmail.com", role : "User"},
        {id: 83, name : "Nguyen Van N", email : "example13@gmail.com", role : "Admin"},
        {id: 84, name : "Nguyen Van O", email : "example14@gmail.com", role : "User"},
        {id: 85, name : "Nguyen Van P", email : "example15@gmail.com", role : "Admin"},
        {id: 86, name : "Nguyen Van Q", email : "example16@gmail.com", role : "User"},
        {id: 87, name : "Nguyen Van R", email : "example17@gmail.com", role : "Admin"},
        {id: 88, name : "Nguyen Van S", email : "example18@gmail.com", role : "User"},
        {id: 89, name : "Nguyen Van T", email : "example19@gmail.com", role : "Admin"},
        {id: 90, name : "Nguyen Van U", email : "example20@gmail.com", role : "User"},
        {id: 91, name : "Nguyen Van V", email : "example21@gmail.com", role : "Admin"},
        {id: 92, name : "Nguyen Van W", email : "example22@gmail.com", role : "User"},
        {id: 93, name : "Nguyen Van X", email : "example23@gmail.com", role : "Admin"},
        {id: 94, name : "Nguyen Van Y", email : "example24@gmail.com", role : "User"},
        {id: 95, name : "Nguyen Van Z", email : "example25@gmail.com", role : "Admin"},
        {id: 96, name : "Nguyen Van A", email : "example1@gmail.com", role : "Admin"},
        {id: 97, name : "Nguyen Van B", email : "example2@gmail.com", role : "User"},
        {id: 98, name : "Nguyen Van C", email : "example3@gmail.com", role : "Admin"},
        {id: 99, name : "Nguyen Van D", email : "example4@gmail.com", role : "User"},
        {id: 100, name : "Nguyen Van E", email : "example5@gmail.com", role : "Admin"},
        {id: 101, name : "Nguyen Van F", email : "example6@gmail.com", role : "User"},
    ]);

    return (
        <UserContext.Provider value={{users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;