import { z} from 'zod';


const userScehma = z.object({
    userName: z.string(),
})

const user = {userName: "WDS"};

console.log(userScehma.parse(user));