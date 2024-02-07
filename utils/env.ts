import 'dotenv/config';

export default class ENV {
    public static BASE_URL = process.env.BASE_URL;
    public static USER_NAME = process.env.USER_NAME;
    public static PASS_WORD = process.env.PASS_WORD;
}