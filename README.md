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

Create domain Name
-- use GoDaddy to purchase domain name

- then in GoDaddy we have to do setup
- for DNS management or mapping use cloudflare or goDaddy itself
- inside it add domain name and add some records
- we have to map our domian name with our ip-address
- to make website secure we to to SSL/TLS tabs in cloudfram in left nav - configure- custom ssl/tls select flexible - it make network secure https
- then go to edge certificates - enables automatic https rewrites

// 🔥🔥🔥🔥🔥🔥Episode 3.4 🔥🔥🔥🔥🔥🔥
how to send email through backend

// 🔥🔥🔥🔥🔥🔥Episode 3.7 🔥🔥🔥🔥🔥🔥
------------ PAYMENT GATEWAY -----------
razorpay integration

payment happen in 2 steps

1. create order - create/order/api
2. payment verification /verify/api

- backend has secret key which razorpay use
- when we click on paynow fe make api call to be ask BE to create order -
- FE cannot talk direct to razorpay
- razopay need secrect key and password that is only - available on backend
- then BE make call to razerpay with secrect key
- then razorpay create order and send back order id to backend with all details
- BE send this order id to frontend - FE opens up dialog box of payment with details upi/ debitcard / credit card etc
- once payment done razorpay inform BE (it has webhook )that payment id is created with signature then BE do payment verification on success it makes that user as premium
- now FE maki api call for verify BE send success or failure

-- now on click of this subscribe button it opens the payment page and it should make api call to backend and create an order
// docs
https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps

-- in frontend after create order api call we have to put this script inside index.html and open razorpay inbuild modal

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

- after create order- we will take response and the we open razorpay dialog box with the responce data- code given by razorpay docs
- https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps - code to add payment button option

- now For Payment we need to very payment using webhook
- now inside razorpay app we go to webhook and add new webhook means a url or API so after payment success or failure we call this api

🔥🔥🔥🔥🔥🔥 Episode 3.8 🔥🔥🔥🔥🔥

CHAT- SYSTEM using sockit.io and web sockits
https://socket.io/

Socket.IO is a library that enables low-latency (means fast), bidirectional(both ways normal api are uni directional) and event-based(means event listners) communication between a client and a server.

-websocket is connection between server and client
-- in sockit.io documentation we have serverApi and clientApi we have to wright these two because its bidirectional

- https://socket.io/docs/v4/server-api/

- https://socket.io/docs/v4/client-api/

- now we configure backend first asn we already use express so now we configure in that way diff from server api docs because it is set in http

- Now for Frontend we need to install package npm i socket.io-client

🔥🔥🔥🔥🔥🔥 Episode 3.9 🔥🔥🔥🔥🔥
How to save chat in DB
