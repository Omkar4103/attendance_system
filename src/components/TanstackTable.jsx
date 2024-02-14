import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { USERS } from "../data";
  import { useState } from "react";
  import DownloadBtn from "./DownloadBtn";
  import DebouncedInput from "./DebouncedInput";
  import { SearchIcon } from "../Icons/Icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
  
  const TanStackTable = () => {
    const columnHelper = createColumnHelper();
  
    const columns = [
      columnHelper.accessor("", {
        id: "S.No",
        cell: (info) => <span>{info.row.index + 1}</span>,
        header: "S.No",
      }),
      columnHelper.accessor("profile", {
        cell: (info) => (
          <img
            src={info?.getValue()}
            alt="..."
            className="rounded-full w-10 h-10 object-cover"
          />
        ),
        header: "Profile",
      }),
      columnHelper.accessor("firstName", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "First Name",
      }),
      columnHelper.accessor("lastName", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Last Name",
      }),
      columnHelper.accessor("age", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Age",
      }),
      columnHelper.accessor("visits", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Visits",
      }),
      columnHelper.accessor("progress", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Progress",
      }),
    ];
    const [data] = useState(() => [...USERS]);
    const [globalFilter, setGlobalFilter] = useState("");
  
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  
    return (
      
<div className="">
  <Navbar />
      <div className=" flex justify-center mt-40 p-2 max-w-5xl mx-auto text-white fill-gray-400  ">

<div className="card glass w-max-xl ">
  <figure><img src="https://img.freepik.com/free-vector/gradient-red-calendar_78370-3839.jpg?size=626&ext=jpg&ga=GA1.1.1689616785.1707232963&semt=sph" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Sync your work!</h2>
    <div className="card-actions justify-end">
    <button className="btn btn-ghost bg-l_orange text-black transition-all duration-300 hover:text-d_orange hover:border-d_orange mt-5 mr-44">Add calendar</button>
    </div>
  </div>
</div>

  <div className="divider divider-horizontal "></div>

  <div className="flex flex-col w-full border-opacity-50 h-40  ">

<div className="  ">
          {/* <div className="w-full flex items-center gap-1">
            <SearchIcon />
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
              placeholder="Search all columns..."
            />
          </div> */}
          <DownloadBtn className=" flex justify-start mr " data={data} fileName={"peoples"} />
        </div>

  <div className="divider"></div>

  <div className="flex justify-center ">
        <table className="border border-gray-700 w-full text-left ">
          <thead className="bg-l_orange text-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`
                  ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>

</div>





      

        {/* pagination */}
        
        {/* <div className="flex items-center justify-end mt-2 gap-2">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>
  
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-transparent"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div> */}

      </div>
      
      </div>
      
    );
  };
  
  export default TanStackTable;
  