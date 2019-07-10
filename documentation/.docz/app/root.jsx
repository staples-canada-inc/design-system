import React from 'react'
import { Link, Router, Routes } from 'docz'

import Theme from 'src/theme/index'

import { imports } from './imports'
import database from './db.json'

const Root = () => {
  return (
    <Theme linkComponent={Link} db={database}>
      <Routes imports={imports} />
    </Theme>
  )
}

export default Root
