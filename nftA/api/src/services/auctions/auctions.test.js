import {
  auctions,
  auction,
  createAuction,
  updateAuction,
  deleteAuction,
} from './auctions'

describe('auctions', () => {
  scenario('returns all auctions', async (scenario) => {
    const result = await auctions()

    expect(result.length).toEqual(Object.keys(scenario.auction).length)
  })

  scenario('returns a single auction', async (scenario) => {
    const result = await auction({ id: scenario.auction.one.id })

    expect(result).toEqual(scenario.auction.one)
  })

  scenario('creates a auction', async (scenario) => {
    const result = await createAuction({
      input: {
        address: 'String490403',
        name: 'String',
        winLength: 6228935,
        owner: 'String',
      },
    })

    expect(result.address).toEqual('String490403')
    expect(result.name).toEqual('String')
    expect(result.winLength).toEqual(6228935)
    expect(result.owner).toEqual('String')
  })

  scenario('updates a auction', async (scenario) => {
    const original = await auction({ id: scenario.auction.one.id })
    const result = await updateAuction({
      id: original.id,
      input: { address: 'String39307422' },
    })

    expect(result.address).toEqual('String39307422')
  })

  scenario('deletes a auction', async (scenario) => {
    const original = await deleteAuction({ id: scenario.auction.one.id })
    const result = await auction({ id: original.id })

    expect(result).toEqual(null)
  })
})
