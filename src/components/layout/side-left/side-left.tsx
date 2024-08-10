import { component$, useStylesScoped$ } from '@builder.io/qwik'

import styles from './side-left.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)
	return (
		<>
			<div class='area-side--left' aria-hidden />
			<aside class='side--left'></aside>
		</>
	)
})
