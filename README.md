# React + Vite

// 🔥🔥🔥🔥🔥🔥Episode 2.15🔥🔥🔥🔥🔥🔥
frontend setup

1. create a vite + React application
2. install tailwind daisyui
3. install react router
4. creating compoenents files
5. don routing parent and child routing and using Outlet for dispalying

// 🔥🔥🔥🔥🔥🔥Episode 2.16🔥🔥🔥🔥🔥🔥

1. create login component
   -- CORS- cross origin resource schearing - means we make api call having different domain eg frontend localhost:5173 but backend api is running on localhost:3000 so brower does not allow it through CORS error
   -- now we install npm i cors and use inside backend app.use(cors())
   -- once we login and we see inside header token but if we go to applications cookies token is not set , when we use cors we have to send some config , origin of frontend, credentials :true so it work on both http, https
   https://expressjs.com/en/resources/middleware/cors.html

-- we have to set cretitional true in frontend as well
-- { withCredentials: true }
-- once we login we get responce so to save this responce we use redux tolkit https://redux-toolkit.js.org/introduction/getting-started

-- setup store slice https://redux-toolkit.js.org/tutorials/quick-start

FLOW \_ configureStore -> provider to app -> create slice -> used reducder in store

// 🔥🔥🔥🔥🔥🔥Episode 2.17 🔥🔥🔥🔥🔥🔥
-- once we login we use redux devtool extention and check store
-- once we login if we refresh we lost user data user name , photo because our redux gets empty how to resolve this -- inside body we make API call to profile/view Api to get user
-- profile/edit

🔥🔥🔥🔥🔥🔥 Episode 2.18 🔥🔥🔥🔥🔥🔥
-- existing connections -all my connections connection page
-- requested received
-- accept-reject request

// 🔥🔥🔥🔥🔥🔥Episode 2.19 🔥🔥🔥🔥🔥🔥
-- intrested-ignored

// 🔥🔥🔥🔥🔥🔥Episode 3.1 🔥🔥🔥🔥🔥🔥
deployment
we use AWS create our own server and deployment
https://aws.amazon.com/console/
-- how we deploy app manually on server
-- 🔥🔥 STEPS 🔥🔥

1. Create account
2. deployment FE and BE

// 🔥🔥🔥🔥🔥🔥Episode 3.2 🔥🔥🔥🔥🔥🔥

Backend deployment on aws

// 🔥🔥🔥🔥🔥🔥Episode 3.3 🔥🔥🔥🔥🔥🔥
razorpay integration
