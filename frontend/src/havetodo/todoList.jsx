import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending } from './havetodoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}>
                    </IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}>
                    </IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                      onClick={() => props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({
    markAsDone, markAsPending
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
