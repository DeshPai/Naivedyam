##  Lessons
1. Introduciton to the course
2. Install development tools
3. Create Angular App
   1. Create project's folder
   2. Install @angular/cli
   3. Create App as frontend

4. Add Header
   1. Generate Component
   2. Add Html
   3. Add CSS

5. List Foods
    1. Create Food model
    2. Create data.ts
       1. Add sample foods
    3. Add images to assets
    4. Create Food service
    5. Create Home component
       1. Add ts
       2. Add html
       3. Add css

6. Search
   1. Add method to Food service
   2. Add search route
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css
   
7. Tags Bar
   1. Create Tag model
   2. Add sample tags to data.ts
   3. Food service
      1. Add get all tags method
      2. Add get all foods by tag method
   4. Add tags route
   5. Show tag result in Home component
   6. Generate Tags component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css

8. Food Page
   1. Add method to food service
   2. Generate Food Page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

9. Cart Page
   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Food Page
   5. Generate Cart page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

10. Not Found!
    1. Generate Component
       1. Add ts
       2. Add html
       3. Add css
    2. Add To Pages
       1. Home Page
       2. Food Page
       3. Cart Page

11. Connect To Backend
    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  Create .gitignore
    6.  Copy data.ts to backend/src
    7.  npm install express cors
    8.  Create server.ts
        1. install @types
        2. Add Apis
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service

12. Login Page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login Api
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman
    
    3.  Generate User Service
        1.  Generate User model
        2.  Add User Subject
        3.  Add Login Method   
            1.  Add User Urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toastr
                1.  Import Module
                2.  Import BrowserAnimationsModule
                3.  Add styles in angular.json
            4.  Add to Header
        1. Add Local Storage methods
        2. Add Logout Method
           1. Add to Header


13. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

14. Connect Login API To MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis


15. Register User
    1.  Add Register api
    2.  Add Register service method
    3.  Add Register link 
    4.  Add Register Component


16. Loading!
    1.  Add Image 
    2.  Add Component
    3.  Add Service
    4.  Add Interceptor




17. Checkout Page
    1.  Create Order Model
    2.  Create Checkout Page Component
        1.  Add To Router   
    3.  Add User to User Service 
    4.  Add Cart to Cart Service 
    5.  Create Order Items List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard
    7.  Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
           1. Add create API
        5. Add Order Urls to urls.ts
        7. Add Order Service
           1. Add create Method
        8. Add Auth Interceptor

18. Payment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' api 
    3. Add Order Service method
    4. Connect Component to Service
    5. Make the map component readonly

19. Adding Paypal
    1. Generate Component
       1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay api to order router   
    6. Get Paypal sandbox account

20. Order Track Page
    1.  Generate Component
        1.  Add to routes
    2.  Add API
        1.  Add to urls.ts
    3.  Add method to order.service
    4.  Add HTML
    5.  Add CSS

21. Deploy On Heroku
    1.  OutputPath in angular.json
    2.  package.json
        1.  frontend
        2.  backend
        3.  root
    3.  BASE_URL in urls.ts
    4.  Public folder config in server.ts
    5.  Run commands
    6.  Add built folder to .gitignore
    7.  Commit and Push

22. Updating Packages (Optional)
    1.  Install npm-check-upates as a global package
    2.  Run ncu -u in the frontend folder
    3.  Downgrade typescript to version ~4.8.2
    4.  Run npm install --force
    5.  Run npm start
    6.  Run ncu -u in the backend folder
    7.  Run npm install
    8.  Run npm start
    *****************************************END*****************************************


********************* We need to make below  Changes with  code in coresponding  files before Deployment in   Heroku or any other cloud platform********

