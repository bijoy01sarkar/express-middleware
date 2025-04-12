There are 10 assignment of Middleware and Cors (basic to advanced level) 
that will give a solid foundation about this very importand and crusial topic in express. 

explanation
middleware is just like a function used for verify before go to the next function. 
it takes three arguments which are 'req, res, next()' req is accept the request from 
the body and res is used for giving the response back to the client and then if next 
is called then only next handler got executed based on the middle ware conditions. 
express is chain of middlewares. I have learned that there are bunch of built 
in middleware available in express like express.json() is one of middleware.  
and for cors section, it is basically cross origin resource sharing which is 
nothing but a external module that we have to install before using it in our 
express program and than we can use them by require("cors") like that. 
it helps to connect the backend with the frontend. fetch and axios is used 
to send the http request to the backend but cors use to connect both of them 
because fronted is hosted in one domain let say alibaba.com but the backend 
will be hosted in another domain called  alibabaapi.com and for this we need 
to use the cors to establish the connection between two domain.
