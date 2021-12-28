import React, { Component } from 'react'

let val1;
let val2;
let space;
let eqspace;

export default class calc extends Component {
    constructor() {
        super()
        this.state = {
            str: "",
            eqstr: "",
            spstr: [],
            value: "Ans",
            eq: "",
            err: ""
        }
    }

    handleClick = (values) => {
        this.setState((prevState) => ({
            str: prevState.str + values,
            eqstr: prevState.eqstr + values,

        }));
    }

    handleOperation = (values) => {
        if (this.state.eqstr.includes('+')) { this.state.eq = '+'; } else
            if (this.state.eqstr.includes('~')) { this.state.eq = '~'; } else
                if (this.state.eqstr.includes('*')) { this.state.eq = '*'; } else
                    if (this.state.eqstr.includes('/')) { this.state.eq = '/'; }
                    else { this.state.eq = ''; }

        if (this.state.eq != '') {
            this.state.spstr = this.state.eqstr.split(this.state.eq);
            if (this.state.spstr[1] == "" || this.state.spstr[0] == "") {
                this.setState({
                    str: "",
                    eqstr: "",
                    err: "Illegal Operation",
                    value: "Ans"
                })
            } else if (this.state.spstr[1] == "0" && this.state.eq == '/') {
                this.setState({
                    str: "",
                    eqstr: "",
                    err: "Illegal Operation, divide by  0",
                    value: "Ans"
                })
            }
            else {
                val1 = Number(this.state.spstr[0]);
                val2 = Number(this.state.spstr[1]);

                switch (this.state.eq) {
                    case '+': this.state.value = val1 + val2;
                        break;
                    case '~': this.state.value = val1 - val2;
                        break;
                    case '*': this.state.value = val1 * val2;
                        break;
                    case '/': this.state.value = val1 / val2;
                        break;
                }
                eqspace = this.state.value + values;
                space = this.state.value.toFixed(2);
                this.setState({
                    eqstr: eqspace, value: space
                });
            }
        }
        else {
            this.setState((prevState) => ({
                eqstr: prevState.eqstr + values,
                value: "Ans", err: ""
            }));
        }
        this.setState((prevState) => ({
            str: prevState.str + values
        }));
    }

    handleClear = () => {
        this.setState({
            str: "",
            eqstr: "",
            value: "Ans",
            err: ""
        });
    }

    handleSolve = () => {
        if (this.state.eqstr.includes('+')) { this.state.eq = '+'; } else
            if (this.state.eqstr.includes('~')) { this.state.eq = '~'; } else
                if (this.state.eqstr.includes('*')) { this.state.eq = '*'; } else
                    if (this.state.eqstr.includes('/')) { this.state.eq = '/'; }

        this.state.spstr = this.state.eqstr.split(this.state.eq);
        if (this.state.spstr[1] == "0" && this.state.eq == '/') {
            this.setState({
                str: "",
                eqstr: "",
                err: "Illegal Operation, divide by  0",
                value: "Ans"
            })

        } else {
            val1 = Number(this.state.spstr[0]);
            val2 = Number(this.state.spstr[1]);

            switch (this.state.eq) {
                case '+': this.state.value = val1 + val2; break;
                case '~': this.state.value = val1 - val2; break;
                case '*': this.state.value = val1 * val2; break;
                case '/': this.state.value = val1 / val2; break;

            }
            space = this.state.value.toFixed(2);
            this.setState({
                err: "",
                value: space
            });
        }
    }

    render() {
        return (
            <div className="App">
                <div className="jumbotron">
                    <h1 className="display-3 text-success font-weight-bold"> <i className="fa fa-calculator" aria-hidden="true" /> React
                        Calculator</h1>
                    <p className="lead">Implement Your Calculation</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod veritatis rem optio aut iure nihil
                        dignissimos cumque quas odio delectus, officiis tempora? Dolores autem obcaecati ex magnam, atque eveniet.</p>
                    <hr className="my-2" />
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4" />
                            <div className="col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 alert alert-success border border-success">
                                <div className="row">
                                    <div className="h1 col-12 text-success">SHIVAM'S CALCULATOR <i className="fa fa-calculator" aria-hidden="true" />
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-9 col-sm-9 col-xl-9 px-0 mx-0  form-check-inline">
                                        <input type="text" className="text-right border border-success alert alert-light form-control form-control-lg" defaultValue={this.state.str} />
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0  form-check-inline">
                                        <div className="alert-light alert form-check-inline border border-success">
                                            <span className="alert-light text-success font-weight-bold">{this.state.value}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-danger">{this.state.err}</div>
                                <div className="border-top border-success" />
                                <br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1  form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(1)} value={1} className="btn btn-success btn-lg">1</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1  form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(2)} value={2} className="btn btn-success btn-lg">2</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0  py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(3)} value={3} className="btn btn-success btn-lg">3</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0  py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleOperation('+')} value="+" className="btn btn-dark btn-lg">+</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(4)} value={4} className="btn btn-success btn-lg">4</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(5)} value={5} className="btn btn-success btn-lg">5</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(6)} value={6} className="btn btn-success btn-lg">6</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleOperation('~')} value="-" className="btn btn-dark  btn-lg">-</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(7)} value={7} className="btn btn-success btn-lg">7</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(8)} value={8} className="btn btn-success btn-lg">8</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(9)} value={9} className="btn btn-success btn-lg">9</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3  px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleOperation('*')} value="*" className="btn btn-dark  btn-lg">x</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={this.handleClear} value="C" className=" btn btn-danger btn-lg">C</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" onClick={() => this.handleClick(0)} value={0} className="btn btn-success btn-lg">0</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" value="=" onClick={this.handleSolve} className="btn btn-success btn-lg">=</button>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3 col-sm-3 col-xl-3 px-0 mx-0 py-1 my-1 form-check-inline">
                                            <button type="button" value="/" onClick={() => this.handleOperation('/')} className="btn btn-dark  btn-lg">/</button>
                                        </div>
                                    </div>
                                    <div className="border-bottom my-3 border-success" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}