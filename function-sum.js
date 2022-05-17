const functionSum = async(...variableNumber) => {
    return variableNumber.reduce((totalCalculation, currentValue) => totalCalculation + currentValue)

}

module.exports = functionSum;