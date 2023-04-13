import '../styles/globals.css'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Footer />
		</Provider>
	)
}

const wrapper = createWrapper(() => store)

export default wrapper.withRedux(MyApp)
