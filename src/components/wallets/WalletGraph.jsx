import React from 'react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
function WalletGraph({ transactions }) {
  console.log('transaction from graph', transactions)
  const [chartData, setChartData] = useState({
    options: {
       
     
      chart: {
        id: 'basic-line',
      
        foreColor: 'white',
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
      
        toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          },
       
      },
      stroke: {
        curve: 'smooth',
        width: '3',
      },

      tooltip: {
        enabled: false,
      },

      xaxis: {
        categories: transactions.map((transaction) =>
          new Date(transaction.created).toLocaleDateString(),
        ),
      },
    },

    
        series: [
          {
            name: 'krysto',
            data: transactions.map((transaction) =>
              transaction.amountMony.toFixed(4),
            ).reverse(),
          },
        ],
      })



  console.log(chartData.series[0].data)

  return (
    <div className="mixed-chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  )
}

export default WalletGraph
