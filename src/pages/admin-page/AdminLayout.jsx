import React, { Fragment, useCallback, useEffect } from "react";
import { getAdminPage } from "src/services/user";

export default function AdminLayout() {
  return (
    <Fragment>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
