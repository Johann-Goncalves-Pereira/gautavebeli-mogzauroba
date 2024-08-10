import { component$, useStylesScoped$ } from '@builder.io/qwik'

import styles from './header.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)
	return (
		<>
			<div class='area-header' aria-hidden />
			<header class='header'></header>
		</>
	)
})
