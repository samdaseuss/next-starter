import styles from '../styles/global.scss';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import store from "../store";

let persistor = persistStore(store);

function MyApp({ Component, pageProps}) {
    return (<>
            <Head>
                <title>...Stater template...</title>
                <meta name="discription" content="This is nextjs template."/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    );
}

export default MyApp;