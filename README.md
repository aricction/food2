# Resturant managment system with chatbot

It is a web based application mainly made on nodejs

## Installation
Install Node version 14 
For running the website , install the node_modules from package manager
run command on root directory (inside react5 folder )
 in terminal.
```bash
npm install
```
It shall install the required packages to run the app.
After install packages the directory tree should look like this

```bash
>config
>middlewares
>node_modules
>reactweb
>Routes
server.js
```
step 2 : - Run the following cmd in a terminal

```bash
    cd reactweb
    npm install
```

step 3 :- Test the Express server , run the following cmd . By this the express server shall open http://localhost:5000 to view it in the browser with message welcome to express server.

```bash
npm start

```

In the terminal you would see the message , database connected refers to the cloud database service mongoDB atlas.

```bash
server running ...
database connected ...
```
step 4 :- Run the following cmd inside the terminal, and the App should open up in  localhost:3000 automatically in the browser

```bash
cd reactweb
npm run dev

```


## Replacing Razorpay keys and MongoURI

Before that , you are advised to see the documentation mongodb altas section.
After creating account and cluster in atlas.

Inside the config folder in the db.json file replace the following with your code .

```bash
"mongodb+srv://<username>:password@cluster0.tyx65.mongodb.net/<databasename>?retryWrites=true&w=majority",

```  

For razorpay, see the documentation razorpay section for more details.

Open the paybutton.js file in a editor and replace the following

```bash

  key: 'your key'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)