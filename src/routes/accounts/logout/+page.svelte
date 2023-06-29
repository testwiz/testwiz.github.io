<script>
    import { goto } from "$app/navigation";
    import cookie from "js-cookie";

    cookie.remove("auth_username");
    cookie.remove("auth_session");

    goto("/?alert-danger=Logged+out+from+account.");
</script>

<div>
    <h1>Logging Out...</h1>
</div>
