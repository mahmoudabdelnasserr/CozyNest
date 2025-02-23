import { useContext, useState } from "react";
import { UsersContext } from "../stores/UsersContext";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  let { setUserToken } = useContext(UsersContext);
  function logout() {
    localStorage.removeItem("token");
    setUserToken(null);
    navigate("/login");
  }
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-transparent text-black rounded-md hover:bg-transparent"
      >
        My account <i className="fa-solid fa-caret-down"></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My profile
            </li>
            <li
              onClick={() => logout()}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
