import {
	$,
	component$,
	useSignal,
	useStore,
	useStylesScoped$,
	useTask$,
} from '@builder.io/qwik'

import styles from './header.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)

	const showConfig = useSignal(false)

	const showConfigHandler = $(() => {
		showConfig.value = !showConfig.value

		const body: CSSStyleDeclaration =
			document.getElementsByTagName('body')[0].style

		body.setProperty(
			'--body__header--height',
			`${showConfig.value ? '2rem' : '4rem'}`,
		)
	})

	return (
		<>
			{/* <div class='area-header' aria-hidden /> */}
			<button
				class={`config-button--${showConfig.value ? 'show' : 'hide'}`}
				id='header--config-button'
				aria-haspopup='true'
				aria-controls='header--config'
				onClick$={showConfigHandler}
			>
				<span class='inline-block scale-x-[4] text-amber-900'>^</span>
			</button>
			<header
				class='header'
				id='header--config'
				role='header--config'
				aria-labelledby='header--config-button'
			>
				<FontSize />
			</header>
		</>
	)
})

const FontSize = component$(() => {
	useStylesScoped$(styles)

	const fontSize = useSignal(2)

	const changeFontSize = $(() => {
		document.getElementsByTagName('html')[0].style.fontSize =
			`${fontSize.value * 0.5}rem`
	})

	const addFontSize = $(() => {
		if (fontSize.value < 4) ++fontSize.value
		changeFontSize()
	})

	const subFontSize = $(() => {
		if (fontSize.value > 1) --fontSize.value
		changeFontSize()
	})

	return (
		<div class='flex items-end gap-4' role='menuitem'>
			<button
				class='flex h-8 items-end justify-center text-xs'
				onClick$={subFontSize}
			>
				aA⁻
			</button>
			<div class='relative' aria-hidden>
				<div class='scale'>
					<div aria-posinset={1} />
					<div aria-posinset={2} />
					<div aria-posinset={3} />
					<div aria-posinset={4} />
					<div
						class='scale__ball'
						style={`--input--font-size_: ${fontSize.value};`}
					/>
				</div>
				<meter
					class='absolute left-0 right-0 top-1 h-8 w-full -translate-y-full opacity-0'
					value={fontSize.value}
					id='font-size'
					min={1}
					max={4}
					low={1}
					optimum={2}
					high={4}
				>
					{fontSize.value}/4
				</meter>
				<label class='sr-only' for='font-size'>
					Change Font Size
				</label>
			</div>
			<button
				class='flex h-8 items-end justify-center text-3xl'
				onClick$={addFontSize}
			>
				aA⁺
			</button>
		</div>
	)
})
