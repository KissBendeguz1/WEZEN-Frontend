function Naplo() {
  return (
      <div className="grid grid-cols-2 grid-flow-col grid-rows-2 gap-2">
          <div>
              <div className="grid w-100 bg-red-100 p-25 mt-5">
                <div className="grid grid-cols-1 grid-flow-col grid-rows-2">
                  <input className="border rounded-full bg-white h-7" type="search" name="" id=""/>
                  <div className="Boxes grid grid-cols-0 grid-flow-col grid-rows-2">
                  <div className="w-auto h-10 bg-gray-300 m-1">
                      <h5 className="text-center">asd</h5>
                  </div>
                  <div className="w-auto h-10 bg-gray-300 m-1">
                      <h5 className="text-center">asd</h5>
                  </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
              <div className="grid w-100 bg-red-200 p-25 mt-5 ">
                <h1 className="text-center">2</h1>
              </div>
          </div>
          <div>
              <div className="grid w-100 bg-red-300 p-25 mt-5">
                <div className="grid grid-cols-1 grid-flow-col grid-rows-2">
                  <div>
                      <div className="grid grid-cols-2 grid-flow-col grid-rows-1">
                          <h3 className="text-left">Calories</h3>
                          <p className="text-right">1000/2000</p>
                      </div>
                      <hr className="h-1.5 w-full bg-linear-to-r from-orange-500 from-50% to-gray-500 to-50% rounded-full border-0" />
                  </div>
                  <div>
                      <div className="grid grid-cols-2 grid-flow-col grid-rows-1">
                          <h3 className="text-left">Water</h3>
                          <p className="text-right">1.85L/2L</p>
                      </div>
                      <hr className="h-1.5 w-full bg-linear-to-r from-blue-500 from-90% to-gray-500 to-92% rounded-full border-0" />
                  </div>
                </div>
              </div>
          </div>
          <div>
              <div className="grid w-100 bg-red-400 p-25 mt-5">
                <h1 className="text-center">4</h1>
              </div>
          </div>
      </div>
  );
}

export default Naplo;
