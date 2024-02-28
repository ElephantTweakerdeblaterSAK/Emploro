<script lang="ts">
	
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
		
		
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				
				<img src="EmploroLogo.png" alt="" width="50" height="100">
				<strong class="text-xl uppercase">Emploro</strong>
			</svelte:fragment>
			<div class="space-x-40">
				<a
					class="btn !bg-transparent"
					href="/"
					
					rel="noreferrer"
				>
					Home
		
				</a>
				<a
				class="btn !bg-transparent"
				href="/about"
		
				rel="noreferrer"
			>
				About US
	
			</a>
				
			</div>
			

			
			
			
			<svelte:fragment slot="trail">
				
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/pGUyCEAq"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.youtube.com/@ElephantTechXgaming"
					target="_blank"
					rel="noreferrer"
				>
					YouTube
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://nas.io/emploro-elephant-comunity?uuid=8834fe61-3dc8-4f40-a4ae-937a1a285d24"
					target="_blank"
					rel="noreferrer"
				>
					Nas io
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/ElephantTweakerdeblaterSAK"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<slot />
</AppShell>



<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1]  blur-[50px] transition-all;
		animation: pulse 10s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 7s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/100;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
