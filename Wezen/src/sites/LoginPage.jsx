import { useState } from "react";

function LoginForm({ onShowRegister }) {
  return (
    <div className="m-auto mt-10 flex h-fit w-fit flex-col items-center rounded-xl bg-box-fill p-5">
      <div>
        <h1>Wezen - Bejelentkezés</h1>
      </div>
      <div className="m-5 flex flex-row items-center justify-center gap-5">
        <button
          type="button"
          className="w-32 rounded-xl border border-secondary bg-disable px-4 py-2 opacity-25 text-nav-text "
        >
          Bejelentkezés
        </button>
        <button
          onClick={onShowRegister}
          className="w-32 rounded-xl border border-secondary bg-secondary px-4 py-2 text-nav-text hover:bg-nav-text hover:text-secondary"
        >
          Regisztráció
        </button>
      </div>
      <div className="w-64 justify-start">
        <div className="flex flex-col gap-3">
          <label className="w-auto" htmlFor="loginname">
            Email / Felhasználónév
          </label>
          <input
            id="loginname"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="text"
            placeholder="abc@email.com / Felhnev1"
            name="loginname"
          />
          <label className="w-auto" htmlFor="loginpassword">
            Jelszó
          </label>
          <input
            id="loginpassword"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="text"
            placeholder="*****"
            name="loginpassword"
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
  );
}

function RegisterForm({ onShowLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordAgain: "",
    fullName: "",
    username: "",
  });
  const [touched, setTouched] = useState({});

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const passwordRules = [
    {
      label: "Kis- és nagybetűt is tartalmaz",
      isValid: /[a-z]/.test(form.password) && /[A-Z]/.test(form.password),
    },
    {
      label: "Legalább 8 karakter",
      isValid: form.password.length >= 8,
    },
    {
      label: "Legalább egy számot tartalmaz",
      isValid: /\d/.test(form.password),
    },
  ];
  const passwordIsValid = passwordRules.every((rule) => rule.isValid);
  const passwordAgainIsValid =
    form.passwordAgain.length > 0 && form.passwordAgain === form.password;
  const fullNameIsValid = form.fullName.trim().length > 0;
  const usernameIsValid = form.username.trim().length > 0;
  const formIsValid =
    emailIsValid &&
    passwordIsValid &&
    passwordAgainIsValid &&
    fullNameIsValid &&
    usernameIsValid;

  const updateField = (field) => (event) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: event.target.value,
    }));
  };

  const markTouched = (field) => () => {
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
  };

  return (
    <div className="m-auto my-10 flex h-fit w-fit flex-col items-center rounded-xl bg-box-fill p-5">
      <div>
        <h1>Wezen - Regisztráció</h1>
      </div>
      <div className="m-5 flex flex-row items-center justify-center gap-5">
        <button
          onClick={onShowLogin}
          className="w-32 rounded-xl border border-secondary bg-secondary px-4 py-2 text-nav-text hover:bg-nav-text hover:text-secondary"
        >
          Bejelentkezés
        </button>
        <button
          type="button"
          className="w-32 rounded-xl border border-secondary bg-disable px-4 py-2 text-nav-text opacity-25"
        >
          Regisztráció
        </button>
      </div>
      <form className="w-64 justify-start" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-3">
          <label className="w-auto" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="email"
            placeholder="abc@email.com"
            name="email"
            value={form.email}
            onChange={updateField("email")}
            onBlur={markTouched("email")}
            aria-invalid={(touched.email || form.email.length > 0) && !emailIsValid}
          />
          {(touched.email || form.email.length > 0) && !emailIsValid && (
            <p className="text-xs text-red-600" role="alert">
              Hibás email-formátum.
            </p>
          )}

          <label className="w-auto" htmlFor="register-password">
            Jelszó
          </label>
          <input
            id="register-password"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="password"
            placeholder="*****"
            name="password"
            value={form.password}
            onChange={updateField("password")}
            aria-invalid={!passwordIsValid}
          />
          <div
            className="flex flex-col gap-1 rounded-xl border border-secondary bg-white p-2 text-xs"
            
          >
            {passwordRules.map((rule) => (
              <p
                key={rule.label}
                className={rule.isValid ? "text-green-600" : "text-red-600"}
              >
                <span aria-hidden="true">{rule.isValid ? "✓" : "×"}</span>{" "}
                {rule.label}
              </p>
            ))}
          </div>

          <label className="w-auto" htmlFor="register-password-again">
            Jelszó újra
          </label>
          <input
            id="register-password-again"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="password"
            placeholder="*****"
            name="passwordagain"
            value={form.passwordAgain}
            onChange={updateField("passwordAgain")}
            onBlur={markTouched("passwordAgain")}
            aria-invalid={
              (touched.passwordAgain || form.passwordAgain.length > 0) &&
              !passwordAgainIsValid
            }
          />
          {(touched.passwordAgain || form.passwordAgain.length > 0) &&
            !passwordAgainIsValid && (
              <p className="text-xs text-red-600" role="alert">
                A jelszavak nem egyeznek.
              </p>
            )}

          <label className="w-auto" htmlFor="register-fullname">
            Teljes név
          </label>
          <input
            id="register-fullname"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="text"
            placeholder="Jonh Doe"
            name="fullname"
            value={form.fullName}
            onChange={updateField("fullName")}
            onBlur={markTouched("fullName")}
            aria-invalid={touched.fullName && !fullNameIsValid}
          />
          {touched.fullName && !fullNameIsValid && (
            <p className="text-xs text-red-600" role="alert">
              A teljes név megadása kötelező.
            </p>
          )}

          <label className="w-auto" htmlFor="register-username">
            Felhasználónév
          </label>
          <input
            id="register-username"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="text"
            placeholder="Felhasználónév"
            name="username"
            value={form.username}
            onChange={updateField("username")}
            onBlur={markTouched("username")}
            aria-invalid={touched.username && !usernameIsValid}
          />
          {touched.username && !usernameIsValid && (
            <p className="text-xs text-red-600" role="alert">
              A felhasználónév megadása kötelező.
            </p>
          )}

          <p className="text-xs">Minden mező kitöltése kötelező</p>
        </div>
        <div className="justify-center text-center">
          <button
            type="submit"
            disabled={!formIsValid}
            className="my-5 w-64 rounded-xl border border-secondary bg-secondary py-2 text-nav-text hover:bg-nav-text hover:text-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Regisztráció
          </button>
        </div>
      </form>
    </div>
  );
}

function Login() {
  const [loginState, setLoginState] = useState("login");

  if (loginState === "login") {
    return <LoginForm onShowRegister={() => setLoginState("register")} />;
  }

  return <RegisterForm onShowLogin={() => setLoginState("login")} />;
}

export default Login;
