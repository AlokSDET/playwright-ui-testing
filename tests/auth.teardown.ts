
var fs = require('fs');

import { test as teardown, expect } from '@playwright/test';
teardown('clear authentication file', async ({ browser }) => {
    try {
        var filePath = './playwright/.auth/user.json'; 
        fs.unlinkSync(filePath);
        console.log('file deleted')
    } catch (error) {
        console.error("Error in unlinking file:", error);
    }
});