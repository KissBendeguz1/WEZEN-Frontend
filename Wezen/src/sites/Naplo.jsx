import { useState } from "react";

export const Naplo = () => {

  const [GetWater,SetWater] = useState(0);
  const [input,setinput] = useState(0);
  var daily_goal = 2000;
  var fix = 2000;

  var honapok = ["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"]
  var etelek = [{food: "elet1", info: "200g 600 cal"},{food: "elet2", info: "200g 600 cal"},{food: "elet3", info: "200g 600 cal"}]

  const handleAddWater = () => {
    SetWater(GetWater + input)
    console.log(daily_goal - GetWater)
    console.log(daily_goal / fix)
};

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div>
              <div className="grid w-[90%] bg-[var(--color-box-fill)] pt-5 pb-20 mt-5 rounded-2xl shadow-md">
                <div className="grid h-auto w-90 mx-auto pb-5">
                  <input className="w-90 border rounded-full bg-white h-7 p-3 mx-auto" type="search"/>
                </div>
                <div className="grid grid-cols-1 grid-flow-col grid-rows-1 h-auto w-90 mx-auto">
                  <div className=" grid grid-cols-0 grid-flow-col grid-rows-3">
                    <div className="grid grid-cols-[50px_1fr_50px] gap-3 w-90 h-15 bg-gray-300 m-1 grid rounded-2xl items-center p-2">
                        <img src="https://placehold.co/50x50" className="rounded-md"/>
                      <div className="grid grid-cols-1 grid-flow-col grid-rows-2 text-[0.65em] font-bold justify-start">
                          <div>
                            <p>Étel Neve</p>
                          </div>
                          <div>
                            <p>200g 600 cal</p>
                          </div>
                      </div>
                      <img src="https://placehold.co/50x50"/>
                    </div>
                    <div className="grid grid-cols-[50px_1fr_50px] gap-3 w-90 h-15 bg-gray-300 m-1 grid rounded-2xl items-center p-2">
                        <img src="https://placehold.co/50x50" className="rounded-md"/>
                      <div className="grid grid-cols-1 grid-flow-col grid-rows-2 text-[0.65em] font-bold justify-start">
                          <div>
                            <p>Étel Neve</p>
                          </div>
                          <div>
                            <p>200g 600 cal</p>
                          </div>
                      </div>
                      <img src="https://placehold.co/50x50"/>
                    </div>
                    <div className="grid grid-cols-[50px_1fr_50px] gap-3 w-90 h-15 bg-gray-300 m-1 grid rounded-2xl items-center p-2">
                        <img src="https://placehold.co/50x50"className="rounded-md"/>
                      <div className="grid grid-cols-1 grid-flow-col grid-rows-2 text-[0.65em] font-bold justify-start">
                          <div>
                            <p>Étel Neve</p>
                          </div>
                          <div>
                            <p>200g 600 cal</p>
                          </div>
                      </div>
                      <img src="https://placehold.co/50x50"/>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div className="grid w-100 bg-[var(--color-box-fill)] p-25 mt-5 rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 grid-flow-col grid-rows-2">
                  <div className="pb-15">
                      <div className="grid grid-cols-2 grid-flow-col grid-rows">
                          <h3 className="text-left">Calories</h3>
                          <p className="text-right">1000/2000</p>
                      </div>
                      <hr className="h-1.5 w-full bg-linear-to-r from-orange-500 from-50% to-gray-500 to-50% rounded-full border-0" />
                  </div>
                  <div className="pb-15">
                      <div className="grid grid-cols-2 grid-flow-col grid-rows">
                          <h3 className="text-left">Water</h3>
                          <p className="text-right">1.85L/2L</p>
                      </div>
                      <hr className={`h-1.5 w-full bg-linear-to-r from-blue-500 from-${daily_goal / fix}% to-gray-500 to-${daily_goal / fix}% rounded-full border-0`} />
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div className="grid grid-flow-col grid-rows-[10%_0%_90%] w-[90%] bg-[var(--color-box-fill)] rounded-2xl shadow-xl mb-10 ">
              <div className="m-10">
                <select name="" id="">
                  {honapok.map(honap =>
                    <option key={honap} value={honap}>{honap}</option>
                  )}
                </select>
                <select name="" id="">
                  <option value="asd">asd</option>
                </select>
              </div>
              <div className="m-10">
                <img src="https://placehold.co/500x200"/>
              </div>
            </div>
          </div>
          <div>
              <div className="grid grid-flow-col grid-rows-[25%_50%_12%_12%] w-100 bg-[var(--color-box-fill)] rounded-2xl shadow-xl text-center justify-center">
                <div className=" text-[0.65em]">
                  <h1>0.5l / 2l</h1>
                </div>
                <div className="h-max ml-auto mr-auto flex">
                  <img src="https://placehold.co/200x200"/>
                </div>
                <div className="">
                  <button className="bg-[var(--color-white)] rounded-xl p-2 shadow-xl pl-4 pr-4 cursor-pointer" onClick={() => setinput(input - 10)}>-</button>
                  <input type="text" name="" id="" value={input} onChange={(e) => setinput(e.target.value)} className="w-10 ml-2 mr-2 bg-[var(--color-white)] rounded-xl w-[60%] h-10 p-2"/>
                  <button className="bg-[var(--color-white)] rounded-xl p-2 shadow-xl pl-4 pr-4 cursor-pointer" onClick={() => setinput(input + 10)}>+</button>
                </div>
                <div className="mt-2">
                  <button className="bg-[var(--color-secondary)] text-[var(--color-white)] rounded-2xl cursor-pointer w-[100%] pt-1 pb-1 font-bold" onClick={handleAddWater}>Hozzáadás</button>
                </div>
              </div>
          </div> 
      </div>
      </>
  );
}


