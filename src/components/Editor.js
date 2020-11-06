import React, {Component} from 'react';

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bob",
            flavor: "Vanilla",
            toppings: ["Strawberries"],
            cone: "Waffle cone"
        }

        this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
        this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
        this.cones = ["Waffle cone", "Sugar cone", "Chocolate dipper", "Gluten free"]
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

    updateFormValueCheck = (event) => {
        event.persist();
        this.setState(state => {
            if (event.target.checked) {

            } else {

            }
        }, () => this.props.submit(this.state))
    }

    getCheckboxId = (cone) => {
        return `cone ${cone}`;
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

            <div className='form-group'>
                <label>Ice Cream Cones</label>
                {this.cones.map(cone =>
                    <div className='form-check' key={cone}>
                        <input type="radio" className='form-check-input'
                               name='cone'
                               id={this.getCheckboxId(cone)}
                               value={cone}
                               checked={this.state.cone === cone}
                               onChange={this.updateFormValues}
                        />
                        <label className='form-check-label' for={this.getCheckboxId(cone)}>
                            {cone}
                        </label>
                    </div>
                )}
            </div>

        </div>
    }
}
