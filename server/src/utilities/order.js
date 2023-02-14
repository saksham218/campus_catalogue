const path = require('path');
const fs = require('fs');
const deleteOrderFolder = (order) => {
    try {
        const folderPath = path.join(__dirname, '../..', 'uploads', order._id.toString());
        fs.rmSync(folderPath, { recursive: true, force: true });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    deleteOrderFolder
};
