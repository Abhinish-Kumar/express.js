# Express middleware

We can do whatever we want to do with request of client , allow it or not.


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





