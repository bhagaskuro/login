import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  // requirement
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  // local state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // function
  function handleForm(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function loginUser(payload) {
    const { username, password } = user;
    if (payload.username === "") {
      Swal.fire({
        icon: "error",
        text: "Username is empty",
      });
    } else if (payload.password === "") {
      Swal.fire({
        icon: "error",
        text: "Password is empty",
      });
    } else if (payload.username !== username || payload.password !== password) {
      Swal.fire({
        icon: "error",
        text: "Username or Password is wrong",
      });
    } else {
      localStorage.user = formData.username;
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      navigate("/dashboard");
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    loginUser(formData);
  }
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full ">
          <div className="w-5/12 hidden lg:flex flex-col justify-center items-center bg-zinc-900 rounded-tl-3xl rounded-bl-3xl">
            <form action="">
              <div className="w-[393px] h-[396px] flex-col justify-start items-start gap-12 inline-flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-12 flex">
                    <div className="flex-col justify-start items-start gap-3 flex">
                      <div className="text-white text-5xl font-bold font-['Poppins']">
                        Login
                      </div>
                      <div className="text-white text-opacity-70 text-base font-medium font-['Poppins']">
                        Enter your account details
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="h-9 flex-col justify-start items-start gap-3 flex">
                        <div className="flex items-center border-b border-gray-500 ">
                          <input
                            type="text"
                            placeholder="username"
                            onChange={handleForm}
                            name="username"
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="h-9 flex-col justify-start items-start gap-3 flex w-full">
                        <div className="justify-start items-start gap-[280px] inline-flex">
                          <div className="flex items-center border-b border-gray-500 ">
                            <input
                              type="password"
                              placeholder="password"
                              onChange={handleForm}
                              name="password"
                              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/"
                    className="text-white text-opacity-50 text-base font-normal font-['Poppins']"
                  >
                    <p className="text-center font-semibold">
                      Forgot Password?
                    </p>
                  </a>
                </div>
                <button
                  onClick={handleLogin}
                  type="submit"
                  className="w-[393px] py-3 bg-violet-500 rounded-xl justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-white text-base font-normal font-['Poppins']">
                    Login
                  </div>
                </button>
              </div>
            </form>
            <div className="absolute bottom-10 items-center gap-[67px] inline-flex">
              <div className="text-white text-opacity-50 text-base font-normal font-['Poppins']">
                Don’t have an account?
              </div>
              <div className="h-12 px-6 py-3 bg-neutral-700 text-white rounded-lg justify-center items-center gap-2.5 flex">
                <button>Sign Up</button>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col max-w-full justify-center px-24 relative  bg-violet-500 rounded-tr-3xl rounded-br-3xl"></div>
        </div>
      </div>
    </>
  );
}
