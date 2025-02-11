import { GetServerSidePropsContext } from "next";
import { parse } from 'cookie';

export class Cookies {
    public save = (name: string, data: any) => {
        document.cookie = `${name}=${
            encodeURIComponent(
                JSON.stringify(data)
            )
        }; path=/;`;
    }

    private get = (name: string, context: GetServerSidePropsContext) => {
        const cookies = parse(context.req.headers.cookie || '');
        const myCookieValue = cookies[name] ? JSON.parse(decodeURIComponent(cookies[name])) : null;
        return myCookieValue;
    }

    public getMyCookieValue = (context: GetServerSidePropsContext) => {
        const cookies = this.get('myCookie', context);
        return cookies as {
            name: string
        }[];
    }
}

const cookies: Cookies = new Cookies();
export default cookies;