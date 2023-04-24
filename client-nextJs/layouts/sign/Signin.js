import { InputGroup } from "../components/InputGroup";
// import { Button } from "../components/Button";
// import { ButtonLink } from "../components/ButtonLink";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "@hooks/useCurrentUser";
import Cookies from "js-cookie";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useCurrentUser();

  const submitSignIn = () => {
    axios.post("/signin", { email, password }).then((res) => {
      const body = res.data;
      Cookies.set("token", body.token);
      // localStorage.setItem("token", body.token);
      setCurrentUser(body.user);
      toast.success("Амжилттай нэвтэрлээ");
      navigate("/home");
    });
  };
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Системд бүртгүүлэх
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                submitSignIn();
              }}
            >
              <InputGroup
                label="И-Мэйл"
                placeholder="email@example.com"
                required={true}
                type="email"
                value={email}
                onChange={setEmail}
              />
              <InputGroup
                label="Нууц үг"
                placeholder="*********"
                required={true}
                type="password"
                value={password}
                onChange={setPassword}
              />
              <Button type="submit">Нэвтрэх</Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Бүртгэлгүй хэрэглэгч?{" "}
                <Link to={"/register"}>
                  {/* <ButtonLink>Бүртүүлэх</ButtonLink> */}
                  <p>Бүртүүлэх</p>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
