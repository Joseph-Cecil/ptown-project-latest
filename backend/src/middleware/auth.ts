import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: "sprall-buy-api",
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
  });