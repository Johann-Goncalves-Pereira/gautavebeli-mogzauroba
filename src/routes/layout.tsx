import { component$, Slot } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'

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
	return (
		<>
			<header class='col-span-3 row-start-1 row-end-1 h-4'></header>
			<aside class='gird col-start-1 col-end-1 row-start-2 row-end-2 w-4'></aside>
			<aside class='gird col-start-3 col-end-3 row-start-2 row-end-2 w-4'></aside>
			<main class='col-start-2 col-end-2 row-start-2 row-end-2 m-2 rounded-lg border border-amber-800 bg-stone-900'>
				<Slot />
			</main>
			<footer class='col-span-3 row-start-3 row-end-3 h-4 [&~*]:fixed'></footer>
		</>
	)
})
