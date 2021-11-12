import {SvgDefinition} from 'Components/SvgDefinition'

import 'tailwindcss/tailwind.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <SvgDefinition />
      </>
  )
}

export default MyApp
