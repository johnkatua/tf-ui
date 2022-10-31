import React from 'react'

const Table = ({ tableHeadData, tableData }) => {
  return (
    <div className="leaderboard--table__container">
      <table>
        <thead>
          <tr>
            {tableHeadData?.map((item) => (
              <th>
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {tableData?.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.profit}</td>
                <td>{item.equity}</td>
                <td>{item.accountSize}</td>
                <td>{item.gain}</td>
                <td>{item.country}</td>
                <td>{item.icon}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table