<script>
    // Components
    import Button from "../components/Button.svelte";
    
    // Imports
    import auth from "../lib/auth/oidcAuthService";
    
</script>
<main>
    
    <h1>Selvbetjening</h1>

    <Button buttonText={"Login med ID-Porten"} onClick={ () => auth.login()}  removeSlots={true} />

</main>
