import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Dashboard() {
  const user = localStorage.user;

  const navigate = useNavigate();

  function handleLogout() {
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
      title: "Signed out successfully",
    });
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <div className="mb-4 md:mr-2 md:mb-0">
        <h2 className="font-bold text-xl">Welcome {user}</h2>
      </div>
      <div className="md:ml-2">
        <button
          onClick={() => handleLogout()}
          className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
        >
          Logout
        </button>
      </div>
    </>
  );
}
