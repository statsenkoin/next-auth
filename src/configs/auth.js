import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@mail.com',
          required: true,
        },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const users = [{ id: '1', email: 'qwerty@mail.com', password: '123' }];

        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(
          (user) => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = currentUser;

          console.log('userWithoutPassword :>> ', userWithoutPassword);
          return userWithoutPassword;
        }
        return null;
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;
        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
};
