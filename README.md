# Next-auth

`01-basic-laiout`

Remove unnecessary content

Add very basic nav

`02-google-auth`

1. app/api/[...nextauth]/route.js
2. configs/auth.js -> providers
3. .env.local -> GOOGLE + NEXT info
4. SessionProviders

   - app/layout.js
   - components/providers.js
   - add Sign in/out btn to header -> user.js -> useSession()

5. next.config -> image config
6. add middleware.js

`03-credentials-provider`

config/auth.js -> add CredentialsProvider

`04-custom-login-form`

- Custom components/GoogleButton.js
- Custom components/SignInForm.js
- Custom components/RegisterForm.js
- app/signin/page.js
- app/register/page.js
- components/User update Link api/auth/signin -> /signin
- config/auth - add pages{}

`05-mongodb-register`

- import mongoose, bcryptjs, axios
- create mongoDB config: configs/dbConfig, .env
- create userModel
- create route api/users/signup
- add logic to RegisterForm
