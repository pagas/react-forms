import React, {Component} from 'react';
import {FormValidator} from "../forms/FormValidator";
import {ValidationMessage} from "../forms/ValidationMessage";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bob",
            email: "",
            flavors: ["Vanilla"],
            size: "small",
            toppings: ["Strawberries"],
            cone: "Waffle cone",
            orderDetails: ""
        }

        this.flavors = ["Chocolate", "Strawberries", "White Chocolate", "Vanilla"];
        this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
        this.cones = ["Waffle cone", "Sugar cone", "Chocolate dipper", "Gluten free"];
        this.sizes = ["small", "medium", "large"];
        this.rules = {
            name: {required: true, minlength: 3, alpha: true},
            email: {required: true, email: true},
            orderDetails: {required: true}
        }
    }

    updateFormValues = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    updateFormValueOptions = (event) => {
        let options = [...event.target.options]
            .filter(options => options.selected)
            .map(options => options.value);
        this.setState({[event.target.name]: options},
            () => this.props.submit(this.state)
        );
    }

    updateFormValueCheck = (event) => {
        event.persist();
        this.setState(state => {
            if (event.target.checked) {
                state.flavors.push(event.target.name);
            } else {
                const index = state.flavors.indexOf(event.target.name);
                state.flavors.splice(index, 1);
            }
        }, () => this.props.submit(this.state))
    }

    generateIdWithPrefix = (prefix, name) => {
        return `${prefix}_${name}`;
    }

    render() {
        return <div className='h5 bg-info text-white p-2'>
            <FormValidator data={this.state} rules={this.rules} submit={this.props.submit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input className="form-control"
                           name="name"
                           value={this.state.name}
                           onChange={this.updateFormValues}
                    />
                    <ValidationMessage field="name"/>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input className="form-control"
                           name="email"
                           value={this.state.email}
                           onChange={this.updateFormValues}
                    />
                    <ValidationMessage field="email"/>
                </div>
                <div className="form-group">
                    <label>Order Details</label>
                    <textarea className="form-control"
                              name="orderDetails"
                              value={this.state.orderDetails}
                              onChange={this.updateFormValues}
                    ></textarea>
                    <ValidationMessage field="orderDetails"/>
                </div>
            </FormValidator>

            <div className='form-group'>
                <label>Ice Cream Size</label>
                <select className='form-control'
                        name='size'
                        value={this.state.size}
                        onChange={this.updateFormValueOptions}
                >
                    {this.sizes.map(
                        size =>
                            <option value={size} key={size}>
                                {size}
                            </option>
                    )}
                </select>
            </div>


            <div className='form-group'>
                <label>Ice Cream Flavors</label>
                {this.flavors.map(flavor =>
                    <div className='form-check' key={flavor}>
                        <input type="checkbox" className='form-check-input'
                               name={flavor}
                               id={this.generateIdWithPrefix('flavor', flavor)}
                               checked={this.state.flavors.indexOf(flavor) > -1}
                               onChange={this.updateFormValueCheck}
                        />
                        <label className='form-check-label' htmlFor={this.generateIdWithPrefix('flavor', flavor)}>
                            {flavor}
                        </label>
                    </div>
                )}
            </div>

            <div className='form-group'>
                <label>Ice Cream Toppings</label>
                <select className='form-control'
                        name='flavor'
                        multiple={true}
                        value={this.state.topping}
                        onChange={this.updateFormValueOptions}
                >
                    {this.toppings.map(
                        topping =>
                            <option value={topping} key={topping}>
                                {topping}
                            </option>
                    )}
                </select>
            </div>

            <div className='form-group'>
                <label>Ice Cream Cones</label>
                {this.cones.map(cone =>
                    <div className='form-check' key={cone}>
                        <input type="radio" className='form-check-input'
                               name='cone'
                               id={this.generateIdWithPrefix('cone', cone)}
                               value={cone}
                               checked={this.state.cone === cone}
                               onChange={this.updateFormValues}
                        />
                        <label className='form-check-label' htmlFor={this.generateIdWithPrefix('cone', cone)}>
                            {cone}
                        </label>
                    </div>
                )}
            </div>


        </div>
    }
}
