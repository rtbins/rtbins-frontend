import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const resume = [
  {
    id: 'header',
    firstName: 'Rohit',
    lastName: 'Gupta',
    objective: `In a quest to create intelligent products. Lorem ipsum dolor sit,
       amet consectetur adipisicing elit. Non, explicabo.`,
  },
  {
    id: 'education',
    description: '',
    institutes: [
      {
        name: 'Kendriya Vidyalaya',
        sub_title: 'High school',
        start_date: new Date(2008, 1, 1),
        end_date: new Date(2010, 1, 1),
        description: `Lorem ipsum dolor qsit amet consectetur adipisicing elit. 
        Rem sed vel, quae iste aut expedita, fuga a qui omnis`,
        achievements: [
          {
            title: '',
            description: '',
          },
        ],
      },
      {
        name: 'IIT Roorkee',
        sub_title: 'B.Tech',
        start_date: new Date(2011, 1, 1),
        end_date: new Date(2015, 1, 1),
        description: `Lorem ipsum dolor qsit amet consectetur adipisicing elit. 
          Rem sed vel, quae iste aut expedita, fuga a qui omnis`,
        achievements: [
          {
            title: '',
            description: '',
          },
        ],
      },
      {
        name: 'Udacity',
        sub_title: 'High school',
        start_date: new Date(2008, 1, 1),
        end_date: new Date(2010, 1, 1),
        description: `Lorem ipsum dolor qsit amet consectetur adipisicing elit. 
          Rem sed vel, quae iste aut expedita, fuga a qui omnis`,
        achievements: [
          {
            title: '',
            description: '',
          },
        ],
      },
    ],
  },
];

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (field) => {
  return field.id.toLowerCase(); // + '-' + author.lastName.toLowerCase();
};

class AuthorApi {
  static getAllFields() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], resume));
      }, delay);
    });
  }

  static saveAuthor(author) {
    author = Object.assign({}, author); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
          reject(new Error(`First Name must be at least ${minAuthorNameLength} characters.`));
        }

        if (author.lastName.length < minAuthorNameLength) {
          reject(new Error(`Last Name must be at least ${minAuthorNameLength} characters.`));
        }

        if (author.id) {
          // const existingAuthorIndex = authors.findIndex((a) => a.id === author.id);
          // authors.splice(existingAuthorIndex, 1, author);
        } else {
          // Just simulating creation here.
          // The server would generate ids for new authors in a real app.
          // Cloning so copy returned is passed by value rather than by reference.
          author.id = generateId(author);
          // authors.push(author);
        }

        resolve(author);
      }, delay);
    });
  }

  static deleteAuthor() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // const indexOfAuthorToDelete = authors.findIndex((author) => {
        //   author.id == authorId;
        // });
        // authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;
