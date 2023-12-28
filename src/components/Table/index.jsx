import React from "react";
import Alert from "@/components/Alert";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { MdSearch } from "react-icons/md";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import EditModal from "@/components/Modal/EditModal.jsx";
import Modal from "@/components/Modal";
import { useDebounce } from "use-debounce";

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-[#94a3b8] bg-[#1e293b] text-sm border-collapse">
        <thead className="ltr:text-left rtl:text-right border-2 border-[#94a3b8]">
          <tr>
            <th className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              ID
            </th>
            <th className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              First-Name
            </th>
            <th className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              Last-Name
            </th>
            <th className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              Email
            </th>
            <th className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              John Doe
            </td>
            <td className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              24/05/1995
            </td>
            <td className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              Web Developer
            </td>
            <td className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              $120,000
            </td>
            <td className="border-2 border-[#94a3b8] whitespace-nowrap px-4 py-2">
              x
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
