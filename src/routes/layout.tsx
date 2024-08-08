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
			<div class='fixed grid h-dvh w-full grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]'>
				<header class='col-span-3 row-start-1 row-end-1 h-4'></header>
				<aside class='col-start-1 col-end-1 row-start-2 row-end-2 w-4'></aside>
				<aside class='col-start-3 col-end-3 row-start-2 row-end-2 w-4'></aside>

				<div class='grid-cols-read shadow-hide-black pointer-events-none grid overflow-hidden rounded-lg border border-amber-900'>
					<div
						class='col-start-1 col-end-1 rounded-bl-lg rounded-tl-lg bg-stone-900'
						aria-hidden
					/>
					<div
						class='col-start-3 col-end-3 rounded-br-lg rounded-tr-lg bg-stone-900'
						aria-hidden
					/>
				</div>

				<footer class='col-span-3 row-start-3 row-end-3 h-4'></footer>
			</div>

			<main class='w-read px-read shadow-hide-page mx-auto min-h-dvh translate-y-[calc(1rem+2px)] border-amber-900 bg-stone-900 py-4'>
				<Slot />
			</main>

			<div class='fixed inset-x-8 top-px mx-auto h-8 w-auto -translate-y-4 border-b border-amber-900 bg-stone-950' />
			<div class='fixed inset-x-8 bottom-px mx-auto h-8 w-auto translate-y-4 border-t border-amber-900 bg-stone-950' />
		</>
	)
})
