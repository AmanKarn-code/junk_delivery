import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout> {/*has navbar and footer init*/}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
