import React from "react";
import "./style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import {
  BusinessCenter,
  Chat,
  SupervisorAccount,
  Notifications,
} from "@material-ui/icons";
import HeaderOptions from "./HeaderOptions";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNjAuMDA3ODEyIDQyM2gtNzB2LTIyNmg3MHptNi45ODQzNzYtMjk4LjAwMzkwNmMwLTIyLjYyODkwNi0xOC4zNTkzNzYtNDAuOTk2MDk0LTQwLjk3NjU2My00MC45OTYwOTQtMjIuNzAzMTI1IDAtNDEuMDE1NjI1IDE4LjM2NzE4OC00MS4wMTU2MjUgNDAuOTk2MDk0IDAgMjIuNjM2NzE4IDE4LjMxMjUgNDEuMDAzOTA2IDQxLjAxNTYyNSA0MS4wMDM5MDYgMjIuNjE3MTg3IDAgNDAuOTc2NTYzLTE4LjM2NzE4OCA0MC45NzY1NjMtNDEuMDAzOTA2em0yNTUuMDA3ODEyIDE3My42Njc5NjhjMC02MC42Njc5NjgtMTIuODE2NDA2LTEwNS42NjQwNjItODMuNjg3NS0xMDUuNjY0MDYyLTM0LjA1NDY4OCAwLTU2LjkxNDA2MiAxNy4wMzEyNS02Ni4yNDYwOTQgMzQuNzQyMTg4aC0uMDY2NDA2di0zMC43NDIxODhoLTY4djIyNmg2OHYtMTEyLjIxMDkzOGMwLTI5LjM4NjcxOCA3LjQ4MDQ2OS01Ny44NTU0NjggNDMuOTA2MjUtNTcuODU1NDY4IDM1LjkyOTY4OCAwIDM3LjA5Mzc1IDMzLjYwNTQ2OCAzNy4wOTM3NSA1OS43MjI2NTZ2MTEwLjM0Mzc1aDY5em05MCAxNTMuMzM1OTM4di0zOTJjMC0zMy4wODU5MzgtMjYuOTE0MDYyLTYwLTYwLTYwaC0zOTJjLTMzLjA4NTkzOCAwLTYwIDI2LjkxNDA2Mi02MCA2MHYzOTJjMCAzMy4wODU5MzggMjYuOTE0MDYyIDYwIDYwIDYwaDM5MmMzMy4wODU5MzggMCA2MC0yNi45MTQwNjIgNjAtNjB6bS02MC00MTJjMTEuMDI3MzQ0IDAgMjAgOC45NzI2NTYgMjAgMjB2MzkyYzAgMTEuMDI3MzQ0LTguOTcyNjU2IDIwLTIwIDIwaC0zOTJjLTExLjAyNzM0NCAwLTIwLTguOTcyNjU2LTIwLTIwdi0zOTJjMC0xMS4wMjczNDQgOC45NzI2NTYtMjAgMjAtMjB6bTAgMCIvPjwvc3ZnPg=="
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
