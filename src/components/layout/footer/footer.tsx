import { component$, useStylesScoped$ } from '@builder.io/qwik'

import styles from './footer.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)
	return (
		<>
			<div class='area-footer' aria-hidden />

			<footer class='footer'></footer>
		</>
	)
})
