import React, { useState } from "react";

export default function UserForm() {
  const [customerId, setCustomerId] = useState("");

  const handleCustomerIDchange = (event) => {
    setCustomerId(event.target.value);
  };
  console.log(customerId);

  return (
    <form>
      <fieldset>
        <div>
          <label htmlFor="customerId"></label>
          <input
            type="number"
            placeholder="customerId"
            className="text-black"
            onChange={handleCustomerIDchange}
          />
        </div>
      </fieldset>
    </form>
  );
}
