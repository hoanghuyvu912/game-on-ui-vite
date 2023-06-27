"use client";
import { Sidebar } from "flowbite-react";
import React, { useState } from "react";
import {
  HiHome,
  HiUserGroup,
  HiOutlineDocumentDuplicate,
  HiUser,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const [active, setActive] = useState(null);

  const navigate = useNavigate();

  const sideBarItem = [
    { id: 1, name: "Back to homepage", path: "/", icon: HiHome },
    {
      id: 2,
      name: "Developers",
      path: "/admin/developers-management",
      icon: HiUserGroup,
    },

    {
      id: 3,
      name: "Publishers",
      path: "/admin/publishers-management",
      icon: HiUserGroup,
    },
    {
      id: 4,
      name: "Receipts",
      path: "/admin/receipts-management",
      icon: HiOutlineDocumentDuplicate,
    },
    { id: 5, name: "Users", path: "/admin/users-management", icon: HiUser },
  ];

  const renderSideBarItem = sideBarItem.map((item) => {
    return (
      <Sidebar.Item href="#" icon={item.icon} key={item.id}>
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
