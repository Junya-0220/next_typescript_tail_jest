import '../styles/globals.css'
import { AppProps } from 'next/app'

//function 式で書かずに arrow function で書きなおしたらエラーは消えた。
// function MyApp({ Component, pageProps }): AppProps {
//   return <Component {...pageProps} />
// }

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default MyApp
