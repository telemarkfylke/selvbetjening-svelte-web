<script>
    // Components
    import Button from "../../components/Button.svelte";

    // Imports
    import auth from "../../lib/auth/oidcAuthService";

</script>

<main>
    <h1>Du er logget inn!</h1>
    <Button removeSlots={true} buttonText={"Logg ut med ID-Porten"} onClick={() => {
        auth.logout()
        localStorage.clear()
    }} />
</main>