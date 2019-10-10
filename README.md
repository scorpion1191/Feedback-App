#FEEDBACK - APP

###URL  :  https://anonymousblock.herokuapp.com

###Stack
React - Front End
Node Express - Middleware
Postgresql - datasource

###Login Credentials 
- {username : ADMIN , password : admin}
- {username : user1 , password : user1}
- {username : user2 , password : user2}
- {username : user3 , password : user3}
- {username : user4 , password : user4}
- {username : user5 , password : user5}

### Features

#####ADMIN

- Admin dashboard has two components one is users and other is feedback
- on click of users , admin can view all the users present 
- on click of view or edit on the perticular user in userlist , admin can view or edit the users
- admin can also view the feedbacks that are given by diffent users to their peers on click of view or edit 

####users

- unlike admin user can see only the feedback component in the dashboard
- it will denote the number of feedbacks that are requested to him from the admin for his peers
- on click of feedback , user can see all the feedbacks that are assigned to him
- he can update the feedback for the given peers


####caution

- if cloned the repository and tring to run in your local
- make sure you have installed nodejs in your syster
- please change the client/package.json "proxy":"localhost"
- in the server index and make sure you are allowing to get request from the "localhost"

###End
