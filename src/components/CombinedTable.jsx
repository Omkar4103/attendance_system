// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
// import DownloadBtn from './DownloadBtn';
// import DebouncedInput from './DebouncedInput';
// import { SearchIcon } from '../Icons/Icons';
// import { getUsersData } from '../utils/api'; // Import function to fetch data from backend
// import Footer from './Footer';

// const CombinedTable = () => {
//   const columnHelper = createColumnHelper();

//   const columns = [
//     columnHelper.accessor('', {
//       id: 'S.No',
//       cell: (info) => <span>{info.row.index + 1}</span>,
//       header: 'S.No',
//     }),
//     columnHelper.accessor('profile', {
//       cell: (info) => (
//         <img src={info?.getValue()} alt="..." className="rounded-full w-10 h-10 object-cover" />
//       ),
//       header: 'Profile',
//     }),
//     columnHelper.accessor('firstName', {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: 'First Name',
//     }),
//     columnHelper.accessor('lastName', {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: 'Last Name',
//     }),
//     columnHelper.accessor('age', {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: 'Age',
//     }),
//     columnHelper.accessor('visits', {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: 'Visits',
//     }),
//     columnHelper.accessor('progress', {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: 'Progress',
//     }),
//   ];

//   const [data, setData] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState('');
//   const history = useNavigate(); // Initialize useHistory hook

//   // Function to handle navigation back to detection page
//   const handleBackToDetection = () => {
//     history('/');
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getUsersData(); // Fetch data from backend
//         setData(response.data); // Set the fetched data to state
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       globalFilter,
//     },
//     getFilteredRowModel: getFilteredRowModel(),
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   return (
//     <div>
//       <div className="card glass w-max-xl">
//         <figure>
//           <img src="https://img.freepik.com/free-vector/gradient-red-calendar_78370-3839.jpg?size=626&ext=jpg&ga=GA1.1.1689616785.1707232963&semt=sph" alt="car!" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Sync your work!</h2>
//           <div className="card-actions justify-end">
//             <button className="btn btn-ghost bg-l_orange text-black transition-all duration-300 hover:text-d_orange hover:border-d_orange mt-5 mr-44">Add calendar</button>
//           </div>
//         </div>
//       </div>

//       <div className="divider divider-horizontal"></div>

//       <div className="flex flex-col w-full border-opacity-50 h-40">

//         <div className="  ">
//           <DownloadBtn className=" flex justify-start mr " data={data} fileName={"peoples"} />
//         </div>

//         <div className="divider"></div>

//         <div className="flex justify-center ">
//           <table className="border border-gray-700 w-full text-left ">
//             <thead className="bg-l_orange text-black">
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <tr key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => (
//                     <th key={header.id} className="capitalize px-3.5 py-2">
//                       {flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody>
//               {table.getRowModel().rows.length ? (
//                 table.getRowModel().rows.map((row, i) => (
//                   <tr
//                     key={row.id}
//                     className={`
//                     ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
//                     `}
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <td key={cell.id} className="px-3.5 py-2">
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </td>
//                     ))}
//                   </tr>
//                 ))
//               ) : (
//                 <tr className="text-center h-32">
//                   <td colSpan={12}>No Recoard Found!</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default CombinedTable;
