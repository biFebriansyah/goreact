import React, { Component, useState, useEffect } from 'react'
import style from './sample.module.css'

class Sample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'ebiebi',
            textDefault: 'text disni ..'
        }
    }

    componentDidMount() {
        console.log('didmount done')
    }

    componentDidUpdate() {
        console.log('didupdate done')
    }

    inpuChange = (el) => {
        this.setState({ textDefault: el.target.value })
    }

    render() {
        return (
            <div className={style.container}>
                <form>
                    <div className="form-group">
                        <h2>{this.state.textDefault}</h2>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={this.inpuChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function Samples() {
    const [value, setValue] = useState('Text disini ..')

    useEffect(() => {
        console.log('side effect')

        // willUnmount
        return () => {
            console.log('unmount')
        }
    })

    const inputChange = (el) => {
        setValue(el.target.value)
    }

    return (
        <div className={style.container}>
            <form>
                <div className="form-group">
                    <h2>{value}</h2>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={inputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Samples
