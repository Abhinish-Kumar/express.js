# Get 

### Server

```javascript
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
const data = {
  message: "Hello World",
  timeStamp: new Date(),
  items: [1, 2, 3, 4],
};

app.get("/", (req, res) => {
  console.log("User connected ");
  res.json(data);
});

app.listen(port, () => {
  console.log("Yoour server is running now");
});

```

### client

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      async function fetchData(url) {
        try {
          let response = await fetch(url);
          let data = await response.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      }
      fetchData("http://localhost:3000/");
    </script>
  </body>
</html>

```



# POST

### Server

```javascript
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3000;
app.use(express.json());
app.post("/", (req, res) => {
  let data = req.body;
  console.log(data);
  res.end("Successfully received");
});

app.listen(port, () => {
  console.log("Yoour server is running now");
});

```

### CLient

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      async function fetchData(url) {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Name: "Abhinish" }),
        });
        let responseFromServer = await response.text();
        console.log(responseFromServer);
    } catch (err) {
        console.error(err);
    }
}

fetchData("http://localhost:3000/");

    </script>
  </body>
</html>


```
