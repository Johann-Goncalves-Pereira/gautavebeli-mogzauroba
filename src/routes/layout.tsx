import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'

import styles from './layout.scss?inline'
import Header from '~/components/layout/header/header'
import SideLeft from '~/components/layout/side-left/side-left'
import SideRight from '~/components/layout/side-right/side-right'
import Footer from '~/components/layout/footer/footer'

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	})
}

export default component$(() => {
	useStylesScoped$(styles)

	return (
		<>
			<Header />
			<SideLeft />
			<main class='main'>
				<Slot />
			</main>
			<SideRight />
			<Footer />
		</>
	)
})
