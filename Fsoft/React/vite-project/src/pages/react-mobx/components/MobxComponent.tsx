import React, { Fragment ,useState } from 'react'
import HeaderMobX from './Header'
import FooterMobX from './Footer'

const MobxComponent = () => {
    const [value, setValue] = useState<number>(0)
  return (
    <Fragment>
        <HeaderMobX />
        <FooterMobX />
    </Fragment>
  )
}

export default MobxComponent