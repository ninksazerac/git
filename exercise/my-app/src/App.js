// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CardFood from "./CardFood";

function App() {
  const foodList = [
    {
      type: "อาหารคาว",
      food: "ข้าวผัด",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc:
        "https://www.thammculture.com/wp-content/uploads/2023/05/Untitled-442.jpg",
    },
    {
      type: "อาหารหวาน",
      food: "บัวลอย",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc: "https://img.kapook.com/u/2023/wanwanat/2006890658.jpg",
    },
    {
      type: "อาหารคาว",
      food: "ข้าวคลุกกะปิ",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc:
        "https://www.apthai.com/images/production/vLinrLDtO2rtFhm1sBpW9F87ZFaCJ5Hibfx5VoPV.jpg",
    },
    {
      type: "อาหารคาว",
      food: "ปูผัดผงกะหรี่",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc: "https://reds4families.com/wp-content/uploads/2023/01/3-3.jpg",
    },
    {
      type: "อาหารหวาน",
      food: "ข้าวเหนียวมะม่วง",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc:
        "https://static.thairath.co.th/media/dFQROr7oWzulq5FZUHxCFjOKH5Gfp4kaxuojbqpgwmhf8cEYAXqkRr0rqxGfxOwGuMF.webp",
    },
    {
      type: "อาหารหวาน",
      food: "กล้วยบวชชี",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc: "https://images.deliveryhero.io/image/fd-th/LH/te10-hero.jpg",
    },
  ];
  // const [totalVotes, setTotalVotes] = useState(0);
  // const handleVote = (resultCount) => {
  //   setTotalVotes(resultCount);
  // };
  return (
    <div className="food">
      <h1>โหวตอาหาร</h1>
      {/* {foodList.map((data) => (
        <h1>{data.food}</h1>
      ))} */}
      {/* <p>{totalVotes}</p> */}
      {/* <CardFood onVote={handleVote} /> */}
      {foodList.map((data) => (
        <CardFood
          type={data.type}
          food={data.food}
          detail={data.detail}
          imgSrc={data.imgSrc}
        />
      ))}
    </div>
  );
}

export default App;
