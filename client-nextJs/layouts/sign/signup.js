import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";
import { ButtonLink } from "../components/ButtonLink";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const submitSignUp = () => {
    const body = { email, password, repassword };
    axios.post("/signup", body).then(() => {
      toast.success("Бүртгэл амжилттай");
      navigate("/signin");
    });
  };
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Системд нэвтрэх
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                submitSignUp();
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
              <InputGroup
                label="Нууц үг давтах"
                placeholder="*********"
                required={true}
                type="password"
                value={repassword}
                onChange={setRepassword}
              />
              <Button type="submit">Бүртгүүлэх</Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Бүртгэлтэй хэрэглэгч?{" "}
                <Link to={"/login"}>
                  <ButtonLink>Нэвтрэх</ButtonLink>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
