import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import user5 from '../images/user5.png';
import user6 from '../images/user6.png';


let employees = [
    {
        id: 1,
        avatar: user1,
        name: 'Vera Mertens',
        category: 'Operations',
        location: {
            city: 'Lviv',
            place: '2nd floor',
            time: '3:42 pm',
        },
        contacts: {
            email: 'vera-mertens@hotmail.com',
            phone: '+ 38 (032) 497-1888',
        }
    },
    {
        id: 2,
        avatar: user2,
        name: 'Theresa Mason',
        category: 'Operations',
        location: {
            city: 'Lviv',
            place: '2nd floor',
            time: '3:42 pm',
        },
        contacts: {
            email: 'theresa-mason@hotmail.com',
            phone: '+ 38 (044) 497-1888',
        }
    },
    {
        id: 3,
        avatar: user3,
        name: 'Edward Chapman',
        category: 'Frontend',
        location: {
            city: 'Lviv',
            place: '4nd floor',
            time: '3:42 pm',
        },
        contacts: {
            email: 'edward-chapman@hotmail.com',
            phone: '+ 38 (032) 497-1888',
        }
    },
    {
        id: 4,
        avatar: user4,
        name: 'Samantha Kennedy',
        category: 'Frontend',
        location: {
            city: 'Lviv',
            place: '4nd floor',
            time: '3:42 pm',
        },
        contacts: {
            email: 'samantha-kennedy@hotmail.com',
            phone: '+ 38 (032) 497-1888',
        }
    },
    {
        id: 5,
        avatar: user5,
        name: 'Maria Cardenas',
        category: 'Operations',
        location: {
            city: 'San Francisco',
            place: '2nd floor',
            time: '4:42 AM',
        },
        contacts: {
            email: 'maria_cardenas@hotmail.com',
            phone: '+ 1 (0922) 497-1888',
        }
    },
    {
        id: 6,
        avatar: user6,
        name: 'Charlotte Pelletier',
        category: 'Operations',
        location: {
            city: 'San Francisco',
            place: '3rd floor',
            time: '4:42 AM',
        },
        contacts: {
            email: 'charlotte-pelletier@hotmail.com',
            phone: '+ 1 (0922) 497-1888',
        }
    }
];

let categories = ['Backend', 'Frontend', 'Devops', 'Operations'];
let cities = ['Lviv', 'Kyiv', 'San Francisco'];

export const getEmployees = () => {
    return Promise.resolve(employees)
};

export const getCategories = () => dispatch => {
    dispatch({type: 'SET_CATEGORIES', categories: categories});
};

export const getCities = () => dispatch => {
    dispatch({type: 'SET_CITIES', cities: cities});
    return Promise.resolve();
};
