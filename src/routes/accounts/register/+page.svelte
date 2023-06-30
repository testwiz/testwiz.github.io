<script>
    import { goto } from "$app/navigation";
    import { env } from "$env/dynamic/public";
    import cookie from "js-cookie";

    let username = "";
    let email = "";
    let password = "";
    let usernameTaken = false;

    const expireData = async () => {
        return fetch(`${env.PUBLIC_BACKEND_URL}/sessions/expires`)
            .then((d) => d.json())
            .then((d) => d.expires);
    };

    const register = async () => {
        if (
            username &&
            email &&
            password.length > 7 &&
            !(await checkUsername())
        ) {
            const req = await fetch(
                `${env.PUBLIC_BACKEND_URL}/accounts/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                    }),
                }
            );

            const expireDate = await expireData();

            cookie.set("auth_username", username);
            cookie.set("auth_session", await req.text());
            goto(
                `/?alert-success=You+have+been+registered+as+${encodeURIComponent(
                    username
                )}!`
            );
        }
    };

    const checkUsername = async () => {
        return await fetch(
            `${
                env.PUBLIC_BACKEND_URL
            }/accounts/exists/username?username=${encodeURIComponent(username)}`
        )
            .then((d) => d.json())
            .then((d) => d.exists);
    };
</script>

<div>
    <div class="d-flex justify-content-center align-items-center">
        <div>
            <h1>Register to <i>TestWiz</i></h1>
            <form style="width: 50vw">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        aria-describedby="username"
                        minlength="6"
                        maxlength="16"
                        required
                        on:change={async () =>
                            (usernameTaken = await checkUsername())}
                        bind:value={username}
                    />
                    <div
                        id="usernameTxt"
                        class="form-text"
                        style="color: red"
                        hidden={!usernameTaken}
                    >
                        The username was <b>taken</b>. Please
                        <b>try a new one</b>.
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="email"
                        required
                        bind:value={email}
                    />
                    <div id="emailTxt" class="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        minlength="8"
                        required
                        bind:value={password}
                    />
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                    on:click={register}>Submit</button
                >
            </form>
        </div>
    </div>
</div>
