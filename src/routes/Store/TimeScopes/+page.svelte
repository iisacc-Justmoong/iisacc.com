<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header />

<div class="container">
	<img class="appicon" src="/images/app/Time Scopes.png" alt="Time Scopes"/>
	<h1 class="app-name">Time Scopes</h1>
	<div class="description">
		<p>Time Scopes is a life time tracker. It shows to you remaining your lifetime and other informations. We are live and you're officially invited to see what's new. Download on the App Store today. Click under button to go to App Store.</p>
		<p>
			Sometimes we get lazy, or we often forget how much value our lives are. Humans are very clever animals, but they often do not understand the value of time properly, such as spending 2 hours to get a coupon that is less than an hour's salary. The value of time is so great that it can't be priced. Nevertheless, this valuable time is wasted meaninglessly.
		</p>
		<p>
			Look back on the past time and clearly recognize the time left for you in the future. I've spent more time than I thought, and I've been given less time than I thought. Look at the past time and given time from various angles. Simply reading the date can give you a new sense that you never felt. The new sense gained in this way will give you a better passion. The lives of those who know the value of time and those who don't are very different.
		</p>
		<p>
			There is no more waste of time. You can check the time that has passed and the remaining time in your hands at any time.
		</p>
	</div>
	<a class="appstore" href="https://apps.apple.com/kr/app/time-scopes/id6747707757?l=en-GB
Time Scopes">
		<img class="appstore" src="/images/appstore.svg" alt="App Store"/>
	</a>
	<img class="qrcode" src="/images/app/TimeScopes-qr-code.png" alt="QR Code">
	<a class="privacy"href="/Store/TimeScopes/Privacy">Privacy policy</a>
</div>

<Footer />

<style>

	.container {
			width: 720px;
			max-width: 100%;
			margin-left: auto;
			margin-right: auto;
  }
	p{
			margin-bottom: 16px;
	}
	img {
			width: 128px;
			height: 128px;
			border-radius: 32px;
	}
	.appicon {
			margin-bottom: 16px;
			aspect-ratio: 1.1;
	}
	.app-name {
			text-align: center;
			margin-top: 32px;
			margin-bottom: 32px;
	}
  .qrcode {
      width: 256px;
      height: 256px;
      margin-top: 32px;
      margin-bottom: 32px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 0;
  }
  .appstore {
      width: 200px;
      height: 62px;
      margin-top: 128px;
      margin-bottom: 128px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
  }
	.privacy {
			margin-top: 32px;
	}

</style>