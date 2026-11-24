function Login() {
  return (
    <div className="flex min-h-screen justify-center bg-background text-text">
      <div className="flex flex-col items-center bg-box-fill m-9 rounded-xl h-fit p-5">
        <div>
          <h1>Wezen</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 m-5">
          <button className="w-32 py-2 px-4 rounded-xl border border-secondary bg-secondary text-nav-text hover:bg-nav-text hover:text-secondary">
            Bejelentkezés
          </button>
          <button className="w-32 py-2 px-4 rounded-xl border border-secondary bg-secondary text-nav-text hover:bg-nav-text hover:text-secondary">
            Regisztráció
          </button>
        </div>
        <div className="justify-start w-64">
          <div className="flex flex-col gap-3">
            <label className="w-auto" htmlFor="">
              Email / Felhasználónév
            </label>
            <input
              className="w-auto rounded-l border border-secondary bg-white p-1 text-text"
              type="text"
              placeholder="abc@email.com / Felhnev1"
            />
            <label className="w-auto" htmlFor="">
              Jelszó
            </label>
            <input
              className="w-auto rounded-l border border-secondary bg-white p-1 text-text"
              type="text"
              placeholder="*****"
            />
          </div>
          <div className="justify-center text-center">
            <button className="my-5 w-64 rounded-xl border border-secondary bg-secondary py-2 text-nav-text hover:bg-nav-text hover:text-secondary">
              Bejelentkezés
            </button>
          </div>
          <div className="justify-center text-center">
            <a href="" className="justify-center text-center text-secondary">
              Elfelejtett jelszó
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
