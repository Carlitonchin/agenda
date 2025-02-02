import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET')
      },
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://main.dnxryaxv0wu3i.amplifyapp.com/profile'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://main.dnxryaxv0wu3i.amplifyapp.com']
    }
  }
});
