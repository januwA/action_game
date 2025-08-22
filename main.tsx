import { Link, Route } from "react-router-dom";
import Img1 from "./assets/a.png";

const Main = () => {
  return <div>
    <h1>动作游戏</h1>
    <div style={{
      'display': 'flex',
      gap: '6px'
    }}>
      <img src={Img1} alt="" />
    </div>
  </div>
}

export const Settings = {
  menu_items: [
    {
      key: 'action_game',
      label: <Link to='action_game'>动作游戏</Link>,
    }
  ],
  route: <Route path='action_game'>
    <Route index element={<Main />} />
  </Route>
}