21. Deploy On Heroku
    => After prior login and with proper integration/setting of Git-Repository with Heroku .

    1.  OutputPath in angular.json
      =>  "build": 
          "builder": 
          "options": 
            "outputPath": "../backend/built/public",  

    2.  package.json

        1.  frontend
       =>   "scripts": {
                  "ng": "ng",
                  "start": "ng serve",
                  "build": "npm install --force && ng build --configuration production",
           },
       =>
    "dependencies": {
    "@angular/animations": "^15.2.0",
    "@angular/common": "^15.2.0",
    "@angular/compiler": "^15.2.0",
    "@angular/core": "^15.2.0",
    "@angular/forms": "^15.2.0",
    "@angular/platform-browser": "^15.2.0",
    "@angular/platform-browser-dynamic": "^15.2.0",
    "@angular/router": "^15.2.0",
    "@asymmetrik/ngx-leaflet": "^16.0.1",
    "leaflet": "^1.9.4",
    "ng-starrating": "^1.0.20",
    "ngx-toastr": "^17.0.2",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.12.0",
      "@angular-devkit/build-angular": "^15.2.9",
    "@angular/cli": "~15.2.9",
    "@angular/compiler-cli": "^15.2.0",
    "@types/jasmine": "~4.3.0",
    "@types/leaflet": "^1.9.3",
    "jasmine-core": "~4.5.0",
    "typescript": "~4.9.4"
    },

    "devDependencies": {
  
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0"
    
  }


          2.  backend
           =>
               "scripts": {
                   "start": "cd src && nodemon server.ts",
                   "build": "npm install --force && tsc"
               },

                "dependencies": {
                   "bcryptjs": "^2.4.3",
                   "cors": "^2.8.5",
                   "dotenv": "^16.3.1",
                   "express": "^4.18.2",
                   "express-async-handler": "^1.2.0",
                   "jsonwebtoken": "^9.0.1",
                   "mongoose": "^7.3.4",
                   "typescript": "^5.1.6",
                   "@types/bcryptjs": "^2.4.2",
                   "@types/cors": "^2.8.13",
                   "@types/express": "^4.17.17",
                   "@types/jsonwebtoken": "^9.0.2"
               },
              "devDependencies": {
          
                   "nodemon": "^3.0.1",
                   "ts-node": "^10.9.1"
               }


          3.  root
                Note = create a new package.json file in the root i.e outside backend & frontend folder
                =>
                {
          
                   "name": "Naivedyam",
                   "version": "1.0.0",
                   
                   "scripts": {
                   "start":"cd backend/built && node server.js",
                   "prebuild": "cd backend && npm run build",
                   "build": "cd frontend && npm run build"
                    }, 

               }

    3.  BASE_URL in urls.ts
        =>
         const BASE_URL =environment.production? '' : 'http://localhost:5000'; 


    4.  Public folder config in server.ts
        =>
          import path from 'path';

         app.use(app.static('public));
         app.get('*',(req,res)=>{
            res.sendFile (path.join(__dirname ,'public' ,'index.html'))
         })
        
         const port = process.env.PORT || 5000;   // heroku / cloud platform  will update PORT automatically 
         app.listen(port,()=>{
         console.log("Website Served on http://localhost:"+port);
         })

    5.  Run commands
        =>
          D:\Angular 15 -project\Naivedyam> npm run prebuild         // create new built folder inside backend
          
            after this cmd

          D:\Angular 15 -project\Naivedyam> npm run build            // create new public folder inside frontend


          D:\Angular 15 -project\Naivedyam> npm run start  

    6.  Update .env File 
          move .env file inside built folder that is newly created by npm command
        => run cmd
          D:\Angular 15 -project\Naivedyam> npm run start  

          Go To Heroku  => setting => config vars => as under 
           
           key                            value
          
           JWT_SECRET                      GenerateKey
           MONGO_URI                        mongodb+srv://paisiddhesh9:H3nJBJZA01L9nC3t@cluster0.nis3buk.mongodb.net/naivedyam?retryWrites=true&w=majority  

    7.  Add built folder to .gitignore
         Go To  .gitignore
        =>
          node_modules
          env
          built

    8.  Commit and Push
         name &  commit build from vs code 
        => 
         Deploy On Heroku
         commit
         sync changes
          
   9.  Go To Heroku 
       =>
        Activity => build in progress (click on that) after successful build will get url
         https://naivedyam.herokuapp.com
         copy above url and run it in the browser.

         We have Successfully deployed our Web App in Heroku .

         ***************Thanks***************************
    