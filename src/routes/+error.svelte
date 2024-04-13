<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	async function goBack(defaultRoute = '/') {
		window.history.back();
	}

	async function goHome() {
		goto('/');
	}
</script>

<section class="">
	<div class="container mx-auto flex min-h-screen items-center px-6 py-3">
		<div class="mx-auto flex max-w-sm flex-col items-center text-center">
			<p class="rounded-xl bg-blue-50 p-3 text-sm font-medium text-blue-500 dark:bg-gray-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
					/>
				</svg>
			</p>
			<h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
				Page not found
			</h1>
			<p class="mt-4 text-gray-500 dark:text-gray-400">
				The page you are looking for doesn't exist. Here are some helpful links:
			</p>

			<div class="mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
				<button class="variant-filled-primary btn" on:click={async () => goBack()}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5 rtl:rotate-180"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
						/>
					</svg>
					<span>Go back</span>
				</button>

				<button class="variant-filled btn" on:click={async () => goHome()}> Take me home </button>
			</div>
		</div>
	</div>
</section>
