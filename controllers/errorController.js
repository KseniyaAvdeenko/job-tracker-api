const handleError = (res, status, error) => {
    res.status(status).send(error.message)
}

module.exports = {handleError: handleError};