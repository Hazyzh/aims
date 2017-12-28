import React from 'react'
import PropTypes from 'prop-types'

const DetailTitle = ({aimDetailInfo}) =>
  <div>
    <h3>{aimDetailInfo.aim_title}</h3>
  </div>

DetailTitle.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired
}

export default DetailTitle
