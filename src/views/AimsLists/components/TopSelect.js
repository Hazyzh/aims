import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Radio } from 'antd'
const RadioGroup = Radio.Group

const options = [
  { label: '全部', value: '-1' },
  { label: '未完成', value: '0' },
  { label: '已完成', value: '1' },
  { label: '已放弃', value: '2' }
]

const TopSelect = ({selected, onSelect}) =>
  <div className='top-select-box'>
    <RadioGroup
      options={options}
      value={selected}
      onChange={e => onSelect(e.target.value)} />
    <Divider
      dashed />
  </div>

TopSelect.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default TopSelect
