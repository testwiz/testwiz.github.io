<script>
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div>
    <div>
        <Navbar></Navbar>
    </div>
    <main>
        <slot></slot>
    </main>
    <div>
        <Footer></Footer>
    </div>
</div>