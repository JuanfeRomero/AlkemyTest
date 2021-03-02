const Login = () => {
    return (
        <>
            <form action="" method="post">
                <label htmlFor="user">User or Email</label>
                <input type="email" name="user" id="user" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
                <a href="./signup">Sign Up</a>
                <a href="./recover">Forgot my password</a>
            </form>
        </>
    );
};

export default Login;
