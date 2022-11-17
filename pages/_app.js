import { Auth0Provider } from "@auth0/auth0-react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-nr32vw4h64b4ijip.us.auth0.com"
      clientId="rdqiLKJaabD0e1qAftIg9jaiqFptP5AU"
      redirectUri={"http://localhost:3000"}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