{/*
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div>
              <div className="grid w-[90%] bg-[var(--color-box-fill)] pt-5 pb-20 mt-5 rounded-2xl shadow-md">
                <div className="grid h-auto w-90 mx-auto pb-5">
                  <input className="w-90 border rounded-full bg-white h-7 p-3 mx-auto" type="search"/>
                </div>
                <div className="grid grid-cols-1 grid-flow-col grid-rows-1 h-auto w-90 mx-auto">
                  <div className=" grid grid-cols-0 grid-flow-col grid-rows-3">
                  {(etelek.map((value => 
                      <div className="grid grid-cols-[50px_1fr_50px] gap-3 w-90 h-15 bg-gray-300 m-1 grid rounded-2xl items-center p-2">a
                        <img src="https://placehold.co/50x50" className="rounded-md"/>
                      <div className="grid grid-cols-1 grid-flow-col grid-rows-2 text-[0.65em] font-bold justify-start">
                          <div>
                            <p>{value.food}</p>
                          </div>
                          <div>
                            <p>{value.info}</p>
                          </div>
                      </div>
                      <img src="https://placehold.co/50x50"/>
                    </div>
                  )))}
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div className="grid w-100 bg-[var(--color-box-fill)] p-25 mt-5 rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 grid-flow-col grid-rows-2">
                  <div className="pb-15">
                      <div className="grid grid-cols-2 grid-flow-col grid-rows">
                          <h3 className="text-left">Calories</h3>
                          <p className="text-right">1000/2000</p>
                      </div>
                      <hr className="h-1.5 w-full bg-linear-to-r from-orange-500 from-50% to-gray-500 to-50% rounded-full border-0" />
                  </div>
                  <div className="pb-15">
                      <div className="grid grid-cols-2 grid-flow-col grid-rows">
                          <h3 className="text-left">Water</h3>
                          <p className="text-right">1.85L/2L</p>
                      </div>
                      <hr className="h-1.5 w-full bg-linear-to-r from-blue-500 from-90% to-gray-500 to-90% rounded-full border-0" />
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div className="grid grid-flow-col grid-rows-[10%_0%_90%] w-[90%] bg-[var(--color-box-fill)] rounded-2xl shadow-xl mb-10 ">
              <div className="m-10">
                <select name="" id="">
                  {honapok.map(honap =>
                    <option key={honap} value={honap}>{honap}</option>
                  )}
                </select>
                <select name="" id="">
                  <option value="asd">asd</option>
                </select>
              </div>
              <div className="m-10">
                <img src="https://placehold.co/500x200"/>
              </div>
            </div>
          </div>
          <div>
              <div className="grid grid-flow-col grid-rows-[25%_50%_12%_12%] w-100 bg-[var(--color-box-fill)] rounded-2xl shadow-xl text-center justify-center">
                <div className=" text-[0.65em]">
                  <h1>0.5l / 2l</h1>
                </div>
                <div className="h-max ml-auto mr-auto flex">
                  <img src="https://placehold.co/200x200"/>
                </div>
                <div className="">
                  <button className="bg-[var(--color-white)] rounded-xl p-2 shadow-xl pl-4 pr-4 cursor-pointer">-</button>
                  <input type="text" name="" id="" className="w-10 ml-2 mr-2 bg-[var(--color-white)] rounded-xl w-[60%] h-10 p-2"/>
                  <button className="bg-[var(--color-white)] rounded-xl p-2 shadow-xl pl-4 pr-4 cursor-pointer">+</button>
                </div>
                <div className="mt-2">
                  <button className="bg-[var(--color-secondary)] text-[var(--color-white)] rounded-2xl cursor-pointer w-[100%] pt-1 pb-1 font-bold">Hozzáadás</button>
                </div>
              </div>
          </div>
      </div>
      </>
  );
  
  */}