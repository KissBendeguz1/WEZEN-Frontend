function Naplo() {
  return (
      <div className="grid grid-cols-[60%_0%_40%] grid-flow-col grid-rows-2 gap-2">
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
            <div className="grid grid-flow-col grid-rows-[10%_0%_90%] w-[90%] bg-[var(--color-box-fill)] rounded-2xl shadow-xl mb-10 ">
              <div className="m-10">
                <select name="" id="">
                  <option value="asd">asd</option>
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
                      <hr className="h-1.5 w-full bg-linear-to-r from-blue-500 from-90% to-gray-500 to-92% rounded-full border-0" />
                  </div>
                </div>
              </div>
          </div>
          <div>
              <div className="grid grid-flow-col grid-rows-[12%_50%_12%_12%] w-100 bg-[var(--color-box-fill)] rounded-2xl shadow-xl p-25 mt-5 mb-10">
                <div className="mb-20 text-[0.65em]">
                  <h1>0.5l / 2l</h1>
                </div>
                <div className="mb-20">
                  <img src="https://placehold.co/200x200"/>
                </div>
                <div className="mb-20">
                  <button>ok</button>
                  <input type="text" name="" id="" className="w-10 ml-5 mr-5" />
                  <button>nem</button>
                </div>
                <div className="mb-20">
                  <button>Hozzáadás</button>
                </div>
              </div>
          </div>
      </div>
  );
}

export default Naplo;
