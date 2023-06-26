"use client";
import { Sidebar } from "flowbite-react";
import React, { useState } from "react";
import {
  HiHome,
  HiUserGroup,
  HiOutlineDocumentDuplicate,
  HiUser
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const [active, setActive] = useState(null);

  

  const navigate = useNavigate();

  const sideBarItem = [
    { id: 1, name: "Home", path: "/admin", icon: HiHome },
    { id: 2, name: "Developer", path: "/admin/developer", icon: HiUserGroup },
    { id: 3, name: "Receipt", path: "/admin/receipt", icon: HiOutlineDocumentDuplicate },
    { id: 4, name: "User", path: "/admin/user", icon: HiUser },
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
    <Sidebar  aria-label="Default sidebar example" >
      <Sidebar.Items>
        <Sidebar.ItemGroup >{renderSideBarItem}</Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
