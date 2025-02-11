import cookies from "@/cookies";
import { useRouter } from "next/router";

const Home = () => {

  const route = useRouter();
  return <div>
    home
    <button onClick={() => {
      const data = [
        { name: 'luis' }, 
        { name: 'leonard' }
      ];

      cookies.save('myCookie', data);
      route.push('/b');
    }}>Botão</button>
  </div>
}

export default Home;