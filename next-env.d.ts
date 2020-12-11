/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CMS_API: string,
      }
    }
  }

  export {}
