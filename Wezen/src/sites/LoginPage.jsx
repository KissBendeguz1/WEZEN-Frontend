import axios from "axios";
import { useState } from "react";

function getRequestErrorMessage(error, action) {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data;
    const responseMessage =
      typeof responseData === "string"
        ? responseData
        : responseData &&
            typeof responseData === "object" &&
            "message" in responseData &&
            typeof responseData.message === "string"
          ? responseData.message
          : "";

    return (
      responseMessage.trim() ||
      (error.response
        ? `${action} sikertelen (HTTP ${error.response.status}).`
        : "Nem sikerült elérni a szervert.")
    );
  }

  return `Váratlan hiba történt a ${action} során.`;
}

function LoginForm({ onShowRegister }) {
  const [credentials, setCredentials] = useState({ identifier: "", password: "" });
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const identifier = credentials.identifier.trim();
  const identifierLooksLikeEmail = identifier.includes("@");
  const identifierIsValid =
    identifier.length > 0 &&
    (!identifierLooksLikeEmail ||
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier));
  const passwordIsValid = credentials.password.length > 0;
  const formIsValid = identifierIsValid && passwordIsValid;

  const updateCredential = (field) => (event) => {
    setCredentials((currentCredentials) => ({
      ...currentCredentials,
      [field]: event.target.value,
    }));
    setSubmitError("");
    setSubmitSuccess("");
  };

  const markTouched = (field) => () => {
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formIsValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      await axios.post(
        "/Login/Login",
        {
          username: identifier,
          password: credentials.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      setSubmitSuccess("Sikeres bejelentkezés.");
    } catch (error) {
      setSubmitError(getRequestErrorMessage(error, "A bejelentkezés"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-auto mt-10 flex h-fit w-fit flex-col items-center rounded-xl bg-box-fill p-5 text-text">
      <div className="text-secondary">
        <h1 className="text-text">Wezen</h1>
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
      <form className="w-64 justify-start" onSubmit={handleSubmit} noValidate>
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
            value={credentials.identifier}
            onChange={updateCredential("identifier")}
            onBlur={markTouched("identifier")}
            aria-invalid={
              (touched.identifier || identifier.length > 0) &&
              !identifierIsValid
            }
          />
          {(touched.identifier || identifier.length > 0) &&
            !identifierIsValid && (
              <p className="text-xs text-red-600" role="alert">
                {identifier.length === 0
                  ? "Az email vagy felhasználónév megadása kötelező."
                  : "Hibás email-formátum."}
              </p>
            )}
          <label className="w-auto" htmlFor="loginpassword">
            Jelszó
          </label>
          <input
            id="loginpassword"
            className="w-auto rounded-xl border border-secondary bg-white p-1 text-text"
            type="password"
            placeholder="*****"
            name="loginpassword"
            value={credentials.password}
            onChange={updateCredential("password")}
            onBlur={markTouched("password")}
            aria-invalid={touched.password && !passwordIsValid}
          />
          {touched.password && !passwordIsValid && (
            <p className="text-xs text-red-600" role="alert">
              A jelszó megadása kötelező.
            </p>
          )}
        </div>
        {submitError && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {submitError}
          </p>
        )}
        {submitSuccess && (
          <p className="mt-3 text-sm text-secondary" role="status">
            {submitSuccess}
          </p>
        )}
        <div className="justify-center text-center">
          <button
            type="submit"
            disabled={!formIsValid || isSubmitting}
            className="my-5 w-64 rounded-xl border border-secondary bg-secondary py-2 text-nav-text hover:bg-nav-text hover:text-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Bejelentkezés..." : "Bejelentkezés"}
          </button>
        </div>
        <div className="justify-center text-center">
          <a href="" className="justify-center text-center text-secondary">
            Elfelejtett jelszó
          </a>
        </div>
      </form>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

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
    setSubmitError("");
    setSubmitSuccess("");
  };

  const markTouched = (field) => () => {
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formIsValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      await axios.post(
        "/Login/newUser",
        {
          name: form.fullName.trim(),
          username: form.username.trim(),
          email: form.email.trim(),
          password: form.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      setSubmitSuccess("Sikeres regisztráció.");
    } catch (error) {
      setSubmitError(getRequestErrorMessage(error, "A regisztráció"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-auto my-10 flex h-fit w-fit flex-col items-center rounded-xl bg-box-fill p-5 text-text">
      <div>
        <h1>Wezen</h1>
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
        {submitError && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {submitError}
          </p>
        )}
        {submitSuccess && (
          <p className="mt-3 text-sm text-secondary" role="status">
            {submitSuccess}
          </p>
        )}
        <div className="justify-center text-center">
          <button
            type="submit"
            disabled={!formIsValid || isSubmitting}
            className="my-5 w-64 rounded-xl border border-secondary bg-secondary py-2 text-nav-text hover:bg-nav-text hover:text-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Regisztráció..." : "Regisztráció"}
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
