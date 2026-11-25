function Recipe() {


  const recipes = [
    {
      id: 1,
      img: "https://placehold.co/100x100",
      name: "Hagyományos marhagulyás",
      time: "120 perc",
      difficulty: "Közepes",
      kcal: 450,
      portion: "4 adag",
    },
    {
      id: 2,
      img: "https://placehold.co/100x100",
      name: "Spaghetti Carbonara",
      time: "25 perc",
      difficulty: "Könnyű",
      kcal: 620,
      portion: "2 adag",
    },
    {
      id: 3,
      img: "https://placehold.co/100x100",
      name: "Grillezett csirkés Cézár saláta",
      time: "30 perc",
      difficulty: "Könnyű",
      kcal: 380,
      portion: "2 adag",
    },
    {
      id: 4,
      img: "https://placehold.co/100x100",
      name: "Túrós palacsinta",
      time: "45 perc",
      difficulty: "Könnyű",
      kcal: 310,
      portion: "6 adag",
    },
  ];


  function Recipes({ recipes }) {
    return (
      <div className="w-full min-w-0">
        {recipes.map((rec) => (
          <div
            className="text-text flex flex-row basis-full bg-white gap-5 my-5 p-2 w-full min-w-0 rounded rounded-xl drop-shadow-lg"
            key={rec.id}
          >
            <img src={rec.img} alt={rec.name} />
            <div className="flex flex-auto flex-col w-40 justify-between">
              <h2>{rec.name}</h2>
              <div className="flex flex-auto flex-row items-end gap-3">
                <div className="w-fit flex flex-row justify-center bg-secondary rounded rounded-xl text-white p-1 items-center h-fit px-3">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p className="mx-2">{rec.time}</p>
                </div>
                <div className="w-fit flex flex-row justify-center bg-secondary rounded rounded-xl text-white p-1 items-center h-fit px-3">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>{rec.difficulty}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-auto items-end gap-4">
              <div className="w-fit flex flex-row justify-center bg-box-fill rounded rounded-xl text-text p-1 px-3 items-center h-fit drop-shadow-md">
                <p>{rec.kcal} / adag</p>
              </div>
              <div className="w-fit flex flex-row justify-center bg-box-fill rounded rounded-xl text-text p-1 px-3 items-center h-fit drop-shadow-md">
                <p>{rec.portion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
      
    

  }

  return (
    <div className="flex flex-row gap-10 w-full flex-auto p-10">
      <div
        name="asd"
        className="flex flex-auto h-10 w-md min-w-0 bg-box-fill drop-shadow-xl"
      >
        <div className="w-full min-w-0 ">
          <input type="text" />
          <Recipes recipes={recipes} />
        </div>
      </div>
      <div className="flex flex-auto h-10 bg-box-fill w-md"></div>
    </div>
  );
}

export default Recipe;
