import React from 'react';

// Props Interface
interface TableProps {
    headings: string[]; // Table headings
    data: Array<{ [key: string]: any }>; // Table rows ka data
}

const TableCompo: React.FC<TableProps> = ({ headings, data }) => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table className='w-full border-collapse md:min-w-[unset] min-w-[800px]'>
                <thead>
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index} className='p-[8px] py-6 font-normal text-xl lg:text-2xl bg-[#1e1e1e] text-white w-[20%]'>
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className='table-customrow'>
                            {headings.map((heading, colIndex) => (
                                <td key={colIndex} className='table-customtd border-[1px] border-white border-opacity-20 p-[8px] py-5 text-center text-white '>
                                    {row[heading] !== undefined && row[heading] !== null && row[heading] !== '' ? row[heading] : 'no data'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableCompo;
