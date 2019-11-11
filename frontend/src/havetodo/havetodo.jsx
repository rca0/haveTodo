import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class haveTodo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(evt) {
        this.setState({
            ...this.state,
            description: evt.target.value
        })
    }

    handleAdd() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Register' />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}
