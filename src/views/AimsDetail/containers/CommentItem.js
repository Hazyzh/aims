import ComponentItem from '../components/CommentItem.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleCommentState } from '@/actions/aimDetail_action.js'

const mapStateToProps = ({aimDetail, user}) => ({
  stateMap: aimDetail.commentToggleState
})

const mapDispatchToProps = dispatch => ({
  clickHandler: bindActionCreators(toggleCommentState, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentItem)
