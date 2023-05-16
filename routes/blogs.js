const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.send(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    res.send(await Blog.findOne({ id: req.params.id }));
})

router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
	id: req.body.id,
    })
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})
module.exports = router;
