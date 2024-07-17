declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
