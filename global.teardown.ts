
import fs from "fs";
async function globalTearDown() {
    try {
        var filePath = './playwright/.auth/user.json'; 
        fs.unlinkSync(filePath);
    } catch (error) {
        console.error("Error in unlinking file:", error);
    }
}
export default globalTearDown;