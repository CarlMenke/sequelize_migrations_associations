const { Business, Address, Employee } = require('./models')

const stringify = (data) =>{
  console.log(JSON.stringify(data))
}
const getAllBusinesses = async () => {
  try {
    const businesses = await Business.findAll()
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const businessesAndAddress = await Business.findAll({include:Address})
    return businessesAndAddress
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const businessesAndAddress = await Business.findAll({include:Employee})
    return businessesAndAddress
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const businessesAndAddress = await Business.findAll({include:[Address,Employee]})
    return businessesAndAddress
  } catch (error) {
    console.log(error)
  }
}

// const run = async () => {
//   await getAllBusinesses()
// }

// run()


module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee
}
