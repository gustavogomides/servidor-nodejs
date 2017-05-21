module.exports.calculate = calculate;

function calculate(data){
	var number1 = data.number1;
	var number2 = data.number2;

	var result = {
		number1: parseInt(number1),
		number2: parseInt(number2),
		result: (number1 * number2)
	};
		
	return generateResponse(result);
}

function generateResponse(data){
	var response = {
		code: 200,
		status: 'success',
		message: 'Calculate OK',
		data: data
	};

	return response;
}