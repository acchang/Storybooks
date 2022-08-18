const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../views/middleware/auth')

const Story = require('../models/Story')

// @desc   Show add page
// @route   GET /stories/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
})

// @desc   Process add gotm
// @route  POST /stories
// router.post('/', ensureAuth, async (req, res) => {
//    try {
//         req.body.user = req.user.id
//         await Story.create(req.body)
//         res.redirect('/dashboard')
//    } catch (err) {
//         console.error(err)
//         res.render('error/500')
//    }
// })

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
      const stories = await Story.find({ user: req.user.id }).lean()
      res.render('dashboard', {
        name: req.user.firstName,
        stories,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

module.exports = router