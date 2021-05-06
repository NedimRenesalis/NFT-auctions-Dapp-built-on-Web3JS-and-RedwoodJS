import { db } from 'src/lib/db'

export const auctions = () => {
  return db.auction.findMany()
}

export const auction = ({ id }) => {
  return db.auction.findUnique({
    where: { id },
  })
}

export const createAuction = ({ input }) => {
  return db.auction.create({
    data: input,
  })
}

export const updateAuction = ({ id, input }) => {
  return db.auction.update({
    data: input,
    where: { id },
  })
}

export const deleteAuction = ({ id }) => {
  return db.auction.delete({
    where: { id },
  })
}
