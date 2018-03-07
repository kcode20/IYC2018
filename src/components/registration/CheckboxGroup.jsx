import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';

const CheckboxGroup = ({ options, input }) => (
	<FormGroup controlId={options.name}>
		<ControlLabel>{options.label}</ControlLabel>
		{options.map((options, index) => (
			<div className="checkbox" key={index}>
				<label>
					<input
						type="checkbox"
						name={`${options.name}[${index}]`}
						value={options.value}
						onChange={event => {
							const newValue = [...input.value];
							if (event.target.checked) {
								newValue.push(options.value);
							} else {
								newValue.splice(newValue.indexOf(options.value), 1);
							}

							return input.onChange(newValue);
						}}
					/>
					{options.label}
				</label>
			</div>
		))}
	</FormGroup>
);

export default CheckboxGroup;
