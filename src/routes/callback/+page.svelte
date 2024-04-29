<script>
    import { onMount } from "svelte";

    // Components
    import Button from "../../components/Button.svelte";

    // Imports
    import auth from "../../lib/auth/oidcAuthService";
    import { idPortenRequest } from "../../lib/useApi"
    import { goto } from "$app/navigation";
    
    let tokens
    onMount(async () => {
        const url = window.location.href
        const codePre = url.split('=')[1]
        const code = codePre.split('&')[0]
        const state = url.split('=')[3]
        const verifier = (window.localStorage.getItem(`oidc.${state}`))
        let verifierObj = {}

        if(verifier) {
            verifierObj = JSON.parse(verifier)
        }

        const tokenInfo = {
            code: code,
            state: state,
            verifier: verifierObj.code_verifier,
            redirect_uri: verifierObj.redirect_uri
        }
        const idPortenTokens = idPortenRequest('post', 'idPortenToken', tokenInfo)
        tokens = await idPortenTokens
        console.log(tokens)
        if(tokens.status === 200) {
            const accessToken = {
                token: tokens.data.access_token,
                expires_in: tokens.data.expires_in
            }
            const refreshToken = {
                token: tokens.data.refresh_token,
                expires_in: tokens.data.refresh_token_expires_in
            }
            const idToken = {
                token: tokens.data.id_token,
            }
            // Setter tokens i local storage
            localStorage.setItem(`accestoken.${state}`, JSON.stringify(accessToken))
            localStorage.setItem(`refresh_token.${state}`, JSON.stringify(refreshToken))
            localStorage.setItem(`id_token.${state}`, JSON.stringify(idToken))
            goto(`${window.location.origin}/authenticated`)
        }
    })
    
    
</script>

<main>
    <h1>Checking token...</h1>
</main>