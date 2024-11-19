JWT Authentication API 
https://authendication-authorization-task.onrender.com
Welcome to the JWT Auth API

1. Register User
   
POST - https://authendication-authorization-task.onrender.com/api/auth/register
body - {
  "username": "jai_143",
  "email": "jai143@example.com",
  "password": "jai143143"
}

{
    "message": "User registered successfully"
}

2. Login User
   
POST - https://authendication-authorization-task.onrender.com/api/auth/login
body - {
  "email": "jai143@example.com",
  "password": "jai143143"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzNjYmUyYjE2MTk1MjFiOTcxZjIzZjYiLCJpYXQiOjE3MzIwMzQyMDIsImV4cCI6MTczMjAzNzgwMn0.87rs8-xb4g3b1rAoCn3tmGokAeuqxk9Ax6GjqYU_DBw"
}

3. Get User Info
   
GET - https://authendication-authorization-task.onrender.com/api/auth/me
Headers - 
key = Authorization Value = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzNjYmUyYjE2MTk1MjFiOTcxZjIzZjYiLCJpYXQiOjE3MzIwMzQyMDIsImV4cCI6MTczMjAzNzgwMn0.87rs8-xb4g3b1rAoCn3tmGokAeuqxk9Ax6GjqYU_DBw

{
    "_id": "673cbe2b1619521b971f23f6",
    "username": "jai_143",
    "email": "jai143@example.com",
    "__v": 0
}
