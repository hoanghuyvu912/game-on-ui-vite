"use client";
import { Sidebar } from "flowbite-react";
import React, { useState } from "react";
import {
  HiArrowSmRight,
  HiUsers,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const [active, setActive] = useState(null);

  const navigate = useNavigate();

  const sideBarItem = [
    { id: 1, name: "Home", path: "/admin" },
    { id: 2, name: "Developer", path: "/admin/developer" },
    { id: 2, name: "Receipt", path: "/admin/receipt" },
  ];

  const renderSideBarItem = sideBarItem.map((item) => {
    return (
      <Sidebar.Item href="#" icon={HiUsers} key={item.id}>
        <div
          onClick={() => {
            navigate(item.path);
            setActive(item.id);
          }}
        >
          {item.name}
        </div>
      </Sidebar.Item>
    );
  });

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>{renderSideBarItem}</Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
