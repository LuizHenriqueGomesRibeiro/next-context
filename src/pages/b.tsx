import cookies from '@/cookies';
import { parse } from 'cookie';
import { GetServerSidePropsContext } from 'next';

const B = ({ myCookieValue }: any) => {
    return <div>
        b {myCookieValue.map((element: any) => <div>
            {element.name}
        </div>)}
    </div>;
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const myCookie = cookies.getMyCookieValue(context);

    return {
        props: {
            myCookieValue: myCookie,
        },
    };
};

export default B;