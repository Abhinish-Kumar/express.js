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





















