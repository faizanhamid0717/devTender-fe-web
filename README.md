# React + Vite

// Episode 2.15
frontend setup

1. create a vite + React application
2. install tailwind daisyui
3. install react router
4. creating compoenents files
5. don routing parent and child routing and using Outlet for dispalying

// Episode 2.16

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

-- once we login we use redux devtool extention and check store
