import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import useStyles from './styles';
import useTransactions from '../../useTransactions';
import {Chart,ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
    Chart.register(ArcElement)

const DetailsCard = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData}/>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;