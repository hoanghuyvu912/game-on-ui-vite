import React, { useCallback, useEffect } from "react";
import { getAdminPage } from "src/services/user";

export default function AdminPage() {
  const fetchAdminPage = useCallback(async () => {
    const result = await getAdminPage();
    console.log(result);
  }, []);

  useEffect(() => {
    fetchAdminPage();
  }, [fetchAdminPage]);

  return <div>AdminPage</div>;
}
