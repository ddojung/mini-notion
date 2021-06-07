<script lang="ts">
	$: data = 'sojung';
	const data2 = 'lee';

	$: email = '';
	async function click() {
		const gauth = gapi.auth2.getAuthInstance();
		const user = await gauth.signIn();
		email = gauth.currentUser.get().getBasicProfile().getEmail();
	}
</script>

<p>{data} {data2}</p>
<button on:click="{click}">login</button>
{email}
