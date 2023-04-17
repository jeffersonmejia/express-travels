import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'
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
