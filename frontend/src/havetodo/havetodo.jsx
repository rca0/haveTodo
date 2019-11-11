import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class haveTodo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Register' />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}
