import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {api} from "../../base/axios";

const TableChamp = () => {
  const [table, setTable] = useState([]);


  const getTable = () => {
    api.get('/table').then((res) => {
      setTable(res.data)
    })
  }

  useEffect(() => {
    getTable()
  }, [])

  return (
    <div>
      <Table style={{zIndex: 100,marginTop:36}} striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>№</th>
          <th className="d-none d-lg-block">Команда</th>
          <th className="d-block d-lg-none"></th>
          <th>И</th>
          <th>В</th>
          <th>ОТВ</th>
          <th>П</th>
          <th>ОТП</th>
          <th>ЗМ</th>
          <th>ПМ</th>
          <th>О</th>
        </tr>
        </thead>
        <tbody>
        {table
        .slice()
        .sort((a, b) => b.score - a.score)
        .map((obj,index)=>(
          <tr key={obj._id}>
          <td className='text-center'>{index +1}</td>
          <td className="d-flex align-items-center">
          <img className="logo-table "
          alt='logo-table'
          src={obj.logoTeam}
          />
          <div style={{fontSize:14}} className="d-none d-lg-block">{obj.nameTeam}</div>
          </td>
          <td className='text-center'>{obj.games}</td>
          <td className='text-center'>{obj.wins}</td>
          <td className='text-center'>{obj.winsOverTime}</td>
          <td className='text-center'>{obj.loss}</td>
          <td className='text-center'>{obj.loseOverTime}</td>
          <td className='text-center'>{obj.goalBall}</td>
          <td className='text-center'>{obj.missBall}</td>
          <td className='text-center'>{obj.score}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableChamp;