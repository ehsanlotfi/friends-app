import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.friends.com',
  appName: 'friends-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
