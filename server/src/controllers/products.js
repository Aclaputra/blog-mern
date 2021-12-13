exports.createProduct = (req, res, next) => 
{
    res.json({
        message: 'Product created successfully',
        data: {
            id: 1,
            name: "Custom Case Miya - Mobile Legends",
            material: "Polycarbonate",
            price: 80000,
        }
    });
    next();
}
exports.getAllProducts = (req, res, next) => 
{
    res.json({
        message: 'All products retrieved successfully',
        data: [
            {
                id: 1,
                name: "Custom Case Miya - Mobile Legends", 
                material: "Polycarbonate",
                price: 80000,
            },
            {
                id: 2,
                name: "Custom Case Miya - Mobile Legends", 
                material: "Polycarbonate",
                price: 80000,
            },
            {
                id: 3,
                name: "Custom Case Miya - Mobile Legends", 
                material: "Polycarbonate",
                price: 80000,
            },
        ],
    });
    next();
}
