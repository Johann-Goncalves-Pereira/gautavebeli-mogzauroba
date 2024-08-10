import { component$, useStylesScoped$ } from '@builder.io/qwik'

import styles from './side-right.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)
	return (
		<>
			<div class='area-side--right' aria-hidden />
			<aside class='side--right'></aside>
		</>
	)
})
