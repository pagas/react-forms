import React, {Component} from 'react';

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bob",
            flavor: "Vanilla",
            toppings: ["Strawberries"]
        }

        this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
        this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
    }

    updateFormValues = (event) => {
        this.setState({[event.target.name]: event.target.value},
            () => this.props.submit(this.state)
        )
    }

    updateFormValueOptions = (event) => {
        let options = [...event.target.options]
            .filter(options => options.selected)
            .map(options => options.value);
        this.setState({[event.target.name]: options},
            () => this.props.submit(this.state)
        );
    }

    render() {
        return <div className='h5 bg-info text-white p-2'>
            <div className='form-group'>
                <label>Name</label>
                <input className="form-control"
                       name="name"
                       value={this.state.name}
                       onChange={this.updateFormValues}
                />
            </div>


            <div className='form-group'>
                <label>Ice Cream Flavors</label>
                <select className='form-control'
                        name='flavor'
                        value={this.state.flavor}
                        onChange={this.updateFormValueOptions}
                >
                    {this.flavors.map(
                        flavor =>
                            <option value={flavor} key={flavor}>
                                {flavor}
                            </option>
                    )}
                </select>
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

        </div>
    }
}
