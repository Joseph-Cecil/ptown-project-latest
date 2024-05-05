/// <reference types="vite/client" />

declare module 'react-three-fiber' {
    interface JSX {
      IntrinsicElements: {
        meshLineGeometry: unknown
        meshLineMaterial: unknown
      }
    }
  }
  
