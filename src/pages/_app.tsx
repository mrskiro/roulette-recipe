import { ResetCSS } from "~/modules/reset"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ResetCSS />
      <Component {...pageProps} />
    </>
  )
}

export default App
