import { StatelessComponent } from 'react'
import Link from 'next/link'
import { Button } from 'antd'
import { ResponsiveBar } from '@nivo/bar'

const Home: StatelessComponent = () => {
  return (
    <>
      <h1>Data portal WASH Mali</h1>
      <p>
        In this portal X, Y, Z. Please see the menu above for insights and data
        visualisations <strong>per WASH theme</strong>, or go immediately to the{' '}
        <strong>raw data</strong>:
      </p>
      <p>
        <Link href="/data">
          <Button type="primary">View raw data</Button>
        </Link>
      </p>

      <h2>Overview of data by region</h2>
      <p>
        The graph below gives an overview of the main indicators by region used
        by the DNH. Namely: functionality rate, access rate and equipment rate.
        For more information, see the data and graphics section.
      </p>
      <div style={{ height: '35vh', maxWidth: '800px' }}>
        <ResponsiveBar
          data={[
            { Region: 'Keyes', PMH: 66.0, Puits: 47.0, SAEP: 70.0 },
            { Region: 'Koulikoro', PMH: 73.0, Puits: 64.0, SAEP: 74.0 },
            { Region: 'Sikasso', PMH: 74.0, Puits: 56.61, SAEP: 83.0 },
          ]}
          keys={['PMH', 'Puits', 'SAEP']}
          indexBy="Region"
          groupMode="grouped"
          colors={{ scheme: 'category10' }}
          margin={{ top: 25, right: 0, bottom: 100, left: 45 }}
          axisBottom={{
            legend: 'Region',
            legendPosition: 'middle',
            legendOffset: 60,
            tickRotation: -40,
          }}
          axisLeft={{
            legend: 'Percentages',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'top',
              direction: 'row',
              itemWidth: 85,
              itemHeight: 10,
              translateY: -25,
            },
          ]}
        />
      </div>
    </>
  )
}

export default Home
