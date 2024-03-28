/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';

import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
//import { graph } from '../../../backend/models/dashboardData';


const Home = () => {


  const [graphs, setGraph] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/graphs').then((res) => {
      setGraph(res.data);
      console.log(res.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    })

  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Graphs</h1>
        <Link to='/dummy'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' ></MdOutlineAddBox>

        </Link>
      </div>
      {
        loading ? (
          <Spinner />
        ) : (
          <table>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>id</th>
                <th className='border border-slate-600 rounded-md'>title</th>
                <th className='border border-slate-600 rounded-md'>owner</th>
                <th className='border border-slate-600 rounded-md'>publishYear</th>
              </tr>
            </thead>
            <tbody>
              {graphs.map((graph, index) => (
                <tr key={graph._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {index + 1}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {graph.title}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {graph.owner}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {graph.publishYear}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default Home