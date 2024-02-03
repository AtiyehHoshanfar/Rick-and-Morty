import styled from "@emotion/styled";
import { Badge, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function Navbar() {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  return (
    <div>
      <div className="mx-auto container">
        <nav className="p-2 border-2 m-2 rounded-lg border-slate-200">
          <ul className="flex items-center justify-between sm:justify-around">
            <li>
              <img
                src="/public/image/b6740400-92d4-11ea-8a13-d5f6e0558e9b_prev_ui (1).png"
                className="w-12 h-12"
                alt="rick and morty logo"
              />
            </li>
            <li className="hidden sm:block">
              <input
                type="search"
                placeholder="search something ..."
                className="p-[6px] outline-none border-none rounded-md bg-slate-200 placeholder:text-sm"
              />
            </li>
            <li className="hidden sm:block font-bold text-lg">found x items</li>
            <li className="hidden sm:block">
              <Badge badgeContent={4} color="primary">
                <HiOutlineHeart
                  color="action"
                  className="text-2xl text-red-500"
                />
              </Badge>
            </li>
            <li>
              <button className="hidden sm:block">
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label="Theme"
                />
              </button>
            </li>
            <li className="sm:hidden">
              <button onClick={()=>setOpenHamburgerMenu(open=>!open)} className="text-2xl">
                <HiBars3 />
              </button>
            </li>
          </ul>
          {openHamburgerMenu && (
            <div className="sm:hidden flex justify-center">
              <div className="bg-slate-200 absolute w-[90%] p-2 rounded-lg m-auto">
                <ul>
                  <li className="p-2">
                    <input
                      type="search"
                      placeholder="search something ..."
                      className="w-[100%] p-2 bg-white outline-none border-none rounded-lg"
                    />
                  </li>
                  <li className="rounded-md p-2 hover:transition-all hover:font-bold hover:bg-slate-500">
                    Home
                  </li>
                  <li className="rounded-md p-2 hover:transition-all hover:font-bold hover:bg-slate-500">
                    Favorite
                  </li>
                  <li className="rounded-md p-2 hover:transition-all hover:font-bold hover:bg-slate-500">
                    Theme
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
