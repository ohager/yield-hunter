import React, { useEffect } from 'react'
import { Hero } from '../../components/hero'
import { FieldsCarousel } from './fieldsCarousel'
import { Avatar } from '../../components/avatar'
import { BestFarmersList } from './bestFarmersList'
import { useFarmlands } from './hooks/useFarmLands'

export const Home = () => {
  const { farmLands } = useFarmlands()
  return (
    <>
      <Hero bg="img/farmland.small.png">
        <div className="relative flex items-center h-full">
          {farmLands && <FieldsCarousel farmLands={farmLands} />}
        </div>
      </Hero>
      <section className="flex flex-row w-full">
        <div className="h-80 w-2/3 p-4 bg-gray-700 text-gray-50">
          <h1 className="text-4xl">Yield Hunter</h1>
          <h2 className="text-2xl">The innovative lucky game</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="p-4 h-80 bg-gray-600 text-gray-100 w-1/3">
          <h1 className="text-2xl">Best Farmers</h1>
          <BestFarmersList />
        </div>
      </section>
      <section className="flex flex-row w-full">
        <div className="h-80 w-1/2 p-4 bg-green-600">
          <h1 className="text-4xl">Farmers</h1>
          <h2 className="text-2xl">Plant and win</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="h-80 w-1/2 p-4 bg-indigo-700">
          <h1 className="text-4xl">Lords</h1>
          <h2 className="text-2xl">Stake, lend and win</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <p>{JSON.stringify(farmLands, null, '\t')}</p>
    </>
  )
}
