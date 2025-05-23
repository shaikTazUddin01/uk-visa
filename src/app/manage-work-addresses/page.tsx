import React from "react";

const ManageWorkAddresses = () => {
  return (
    <div className="max-w-2xl mx-auto text-[8px] md:text-xs">
      <h1 className="text-[8px] md:text-lg text-blue-900 font-bold mt-3">
        Manage work addresses
      </h1>

      <p className="mt-1 mb-3 text-[8px] md:text-xs">
        Manage your saved work addresses or add new addresses. Any saved work
        addresses are shown below.
      </p>
      <p className="mt-1 mb-3 text-[8px] md:text-xs">
        The <strong className="text-blue-900">Address identifier</strong> can be
        chosen to edit a saved address, or choose{" "}
        <strong className="text-blue-900">Add</strong> to add a new address.
        When choosing an{" "}
        <strong className="text-blue-900">Address identifier</strong>, it is
        recommended that you choose something meaningful, such as a road or
        building name so that it can be easily identified when completing a CoS
        or editing the work address.
        <br />
        <br />
        Alternatively, choose <strong className="text-blue-900">Back</strong> to
        return to the previous screen.
      </p>

      <p className="mt-1 mb-3 text-[8px] md:text-xs">
        <strong className="text-blue-900">Please note,</strong> changes made
        here will not take effect in any CoS that you have already assigned
        using an address from this list, nor does adding a new work address from
        this page constitute our approval of a new branch, linked entity or
        partner institution. If you wish to add a branch, linked entity or
        partner institution to your licence, please do so by selecting{" "}
        <strong className="text-blue-900">
          Request any other change to your licence details
        </strong>{" "}
        from the{" "}
        <strong className="text-blue-900">
          Request change to licence details
        </strong>{" "}
        menu.
      </p>

      <div className="max-w-4xl mx-auto bg-gray-100 p-1 rounded-lg shadow-md">
        <h2 className="text-[8px] md:text-xs font-bold bg-gray-200 ">Work addresses</h2>
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-blue-50 text-left text-[8px] md:text-xs">
              <th className="border border-gray-300 p-1 font-bold">
                Address identifier
              </th>
              <th className="border border-gray-300 p-1 font-bold">
                Address line 1
              </th>
              <th className="border border-gray-300 p-1 font-bold">
                City or town
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {addresses.map((address) => (
            <tr key={address.id} className="bg-white">
              <td className="border border-gray-300 p-2">{address.id}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full p-1 border border-gray-300"
                  value={address.line1}
                  onChange={(e) => {
                    const updated = addresses.map((a) =>
                      a.id === address.id ? { ...a, line1: e.target.value } : a
                    );
                    setAddresses(updated);
                  }}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full p-1 border border-gray-300"
                  value={address.city}
                  onChange={(e) => {
                    const updated = addresses.map((a) =>
                      a.id === address.id ? { ...a, city: e.target.value } : a
                    );
                    setAddresses(updated);
                  }}
                />
              </td>
            </tr>
          ))} */}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end gap-2">
          <button className="p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[8px] md:text-xs font-semibold">
            Add
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <button className="px-2 p-1 bg-gradient-to-t from-[#10254E] to-[#496192] text-white text-[8px] md:text-xs font-semibold">
          Back
        </button>
      </div>
    </div>
  );
};

export default ManageWorkAddresses;
