declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV?: 'development' | 'production' | 'test';
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }
}

// Export an empty object to make this file a module
export {};
