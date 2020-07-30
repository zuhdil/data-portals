import { StatelessComponent } from 'react'
import { DatasourceProps } from '../libs/data-types'
import useSWR from 'swr'
import { ResponsiveBar } from '@nivo/bar'
import fetcher from '../libs/fetcher'

const GroupBarChart: StatelessComponent<DatasourceProps> = ({
  source,
  ...args
}) => {
  const { data, error } = useSWR(source, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <ResponsiveBar
      data={data}
      groupMode="grouped"
      colors={{ scheme: 'category10' }}
      {...args}
    />
  )
}

export default GroupBarChart
