import React, { useEffect, useState } from 'react';
import './App.scss';
import AverageHashrateSelect from './components/AverageHashrateSelect';
import { GeneralData } from './models/general-data.model';
import AnimatedValue from './components/AnimatedValue';
import MinerList from './components/MinerList';
import { WorkerData } from './models/woker-data';

const minerAddress = '0x8b1E76E9f3727dDEB842746735eD427Cc93Ac41c';

function App() {

  const [nanoData, setNanoData] = useState<null | {data: GeneralData}>(null);

  const [minerData, setMinerData] = useState<null | {data: Array<WorkerData>}>(null);

  const [averageHashTime, setTime] = useState(1);

  useEffect(() => {
    fetch(`https://api.nanopool.org/v1/eth/user/${minerAddress}`)
      .then(response => response.json())
      .then(res => setNanoData(res));
  }, []);

  // useEffect(() => {
  //   fetch(`https://api.nanopool.org/v1/eth/workers/${minerAddress}`)
  //     .then(response => response.json())
  //     .then(res => setMinerData(res));
  // }, [nanoData]);

  if(!!!nanoData) return (<span>loading...</span>);

  return (
    <div className="App">
      <p className="header">{nanoData!.data!.account}</p>
      <div className="top-container">
        <div className="current">
          <h5>Current Hashrate</h5>
          <AnimatedValue decimals={0} value={nanoData!.data.hashrate} />
        </div>

        <div className="balance">
          <h5>Eth Balance</h5>
          <AnimatedValue decimals={10} value={nanoData!.data.balance} />
        </div>

        <div className="average">
          <h5>Average Hashrate</h5>
          <p>{nanoData!.data!.avgHashrate[`h${averageHashTime}`]}</p>
          <AverageHashrateSelect currentOption={averageHashTime} changeOption={(time: any) => setTime(time)} />
        </div>
      </div>
      {/* <div className="table-container">
        <h5>Workers</h5>
        <MinerList workerData={minerData!.data} />
      </div> */}
    </div>
  );
}

export default App;
