const express = require('express')
const router = express.Router()

// @desc    Login/Landing page
// @route   GET / 
router.get('/', (req, res) => {
<<<<<<< HEAD
    res.render('login',{
=======
    res.render('login', {
>>>>>>> old-state
        layout: 'login',
    })
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


module.exports = router

