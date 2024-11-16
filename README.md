# RestfulAPI
Create a Node.js application using Express to retrieve data from a JSON file and display it via a RESTful API
# Restful.Api
## User Information Management API

### Summary
This project demonstrates the development of a RESTful API using Node.js and Express. The API provides functionality to:
- Retrieve a list of all users.
- Fetch specific users by their ID.
- Search for users based on their profession.
- Find users by their names.

### Available Routes
1. Retrieve All Users
   - Path: /users
   - Screenshot:  
     ![All Users](./images/users_list.png)

2. Get User by ID
   - Path: /users/:id
   - Screenshot:  
     ![User by ID](./images/specific_user.png)

3. Search Users by Profession
   - Path: /users/profession/:profession
   - Screenshot:  
     ![Users by Profession](./images/profession.png)

4. Find User by Name
   - Path: /users/name/:name
   - Screenshot:  
     ![User by Name](./images/name.png)

### Lessons Learned
Throughout the project, I gained insights into:
- Designing and implementing RESTful APIs with dynamic endpoints.
- Managing file operations in Node.js using the fs module.
- Testing endpoints effectively using Postman.
- Building robust error-handling mechanisms for invalid inputs.

### Testing Process
Below are screenshots showing the API endpoints tested with Postman:

1. All Users: Retrieves a complete list of users via /users.  
   ![All Users](./images/users_list.png)

2. Specific User by ID: Returns the details of a user for the specified ID through /users/:id.  
   ![User by ID](./images/specific_user.png)

3. Users by Profession: Filters users by their profession using /users/profession/:profession.  
   ![Users by Profession](./images/profession.png)

4. User by Name: Finds a specific user by their name using /users/name/:name.  
   ![User by Name](./images/name.png)

### Insights and Challenges
- Testing APIs with tools like Postman provided clarity in debugging and verifying functionality.
- Writing custom error messages for invalid requests (e.g., non-existent user IDs or professions) improved the user experience.
- I encountered challenges with ensuring the API responded gracefully to invalid or missing data files, which enhanced my understanding of error handling.

---

This project was a practical introduction to RESTful API development and provided valuable experience in creating, testing, and improving APIs for real-world applications.