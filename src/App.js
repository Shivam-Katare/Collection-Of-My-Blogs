import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./GetImages"
import { NhostClient, NhostReactProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';


const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION
})

export default function App() {
  return (
    <>
       <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<GetImages />} />
          </Routes>
        </BrowserRouter>
      </NhostApolloProvider>
    </NhostReactProvider>
    </>
  )
}
