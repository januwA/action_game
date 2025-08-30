import { Link } from "react-router-dom";
import Img1 from "./assets/a.png";
import isEmpty from "lodash/isEmpty";

export const Main = () => {
  return <div>
    <h1>动作游戏</h1>
    <div style={{
      'display': 'flex',
      gap: '6px'
    }}>
      <img data-testid="img1" src={Img1} alt="" />
    </div>
      <button onClick={() => {
        console.log(isEmpty(0));
      }}>btn</button>
  </div>
}

export const Settings = {
  menu_items: [
    {
      key: 'action_game',
      label: <Link to='/action_game'>动作游戏</Link>,
    }
  ],
  route: {
    path: '/action_game',
    children: [
      {
        index: true,
        element: <Main />
      }
    ]
  }
}

