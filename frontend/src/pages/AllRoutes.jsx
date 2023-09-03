import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dragon from './Dragon'
import Home from './Home'
import Capsules from './Capsules'
import Flacon from './Flacon'
import Startship from './Startship'
import Rideshare from './Rideshare'

const AllRoutes = () => {
  return (
    <Routes>
      {/* Define routes for different components */}
      <Route path="/" element={<Home/>}/> {/* Route for the Home component */}
      <Route path="/dragon" element={<Dragon/>}/> {/* Route for the Dragon component */}
      <Route path="/capsule" element={<Capsules/>}/> {/* Route for the Capsules component */}
      <Route path="/flacon" element={<Flacon/>}/> {/* Route for the Flacon component */}
      <Route path="/startship" element={<Startship/>}/> {/* Route for the Startship component */}
      <Route path="/rideshare" element={<Rideshare/>}/> {/* Route for the Rideshare component */}
    </Routes>
  )
}

export default AllRoutes
