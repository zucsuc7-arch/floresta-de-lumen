import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lumen.guardiao',
  appName: 'Guardião de Lumen',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
