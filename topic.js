/* login management => 
    1) Register             /web-users =>post
        1)register=>
            fullName
            email
            password
            dob
            gender
            role =>(superAdmin, admin, customer)
            isVerifiedEmail
        2) verify email
            sent  token through postman
            get token
            verify token
            get _id from token
            make isVerifiedEmail true
    2) Login
        email and password
        check if that email exist => (if email not found throw error 
        check if that email verified => (if not throw error)
        check if password match => (if not throw error)
        then generate token => (attached _id)
        send token to postman
    3) My profile
        pass token from postman
        get token from postman 
        validate token (if token is not valid throw error)
        get _id from token
        pass _id to another middleware 
        next()
    4) My profile update
    5) Update profile
        pass token from postman 
        get token from postman
        get id 
        update profile
    update password
        pass token 
        isAuthenticated
        get _id
        get body from postman

    6) Forgot and reset password process
        -> forgot password
            pass email from postman
            get email
            check if that email exist in our db (if not throw error with status code 404)
            if email exist send email with link(frontend link + token)
            send response
        -> reset password
            
    7) Delete user
        /web-users/:id =>delete
    8) Read all user
        /web-user => get
    9) Read specific user
        /web-users/:id =>get
    update Specific user 
        /web-users/:id =.patch


status code
success
    2XX
create => 201
read =>200
update => 201
delete =>200


error 
    4XX
401 => token not valid, credential not match
403 => token is valid but not authorized
409 => conflict (duplicate)
404 => api not found

*Authorization 

admin => user read
super admin => user read, delete user
customer => does not have permission to read user.


pass token from postman
isAuthenticated
_id
read details of that _id
get roles of that details

is the role is either admin or superAdmin  do next()
else throw error with status code 403


*/



