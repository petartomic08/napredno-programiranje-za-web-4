function printDetails(apartments) {
    console.log(`average price is: ${apartments.apartmentAveragePrice}, 
        aparments for sale: ${apartments.apartmentsForSale}`)
}

const apartments = { apartmentAveragePrice: 2000, apartmentsForSale: 20 }

module.exports = {printDetails, apartments}