import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import useDepartments from '../../hooks/useDepartments';
import Layout from '../../components/Layout';
import { useQuiz } from '../../hooks/useQuiz';
import { BarChart, CartesianGrid, XAxis, Tooltip, YAxis, Legend, Bar } from 'recharts';

const WinnerPage = ({ history }) => {
  const { winningDept } = useQuiz();
  const { departments } = useDepartments();
  let data = [];
  departments && departments.map(dept => {
    const { label, score } = dept;
    data.push({ label, score })
  })
  //const data = results && Object.keys(results).map(dept => ({ name: dept, score: results[dept].score, totalUsers: results[dept].totalUsers, totalParticipated: results[dept].totalParticipated }))
  // const data = [
  //   {
  //     "department": "CMES",
  //     "score": 2400,
  //   },
  //   {
  //     "department": "MD",
  //     "score": 1398,
  //   },
  // ]
  return (
    <Layout>
      {
        winningDept ? (
          <div>
            <Typography variant="h6" align="center" style={{ marginBottom: 20, color: '#1b5e20' }}>
              And the winner is,
            </Typography>
            <Typography variant="h3" align="center" style={{ textTransform: "capitalize", marginBottom: 20, color: '#1b5e20' }}>
              {winningDept.label}
            </Typography>
            <BarChart width={600} height={400} data={data} layout="vertical" margin={{ left: 50 }}>
              <XAxis type="number" />
              <YAxis dataKey="label" reversed type="category" />
              <Tooltip />
              <Bar dataKey="score" fill="#f57f17" barSize={5} />
            </BarChart>
          </div>
        ) : (
            <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}>
              Final result will be available here soon
        </Typography>
          )
      }

    </Layout >
  );
}

export default withRouter(WinnerPage);