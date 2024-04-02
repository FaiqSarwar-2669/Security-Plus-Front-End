import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'security-plus-front-end',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
