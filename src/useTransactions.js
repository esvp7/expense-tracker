import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; 
ChartJS.register(ArcElement, Tooltip, Legend);

const useTransactions = (title) => {
  resetCategories();
  const { state } = useContext(ExpenseTrackerContext);
  const rightTransactions = state.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
    tooltips: {
    callbacks: {
    label: function(tooltipItem, data) {
      var index = tooltipItem.index;
      return chartData.labels[index];
    }
  }
}

  };
  return { filteredCategories, total, chartData };
};

export default useTransactions;