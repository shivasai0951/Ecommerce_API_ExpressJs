// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Middleware to check if the user is an admin
function isAdmin(req, res, next) {
    // Replace this with your actual admin check logic
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: 'Access denied' });
}

// Get all orders (Admin only)
router.get('/orders', isAdmin, async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('items.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
});

// Update order status (Admin only)
router.put('/orders/:orderId', isAdmin, async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    try {
        const order = await Order.findByIdAndUpdate(orderId, { status, updatedAt: Date.now() }, { new: true });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error });
    }
});

// Cancel an order (Admin only)
router.post('/orders/:orderId/cancel', isAdmin, async (req, res) => {
    const { orderId } = req.params;

    try {
        const order = await Order.findByIdAndUpdate(orderId, { status: 'cancelled', updatedAt: Date.now() }, { new: true });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling order', error });
    }
});

// Refund an order (Admin only)
router.post('/orders/:orderId/refund', isAdmin, async (req, res) => {
    const { orderId } = req.params;

    try {
        const order = await Order.findByIdAndUpdate(orderId, { status: 'refunded', updatedAt: Date.now() }, { new: true });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error refunding order', error });
    }
});

module.exports = router;
