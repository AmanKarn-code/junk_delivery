import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout";
export default function App({ Component, pageProps }) {
  return (
    <Layout> {/*has navbar and footer init*/}
      <ThemeProvider attribute="class" enableSystem={false}> {/*//themes of next*/}
        <Component {...pageProps} />;
      </ThemeProvider>
    </Layout>
  )
}
