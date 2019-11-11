import React, { Component } from 'react'
import axio from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import Axios from 'axios'

const URL = 'http://localhost:3000/v1/api/todos'

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
        let description = this.state.description
        Axios.post(URL, { description })
            .then(resp => console.log('ok'))
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
