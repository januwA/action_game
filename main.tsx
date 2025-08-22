import Img1 from "./assets/a.png";
export const Settings = {
  app_name: "动作游戏"
}

export const Main = () => {
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
