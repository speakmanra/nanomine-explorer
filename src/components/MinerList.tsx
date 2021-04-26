import React from 'react'
import { WorkerData } from '../models/woker-data'

export default function MinerList(props: {workerData: Array<WorkerData>}) {
  const { workerData } = props;
  return (
    <div>
      <table>
      <tr>
        <th>Name</th>
        <th>Hashrate</th>
        <th>Last Share</th>
        <th>Rating</th>
      </tr>
      {workerData.map(worker => {
        return (
          <tr>
            <td>{worker.id}</td>
            <td>{worker.hashrate}</td>
            <td>{worker.lastShare}</td>
            <td>{worker.rating}</td>
          </tr>
        )
      })}
      </table>
    </div>
  )
}
