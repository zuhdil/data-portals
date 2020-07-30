import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { server, rest } from '../mocks/server'
import GroupBarChart from '../../components/GroupBarChart'

describe('GroupBarChart', () => {
  it('shold handle api response error', async () => {
    const sourceUrl = 'http://api.test/site-points.geojson'
    server.use(
      rest.get(sourceUrl, (_, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    const { getByText } = render(<GroupBarChart source={sourceUrl} />)

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

    const el = getByText(/failed/)

    expect(el).toBeVisible()
  })
})
