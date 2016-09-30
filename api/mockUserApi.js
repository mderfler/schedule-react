import delay from './delay';

const users = [
    {
        id: 1,
        'firstName': 'Brenton',
        'lastName': 'Pyl',
        'email': 'bpyl@catalystdevworks.com'
    },
    {
        id: 2,
        'firstName': 'Travis',
        'lastName': 'Hoffman',
        'email': 'thoffman@catalystdevworks.com'
    },
    {
        id: 3,
        'firstName': 'Brett',
        'lastName': 'Futral',
        'email': 'bfutral@catalystdevworks.com'
    },
    {
        id: 4,
        'firstName': 'Steven',
        'lastName': 'Smith',
        'email': 'ssmith@catalystdevworks.com'
    },
    {
        id: 5,
        'firstName': 'Abigail',
        'lastName': 'Edwards',
        'email': 'aedwards@catalystdevworks.com'
    },
    {
        id: 6,
        'firstName': 'Joshua',
        'lastName': 'Jacobson',
        'email': 'jjacobson@catalystdevworks.com'
    },
    {
        id: 7,
        'firstName': 'Sivagami',
        'lastName': 'Annamalai',
        'email': 'sannamalai@catalystdevworks.com'
    },
    {
        id: 8,
        'firstName': 'Hayes',
        'lastName': 'McCardell II',
        'email': 'hmccardell@catalystdevworks.com'
    },
    {
        id: 9,
        'firstName': 'Pros',
        'lastName': 'Seng',
        'email': 'pseng@catalystdevworks.com'
    },
    {
        id: 10,
        'firstName': 'Kathryn',
        'lastName': 'LaFrance',
        'email': 'klafrance@catalystdevworks.com'
    },
    {
        id: 11,
        'firstName': 'Andrew',
        'lastName': 'Rajigah',
        'email': 'arajigah@catalystdevworks.com'
    },
    {
        id: 12,
        'firstName': 'Alexandra',
        'lastName': 'Moss',
        'email': 'amoss@catalystdevworks.com'
    },
    {
        id: 13,
        'firstName': 'Thomas',
        'lastName': 'Getzoyan',
        'email': 'tgetzoyan@catalystdevworks.com'
    },
    {
        id: 14,
        'firstName': 'James',
        'lastName': 'Blair',
        'email': 'jblair@catalystdevworks.com'
    },
    {
        id: 15,
        'firstName': 'Bradley',
        'lastName': 'Larsen',
        'email': 'blarsen@catalystdevworks.com'
    },
    {
        id: 16,
        'firstName': 'Jordan',
        'lastName': 'Barroga',
        'email': 'jbarroga@catalystdevworks.com'
    }
];

//no need for post/put/delete since we can't do that on the real api
class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }

    static getUserById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let user = users.find((theUser) => {
                    return user.id === id;
                });
                if (user) {
                    resolve(Object.assign({}, user));
                } else {
                    reject(`No user with id of ${id} found.`);
                }

            }, delay);
        });
    }
}

export default UserApi;
