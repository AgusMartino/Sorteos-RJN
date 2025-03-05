"use client";
import React from "react";
import Link from "next/link";
import {
  Sheet,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Dropdown,
} from "@mui/joy";
import { House } from "lucide-react";

const Navbar = () => {
  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        gap: 1,
        height: "10vh",
      }}
    >
      <Link href="/">
        <IconButton>
          <House />
        </IconButton>
      </Link>
    </Sheet>
  );
};

export default Navbar;
