# express.js
All about expressjs

# Introduction 
https://expressjs.com/

Used to create server.



```node

//Install express.

>npm init
>npm i --save express nodemon 

```


# Lets Start Our Express Journey...


```node

>mkdir express-app
>cd express-app && npm init
//If first is successfully executed execute the second one.
>npm install--save express nodemon
>npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0

```

```node

"script":{
"start":"nodemon ./index.js --exec babel-node -e js"
}
```


### Create Express Server.


```node

import express from "express"

const app = express();
const PORT=3000;

app.listen(PORT,()=>
console.log(`Your server is running on port ${PORT}`);
);
```



### Add data to server.

https://www.mockaroo.com

Create demo json data from this site to work with data. 


```node

import express from "express"
import data from './data/data/json';

const app = express();
const PORT=3000;

app.listen(PORT,()=>
console.log(`Your server is running on port ${PORT}`);
console.log(data);//show you json output.
);

```

```node
>ctro + shift + i (for developer tool)

```

#### Whatever the things that you do in Listen(will display only in server)


### Create a bsic route

Route is simply a click on link. its a verity of page with data that you requested.


#### Get method

```node

import express from "express"
import data from './data/data/json';

const app = express();
const PORT=3000;

app.get('/',(req,res)=>
res.send(`a get request with / route on port ${PORT}`);
);

app.listen(PORT,()=>
console.log(`Your server is running on port ${PORT}`);
console.log(data);//show you json output.
);

```

Your browser by default do a GET request and here it do this with / route and in our app we have defined that when request is with / then response with a message "Your server is running on port ${PORT}" . This message will appear in your browser.


#### POST method
Used to post data to server

```node

import express from "express"
import data from './data/data/json';

const app = express();
const PORT=3000;

app.get('/',(req,res)=>
res.send(`a get request with / route on port ${PORT}`);
);

app.post('/newItem',(req,res)=>
res.send(`a post request with /newItem route on port ${PORT}`);
);

app.listen(PORT,()=>
console.log(`Your server is running on port ${PORT}`);
console.log(data);//show you json output.
);

```

#### Put method
Used to update existing item 



```node

import express from "express"
import data from './data/data/json';

const app = express();
const PORT=3000;

app.get('/',(req,res)=>
res.send(`a get request with / route on port ${PORT}`);
);

app.post('/newItem',(req,res)=>
res.send(`a post request with /newItem route on port ${PORT}`);
);

app.put('/item',(req,res)=>
res.send(`a put request with /item route on port ${PORT}`);
);

app.listen(PORT,()=>
console.log(`Your server is running on port ${PORT}`);
console.log(data);//show you json output.
);

```





#### Delete method
Used to delete existing item 



```node

import express from "express"
import data from './data/data/json';

const app = express();
const PORT=3000;

app.get('/',(req,res)=>
res.send(`a get request with / route on port ${PORT}`);
);

app.post('/newItem',(req,res)=>
res.send(`a post request with /newItem route on port ${PORT}`);
);

app.put('/item',(req,res)=>
res.send(`a put request with /item route on port ${PORT}`);
);

app.delete('/item',(req,res)=>
res.send(`a delete request with /item route on port ${PORT}`);
);



app.listen(PORT,()=>
console.log(`Your server is running on port ${PORT}`);
console.log(data);//show you json output.
);

```

You can respose with a message and with the updated data.




















