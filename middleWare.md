# Express middleware

We can do whatever we want to do with request of client , allow it or not.

### What is a middleware?

Middleware is a functionthat execute after the server receives the request and before the controller action sends the response.
 The biggest thing is that middleware functions have access to the response (res) and request (req) variables and can modify them or use them as needed. Middleware functions also have a third parameter which is a next function.

Ye request and response ke beech ke state ko handle karta hi isi lie ise middleware kahte hi.
 
```node

const express=require('express');
const app=express();

app.use((req,res,next()=>{

console.log("heyyyy");//it will hang your browser and dont allow any further operation to do 

});

app.listen(3000);

```

```node

const express=require('express');
const app=express();

app.use((req,res,next()=>{

console.log("heyyyy");
next();//we have to call the next() to allow the request

});

app.listen(3000);

```

This is used for authorization and authentification and we have also so many use cases of it.



### create a login system with middleware for authentification






